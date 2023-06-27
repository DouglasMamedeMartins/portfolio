import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1400px;
  height: calc(100vh - 85px);
  margin: auto;
  display: flex;
  margin-top: 25px;
  color: white;
  padding: 30px;
  text-align: justify;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HomeContainerLeft = styled.div`
  flex: 1;
`

export const HomeContainerRight = styled.div`
  flex: 1;
`
