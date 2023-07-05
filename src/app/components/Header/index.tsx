import { useContext } from 'react'
import { HeaderContainer, Link, Ul } from './styles'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

type Props = {
  onChangeTheme: () => void
}

export const Header = ({ onChangeTheme }: Props) => {
  const { name, colors } = useContext(ThemeContext)
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
        <Switch
          onChange={onChangeTheme}
          checked={name === 'light'}
          height={20}
          width={40}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offColor={colors.text}
          onColor={colors.text}
        />
      </Ul>
    </HeaderContainer>
  )
}
