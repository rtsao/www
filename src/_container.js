import RealLink from 'hokusai/link';

const plainStyle = {
  color: '#222',
  textDecoration: 'none'
};

const fancyStyle = {
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
}

const PlainLink = ({children, to}) =>
  <RealLink to={to} styles={plainStyle}>{children}</RealLink>

const Link = ({children, to, active}) =>
  <RealLink activeStyles={plainStyle} styles={fancyStyle} to={to}>{children}</RealLink>

const H1 = ({children}, {styletron}) =>
  <h1 style={{
    display: 'inline',
    fontWeight: 600,
    fontSize: '20px'
  }}>{children}</h1>

const BlogLink = (props, {styletron}) => {
  const link = <Link to="/blog/">Blog</Link>;
  return true ? <h2 style={{
    display: 'inline',
    fontSize: 'inherit',
    fontWeight: 'inherit'
  }}>{link}</h2> : link;
}

export const Header = ({isBlog}, {styletron}) =>
  <header style={{
    fontFamily: 'soleil, sans-serif',
    fontStyle: 'normal',
    fontSize: '20px',
    '-webkit-font-smoothing': 'subpixel-antialiased'
  }}>
  <H1><PlainLink to="/">Ryan Tsao</PlainLink></H1> / <BlogLink isBlog={isBlog} />
  </header>

export default ({children, isBlog}, {styletron}) =>
  <div style={{
    font: '20px/1.5 freight-text-pro, serif',
    color: '#222',
    maxWidth: '65ch',
    margin: '0 auto',
    padding: '12px 52px',
    marginTop: '30vmin',
    marginBottom: '30vmin',
    '-webkit-font-smoothing': 'antialiased'
  }}>
    <Header isBlog={isBlog}/>
    {children}
  </div>
