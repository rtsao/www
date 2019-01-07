---
title: Generating CSS to JS Source Maps with Web Workers and WebAssembly
date: 2019-01-06
---

Source maps are a boon for web developers, especially as the usage of bundlers, preprocessors, and transpilers has skyrocketed. Browser developer tools can consume source maps, allowing for inspection and debugging of the original source rather than the compiled output actually run in the browser.

Generally speaking, source maps contain metadata mapping bundled or compiled JS and CSS to their respective original, un-mangled source files. For those interested, I recommend reading this [introduction to source maps](http://www.mattzeunert.com/2016/02/14/how-do-source-maps-work.html) by Matt Zeunert. Additionally, Tobias Koppers and Paul Irish built a neat [source map visualization tool](http://sokra.github.io/source-map-visualization/) that illustrates how text spans are mapped from output to source.

## CSS source maps: what about CSS-in-JS?

With static CSS, it's easy to inspect a particular element in Chrome DevTools using the elements pane and with one click be taken to the original source containing the relevant styles.

Not surprisingly, this workflow can be disrupted when using CSS-to-JS, as the true source location for a given style is actually located in a JS file. Without a source map, clicking these styles merely results in being shown the corresponding line in the generated CSS in the page -- far less useful than with traditional CSS source maps.

Restoring this functionality for CSS-in-JS can be a tricky problem for a host of reasons, including:

1. Existing tooling usually only supports source map generation for straightforward compilation/bundling of static source code. CSS-in-JS is a whole different beast, which potentially involves various runtime abstractions in generating CSS[^1]
2. Even if a source map could be generated, it may not always be clear where the canonical JS source location for a given CSS rule is, especially if that CSS is generated dynamically. This is especially challenging for CSS-in-JS abstractions that produce atomic CSS, such as [Styletron](https://github.com/styletron/styletron).

## Generating a source map from CSS to JS

To address this problem, I built [css-to-js-sourcemap](https://github.com/rtsao/css-to-js-sourcemap), a low-level library for CSS-in-JS framework authors to generate useful source maps. Below is demonstration of how it's used with [Styletron](https://github.com/styletron/styletron).

In development, each styled component is also rendered with a no-op debug CSS class that has an associated source map pointing to the JS source location of the component definition. This makes it a single click to be taken to the style source from the elements pane, just like with CSS.

<video width="768" controls>
  <source src="./debug-sourcemaps-optimized.mp4"></source>
  Video not supported in this browser
</video>

### A peek under the hood

All this actually happens _at runtime_ (no build tooling needed) with the heavy lifting being performed asynchronously off the main thread inside a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

See the below overview of how this works:

![Diagram](./css-sourcemap.svg)

Both parsing and generation of source maps is rather CPU intensive, so a web worker is the perfect use case for offloading this work, keeping the main thread unblocked. Furthermore, the [source-map](https://github.com/mozilla/source-map) library (used in the web worker) was recently ported to WebAssembly, so for development purposes, doing this at runtime is quite viable.

Like all web workers, communication between the source map worker and the main thread happens asynchronously via [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage) calls. In short, stack traces and class names are passed in, and CSS (with an inlined source map to JS) is sent back. Because these source maps are purely for development purposes, it's totally fine for this to be asynchronous.

Usage of css-to-js-sourcemap looks like this (note that a CSS-in-JS library should abstract this away):

```js
// Create the worker
const worker = new Worker(
  "https://unpkg.com/css-to-js-sourcemap-worker/worker.js",
);

// Add a message handler to render CSS
worker.onmessage = msg => {
  const { id, css } = msg.data;
  if (id === "render_css") {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
};

// Provide wasm binary to worker
worker.postMessage({
  id: "init_wasm",
  url: "https://unpkg.com/css-to-js-sourcemap-worker/mappings.wasm",
});

// Tell worker to post back new css (if any) every 120ms
worker.postMessage({
  id: "set_render_interval",
  interval: 120,
});

// Finally, give a class name and associated JS location
worker.postMessage({
  id: "add_mapped_class",
  className: "__debug-1",
  stackInfo: new Error("An error object, usually passed from elsewhere"),
  stackIndex: 2, // Index of the trace to use for JS location
});
```

### Hot reloading

Careful readers may have noticed the path in the demo video, `src/home.js?n=0`. Hot reloading inline source maps is a bit problematic in browsers, so the query at the end is used as workaround to invalidate the old source maps. By changing the query, the browser effectively treats it as a new source.

The following code following tells the worker to regenerate the source maps when the source code has been changed.

```js
if (module.hot) {
  module.hot.addStatusHandler(status => {
    if (status === "dispose") {
      worker.postMessage({ id: "invalidate" });
    }
  });
}
```

Once the source map has been re-generated, the worker will post back the updated CSS to the main thread.

### Future work

I hope that [css-to-js-sourcemap](https://github.com/rtsao/css-to-js-sourcemap) (or at least a similar approach) could be adopted by other CSS-in-JS libraries to provide a better debugging experience. While I think this is a good start, depending on the abstraction, I think there's definitely room for improving the source maps so they are even more useful.

### Acknowledgements

Special thanks to the maintainers of the following libraries used in css-to-js-sourcemap:

- [sourcemap-codec](https://github.com/Rich-Harris/sourcemap-codec) (by [Rich Harris](https://github.com/Rich-Harris) and contributors), used to encode the `mappings` property of the generated source maps.
- [source-map](https://github.com/mozilla/source-map) (by [Nick Fitzgerald](https://github.com/fitzgen) and contributors), used to parse and generate source maps.
- [source-map-url](https://github.com/lydell/source-map-url) (by [Simon Lydell](https://github.com/lydell) and contributors), used to extract urls from source map comments.
- [error-stack-parser](https://github.com/stacktracejs/error-stack-parser) (by [Eric Wendelin](https://github.com/eriwen) and contributors), used to extract line/column information from error stack traces.

## Footnotes

[^1]: [styled-jsx](https://github.com/zeit/styled-jsx) is one CSS-in-JS abstraction that is currently able to provide source maps. This approach is much more akin to traditional source maps in that styled-jsx is a rather thin abstraction over CSS (quite literally just CSS-in-JSX) and the source map generation is done at compile time (and thus requires build tooling).
