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

  animation: rightSide 1s ease-in-out;

  @keyframes rightSide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 880px) {
    padding-top: 6rem;
  }
`

export const Title = styled.h2`
  font-size: 2.25rem;
`

export const Paragraph = styled.p`
  font-size: 1.125rem;
`
