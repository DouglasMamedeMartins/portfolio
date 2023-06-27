import {
  ContainerProfile,
  ContainerInfo,
  ContainerSkills,
} from '../Left/styles'
import { skills } from '@/data/Skills'

import profile from '../../../../../../public/profile.jpeg'
import Image from 'next/image'
import { SkillsList } from '../SkillsList'
import { Person } from '../Person/Person'

export const MyProfile = () => {
  return (
    <div>
      <ContainerProfile>
        <Image src={profile} alt="" />
        <ContainerInfo>
          <Person />
        </ContainerInfo>
        <ContainerSkills>
          {skills.map((item) => (
            <SkillsList key={item.id} skill={item} />
          ))}
        </ContainerSkills>
      </ContainerProfile>
    </div>
  )
}
