import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(#9466ff, #9198e5);
    background-color: ${(props) => props.theme.colors.background};
    
    
  }
 
`
