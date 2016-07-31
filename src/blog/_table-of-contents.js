import {Anchor} from '../_dom.js';
import formatDate from '../_date-format.js';

import toc from 'toc-loader!./';

const List = ({children}, {styletron}) =>
  <ul style={{
    listStyleType: 'none',
    padding: 0
  }}>{children}</ul>

const BlogEntry = ({title, date, pathname}) =>
  <li style={{
    paddingBottom: '22px'
  }}><h2 style={{
    fontFamily: 'soleil,sans-serif',
    '-webkit-font-smoothing': 'subpixel-antialiased',
    fontSize: '26px',
    fontWeight: 'normal',
    marginBottom: '12px',
    marginTop: '0px'
  }}><Anchor to={pathname}>{title}</Anchor></h2><em>{formatDate(date)}</em></li>

const Contents = toc.map(({title, date, pathname}) =>
  <BlogEntry pathname={pathname} date={date} title={title}/>
);

export default (
  <List>{Contents}</List>
);
