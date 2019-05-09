import Grid from '@/components/Grid'
import Nav from '@/components/Nav'
import styled from 'styled-components'

const Wrapper = styled(Grid)`
  grid-template-rows: 100vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default () => (
  <Wrapper as="main">
    <Nav />
  </Wrapper>
)
