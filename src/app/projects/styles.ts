import styled from 'styled-components'

export const ProjectsContainer = styled.main`
  width: 100%;
  height: calc(100vh - 4rem);
  padding-top: 5rem;
  max-width: 84.75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 0.75rem;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ProjectsWrapper = styled.div`
  justify-content: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 6px;
    padding: 1rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondaryColor};
      opacity: 0.9;
      transition: background-color 0.2s;
    }
  }
`
