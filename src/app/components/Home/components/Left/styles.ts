import styled from 'styled-components'

export const ContainerProfile = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 1.25rem;
  }

  img {
    width: 12.5rem;
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

  @media (max-width: 1100px) {
    img {
      width: 14rem;
    }
    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 11rem;
    }
    span {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 9rem;
    }
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 7rem;
    }
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  margin-top: 0.625rem;

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
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.312rem;

  img {
    margin-top: 5px;
    width: 100%;
    height: 6.25rem;
  }

  @keyframes Skills {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 5rem;
    }
    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 7rem;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 4.8rem;
    }
  }
`
