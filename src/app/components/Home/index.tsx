import { HomeContainer, HomeContainerLeft, HomeContainerRight } from './styles'
import { MyPresentation } from './components/Right'
import { MyProfile } from './components/Left'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContainerLeft>
        <MyProfile />
      </HomeContainerLeft>
      <HomeContainerRight>
        <MyPresentation />
      </HomeContainerRight>
    </HomeContainer>
  )
}
