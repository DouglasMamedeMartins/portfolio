import styled from 'styled-components'

export const ContactContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 1rem;
`

export const ContactContent = styled.div`
  max-width: 68.75rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

export const ContentLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2.5rem 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
  svg {
    color: ${(props) => props.theme.colors.text};
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
