import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(${(props) =>
      props.theme.colors.primaryColor}, ${(props) =>
  props.theme.colors.secondaryColor});
    overflow-x: hidden;
    
      }
 
`
