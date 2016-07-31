import BaseContainer from '../_container.js';

export default ({children}) =>
  <BaseContainer isBlog={true}>
    {children}
  </BaseContainer>
