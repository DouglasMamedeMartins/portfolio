import styled from 'styled-components'

export const ContainerProfile = styled.div`
  border: 1px solid white;
  padding: 20px;
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  span {
    font-size: 20px;
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 50%;
  }

  animation: LeftSide 1s ease-in-out;

  @keyframes LeftSide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  animation: Profile 0.9s ease-in-out;

  @keyframes Profile {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`

export const ContainerSkills = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  span {
    border: 1px solid #202024;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    text-align: center;
  }
`
