import { Skill } from '@/types/Skill'

type SkillsListProps = {
  skill: Skill
}

export const SkillsList = ({ skill }: SkillsListProps) => {
  return (
    <div key={skill.id}>
      <span>{skill.skill}</span>
      <img src={`/assets/${skill.url}`} alt="" />
    </div>
  )
}
