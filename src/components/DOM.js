import { styled } from "styletron-react";

export const h1 = styled("h1", {
  fontFamily: "soleil, sans-serif",
  fontStyle: "normal",
  fontSize: "58px",
  fontWeight: 300,
  "-webkit-font-smoothing": "subpixel-antialiased",
});

export const h2 = styled("h2", {
  fontFamily: "soleil, sans-serif",
  fontStyle: "normal",
  fontSize: "28px",
  "-webkit-font-smoothing": "subpixel-antialiased",
});

export const h3 = styled("h3", {
  fontFamily: "soleil, sans-serif",
  fontStyle: "normal",
  fontSize: "20px",
  fontWeight: 600,
  "-webkit-font-smoothing": "subpixel-antialiased",
});

export const sup = styled("sup", {
  marginLeft: ".2em",
  marginRight: ".1em",
  position: "relative",
  top: "-0.4em",
  verticalAlign: "baseline",
  // fontFamily: 'soleil, sans-serif',
  // fontStyle: 'normal',
  // fontSize: '30px',
  // width: '40px',
  // fontWeight: 600,
  // '-webkit-font-smoothing': 'subpixel-antialiased'
});

export const a = styled("a", {
  textDecoration: "none",
  borderBottom: "2px solid #CFF3FF",
  boxShadow: "inset 0 -9px 0 #EEFBFF",
  transition: "box-shadow ease 160ms",
  color: "#222",
  ":hover": {
    boxShadow: "inset 0 -1.2em 0 #CFF3FF",
  },
  ":active": {
    boxShadow: "inset 0 -1.2em 0 #CFF3FF",
  },
});

export default {
  h1,
  h2,
  h3,
  a,
  sup,
};
