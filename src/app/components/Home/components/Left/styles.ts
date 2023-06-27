import styled from 'styled-components'

export const ContainerProfile = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  :hover {
    background-color: #6833e4;
    transition: 0.2s all ease-in-out;
  }

  span {
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    text-align: center;
    animation: Skills 1s ease-in-out;
  }

  img {
    margin-top: 5px;
    width: 100%;
    height: 100px;
  }

  @keyframes Skills {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`
