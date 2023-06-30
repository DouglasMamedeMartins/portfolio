import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 31.25rem;
  margin-left: 1.56rem;
  padding: 1.25rem;
  margin-top: 6.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.5s ease-in-out;

  animation: rightSide 1s ease-in-out;

  @keyframes rightSide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 1100px) {
    height: 100vh;
  }

  @media (max-width: 500px) {
    width: 100vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h2`
  @media (max-width: 1100px) {
    font-size: 2.75rem;
  }

  @media (max-width: 880px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  font-size: 2.25rem;
`

export const Paragraph = styled.p`
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 880px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
  font-size: 1.125rem;
`
