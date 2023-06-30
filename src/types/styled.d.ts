import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      titles: string
      text: string
    }
  }
}