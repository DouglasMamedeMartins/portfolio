import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1100px;
  margin: 0 auto;
  background-color: blue;
  padding: 20px 10px;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  :hover {
    color: #121214;
    transition: all 0.1s ease-in-out;
  }
`

export const Link = styled.a`
  color: white;
  text-decoration: none;
`
