export default `html, body {
margin: 0;
padding: 0;
}

.footnote-backref {
  margin-left: 0.33em;
}

.footnotes :target {
  background: #fff3d0;
}

sup:target {
  background: #fff3d0;
}

code[class*="language-"],
pre[class*="language-"] {
font-family: "Fira Code", Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace !important;
font-size: 14px;
line-height: 1.375;
direction: ltr;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
-moz-tab-size: 4;
-o-tab-size: 4;
tab-size: 4;
-webkit-hyphens: none;
-moz-hyphens: none;
-ms-hyphens: none;
hyphens: none;
margin: 30px 0 !important;
border-radius: 5px;
}

pre[class*="language-"] {
background: #1b2b34;
color: #c0c5ce;
padding: 1em;
margin: 0.5em 0;
overflow: auto;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
text-shadow: none;
background: #a7adba;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
text-shadow: none;
background: #a7adba;
}

:not(pre) > code[class*="language-"] {
padding: 0.1em 0.3em;
border-radius: 0.3em;
background: rgba(255,229,100,0.2);
color: #1a1a1a;
font-weight: 500;
}

.token.tag > .token.punctuation, .token.tag > .token.tag {
color:  #de935f;
color: #de935f
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
color: #65737e;
}

.token.namespace {
opacity: 0.7;
}

.token.operator,
.token.boolean,
.token.number {
color: #f99157;
}

.token.property {
color: #fac863;
}

.token.tag {
color: #c0c5ce;
}

.token.attr-value,
.token.symbol,
.token.string {
color: #99c794;
}

.token.selector {
color: #c594c5;
}

.token.attr-name {
color: #fac863;
}

.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
color: #5fb3b3;
}

.token.keyword,
.token.control,
.token.directive,
.token.unit {
color: #b294bb;
}


.token.statement,
.token.regex,
.token.atrule {
color: #5fb3b3;
}

.token.placeholder,
.token.variable {
color: #69c;
}

.token.punctuation,
.token.operator {
color: #5fb3b3;
}

.token.deleted {
text-decoration: line-through;
}

.token.inserted {
border-bottom: 1px dotted #fff;
text-decoration: none;
}

.token.italic {
font-style: italic;
}

.token.important,
.token.bold {
font-weight: bold;
}

.token.constant,
.token.class-name {
color: #f99157;
}

.token.important {
color: #c66;
}

.token.entity {
cursor: help;
}

.token.function {
color: #69c;
}

pre > code.highlight {
outline: 0.4em solid #c66;
outline-offset: 0.4em;
}

.gatsby-highlight-code-line {
display: block;
background-color: rgb(51, 66, 76);
}
`;
