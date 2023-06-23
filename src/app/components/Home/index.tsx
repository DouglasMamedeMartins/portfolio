import {
  ContainerInfo,
  ContainerProfile,
  ContainerSkills,
  HomeContainer,
  HomeContainerLeft,
  HomeContainerRight,
} from './styles'
import { skills } from '../../../data/Skills'
import profile from '../../../../public/profile.jpeg'
import Image from 'next/image'
import { Person } from './components/Person'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContainerLeft>
        <ContainerProfile>
          <Image src={profile} alt="" />
          <ContainerInfo>
            <Person />
          </ContainerInfo>
          <ContainerSkills>
            {skills.map((item) => {
              return <span key={item.id}>{item.skill}</span>
            })}
          </ContainerSkills>
        </ContainerProfile>
      </HomeContainerLeft>
      <HomeContainerRight>
        <h1>right</h1>
      </HomeContainerRight>
    </HomeContainer>
  )
}
