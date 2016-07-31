import RealLink from 'hokusai/link';
import BlogContainer from './_blog_container.js';
import {Anchor, h1 as H1} from '../_dom.js';
import formatDate from '../_date-format.js';

export default ({blog, title, date, children}, {styletron}) =>
  <BlogContainer>
    <H1>{title}</H1>
    <em>{date && formatDate(date)}</em>
    {children}
  </BlogContainer>
