'use client'

import { useEffect, useState } from 'react'
import { ProjectsContainer, ProjectsWrapper } from './styles'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import dark from '@/themes/dark'
import light from '@/themes/light'
import GlobalStyles from '@/styles/globalStyles'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'

type Project = {
  id: number
  full_name: string
  html_url: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const loadProjects = async () => {
    const response = await fetch(
      'https://api.github.com/users/douglasmamedemartins/repos',
    )
    const data = await response.json()
    setProjects(data)
  }

  useEffect(() => {
    loadProjects()
  }, [])

  const [isDarkTheme, setIsDarkTheme] = useState(light)

  const onChangeTheme = () => {
    setIsDarkTheme(isDarkTheme.name === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={isDarkTheme}>
      <div>
        <Header onChangeTheme={onChangeTheme} />
        <ProjectsContainer>
          {projects.map((item) => (
            <ProjectsWrapper key={item.id}>
              <Link href={item.html_url} target="_blank">
                {item.full_name}
              </Link>
            </ProjectsWrapper>
          ))}
        </ProjectsContainer>
        <Contact />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  )
}

export default Projects
