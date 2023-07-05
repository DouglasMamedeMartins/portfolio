import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      primaryColor: string
      secondaryColor: string
      background: string
      titles: string
      text: string
      white: string
    }
  }
}
