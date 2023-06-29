import { Skill } from '@/types/Skill'
import { TitleSkill } from './styles'

type SkillsListProps = {
  skill: Skill
}

export const SkillsList = ({ skill }: SkillsListProps) => {
  return (
    <div key={skill.id}>
      <TitleSkill>{skill.skill}</TitleSkill>
      <img src={`/assets/${skill.url}`} alt="" />
    </div>
  )
}
