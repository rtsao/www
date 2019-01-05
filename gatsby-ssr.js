import React from "react";
import { Server as Styletron } from "styletron-engine-atomic";
import { Provider } from "styletron-react";

const engine = new Styletron();

export const wrapRootElement = ({ element }, options) => (
  <Provider value={engine}>{element}</Provider>
);

export const onRenderBody = ({ bodyComponent, setHeadComponents }, options) => {
  const stylesheets = engine.getStylesheets();
  const headComponents = stylesheets[0].css
    ? stylesheets.map((sheet, index) => (
        <style
          className="_styletron_hydrate_"
          dangerouslySetInnerHTML={{
            __html: sheet.css,
          }}
          key={index}
          media={sheet.attrs.media}
        />
      ))
    : null;

  setHeadComponents(headComponents);
};
