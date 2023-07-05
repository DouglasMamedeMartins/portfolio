import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      primaryColor: string
      secondaryColor: string
      titles: string
      text: string
    }
  }
}
