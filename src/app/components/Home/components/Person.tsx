import { person } from '../../../../data/Person'

export const Person = () => {
  return (
    <>
      {person.map((item, index) => {
        return (
          <>
            <span key={index}>{item.name}</span>
            <span key={index}>{item.role}</span>
          </>
        )
      })}
    </>
  )
}
