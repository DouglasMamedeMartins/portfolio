import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 87.5rem;
  height: calc(100vh - 5.31rem);
  margin: auto;
  display: flex;
  margin-top: 1.56rem;
  color: white;
  padding: 1.875rem;
  text-align: justify;

  @media (max-width: 880px) {
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
