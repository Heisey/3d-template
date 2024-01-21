
import Styled from 'styled-components/macro'

export const App = Styled.div`
  background-color: lime;
  min-height: 100vh;
  min-width: 100vw;

  .title {
    width: fit-content;
    margin: 0 auto;
    height: 300px;
  }

  .canvas {
    height: 50vh;
    width: 50rem;
    margin-top: 10rem;
    background-color: red;
  }
`