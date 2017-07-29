import {Anchor} from './_dom.js';

import * as icons from './_icons.js';

const Icon = ({name}, {styletron}) => {
  const viewBox = name === 'github' ? "-2 -2 68 68" : "2 4 60 60";
  return <svg style={{
    width: '18px',
    verticalAlign: 'middle',
    marginLeft: '-28px',
    marginRight: '10px'
  }} viewBox={viewBox}>{icons[name]}</svg>
}

const List = ({children}, {styletron}) =>
  <ul style={{
    listStyleType: 'none',
    padding: 0
  }}>
    {children}
  </ul>

const ListItem = ({children}, {styletron}) =>
  <li style={{
    marginBottom: '12px'
  }}>{children}</li>

export default (
  <List>
    <ListItem>
      <Icon name="twitter"/>
      <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
    </ListItem>
    <ListItem>
      <Icon name="github"/>
      <Anchor href="https://github.com/rtsao">github.com/rtsao</Anchor>
    </ListItem>
  </List>
);
