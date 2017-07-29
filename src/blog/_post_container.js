import RealLink from 'hokusai/link';
import BlogContainer from './_blog_container.js';
import {Anchor, h1 as H1} from '../_dom.js';
import formatDate from '../_date-format.js';
import * as icons from '../_icons.js';

const Icon = ({name}, {styletron}) => {
  const viewBox = name === 'github' ? "-2 -2 68 68" : "2 4 60 60";
  return <svg style={{
    width: '18px',
    verticalAlign: 'middle',
  }} viewBox={viewBox}>{icons[name]}</svg>
}

const Footer = ({children}, {styletron}) =>
  <footer style={{
    paddingTop: '60px',
    margin: '0 auto',
    maxWidth: '180px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <span>
      <Icon name="twitter"/> <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
    </span>
    <span>
    <Icon name="github"/> <Anchor href="https://github.com/rtsao">@rtsao</Anchor>
    </span>
  </footer>

export default ({blog, title, date, children}, {styletron}) =>
  <BlogContainer>
    <H1>{title}</H1>
    <em>{date && formatDate(date)}</em>
    {children}
    <Footer/>
  </BlogContainer>
