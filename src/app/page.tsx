'use client'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import light from '../themes/light'
import dark from '../themes/dark'
import GlobalStyles from '@/styles/globalStyles'
import { Contact } from './components/Contact'

const Page = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(light)

  const onChangeTheme = () => {
    setIsDarkTheme(isDarkTheme.name === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={isDarkTheme}>
      <div onChange={onChangeTheme}>
        <Header onChangeTheme={onChangeTheme} />
        <Home />
        <Contact />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  )
}

export default Page
