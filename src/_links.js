import {Anchor} from './_dom.js';

const Icon = ({src}, {styletron}) =>
  <img style={{
    width: '22px',
    verticalAlign: 'middle',
    marginLeft: '-30px',
    marginRight: '8px'
  }} src={src}/>

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
      <Icon src="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-social-twitter.svg"/>
      <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
    </ListItem>
    <ListItem>
      <Icon src="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-social-github.svg"/>
      <Anchor href="https://github.com/rtsao">github.com/rtsao</Anchor>
    </ListItem>
  </List>
);
