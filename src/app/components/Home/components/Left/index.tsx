import { skills } from '@/data/Skills'
import profile from '../../../../../../public/profile.jpeg'
import Image from 'next/image'
import {
  ContainerProfile,
  ContainerInfo,
  ContainerSkills,
} from '../Left/styles'
import { Person } from '../Person'

export const MyProfile = () => {
  return (
    <div>
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
    </div>
  )
}
