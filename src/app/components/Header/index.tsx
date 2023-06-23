'use client'

import { HeaderContainer, Link, Ul } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Projetos</Link>
        </li>
        <li>
          <Link href="">Contato</Link>
        </li>
      </Ul>
    </HeaderContainer>
  )
}
