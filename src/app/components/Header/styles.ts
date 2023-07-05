import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #6833e4;
  padding: 1.25rem 0.625rem;
`

export const Ul = styled.ul`
  max-width: 68.75rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
`

export const Link = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.colors.titles};
    transition: all 0.1s ease-in-out;
  }
`
