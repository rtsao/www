import Link from 'hokusai/link';

export const h1 = ({children}, {styletron}) =>
  <h1 style={{
    fontFamily: 'soleil, sans-serif',
    fontStyle: 'normal',
    fontSize: '58px',
    fontWeight: 300,
    '-webkit-font-smoothing': 'subpixel-antialiased'
  }}>{children}</h1>

export const h2 = ({children}, {styletron}) =>
  <h2 style={{
    fontFamily: 'soleil, sans-serif',
    fontStyle: 'normal',
    fontSize: '28px',
    '-webkit-font-smoothing': 'subpixel-antialiased'
  }}>{children}</h2>


export const h3 = ({children}, {styletron}) =>
  <h3 style={{
    fontFamily: 'soleil, sans-serif',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: 600,
    '-webkit-font-smoothing': 'subpixel-antialiased'
  }}>{children}</h3>

export const code = ({children}, {styletron}) =>
  <code style={{
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '0.9em'
  }}>{children}</code>


export const sup = ({children, ...props}, {styletron}) =>
  <sup style={{
    marginLeft: '.2em',
    marginRight: '.1em'
    // fontFamily: 'soleil, sans-serif',
    // fontStyle: 'normal',
    // fontSize: '30px',
    // width: '40px',
    // fontWeight: 600,
    // '-webkit-font-smoothing': 'subpixel-antialiased'
  }} {...props}>{children}</sup>

export const Anchor = ({children, to, href}, {styletron}) => {
  const style = {
    textDecoration: 'none',
    borderBottom: '2px solid #CFF3FF',
    boxShadow: 'inset 0 -9px 0 #EEFBFF',
    transition: 'box-shadow ease 160ms',
    color: '#222',
    ':hover': {
      boxShadow: 'inset 0 -1.2em 0 #CFF3FF'
    },
    ':active': {
      boxShadow: 'inset 0 -1.2em 0 #CFF3FF'
    }
  };
  if (to) {
    return <Link styles={style} to={to}>{children}</Link>
  }
  return <a style={style} href={href}>{children}</a>
}

export {Anchor as a}
