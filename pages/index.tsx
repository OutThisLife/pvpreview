import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export default () => (
  <Wrapper>
    <aside>hi</aside>
    <section>sup</section>
  </Wrapper>
)
