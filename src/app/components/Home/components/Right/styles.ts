import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  border: 1px solid #ccc;

  animation: rightSide 1s ease-in-out;

  @keyframes rightSide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`

export const Title = styled.h2`
  font-size: 36px;
`

export const Paragraph = styled.p`
  font-size: 18px;
`
