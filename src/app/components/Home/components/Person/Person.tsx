import { person } from '../../../../../data/Person'
import { ContainerPerson } from './style'

export const Person = () => {
  return (
    <>
      {person.map((item) => {
        return (
          <div key={item.id}>
            <ContainerPerson>
              <span>{item.name}</span>
              <span>{item.role}</span>
            </ContainerPerson>
          </div>
        )
      })}
    </>
  )
}
