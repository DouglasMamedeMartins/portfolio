import styled from 'styled-components'

export const ContactContainer = styled.footer`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
`

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ContentLink = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.titles};

    &:hover {
      color: ${(props) => props.theme.colors.secondaryColor};
    }
  }
  svg {
    color: ${(props) => props.theme.colors.titles};
  }
`
