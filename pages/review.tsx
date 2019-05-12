import Full from '@/components/Review/Single'
import styled from 'styled-components'

const Wrapper = styled.section``

export default () => (
  <Wrapper>
    <Full
      title="World of Warcraft"
      bg={`/static/img/bg-${bgs[Math.floor(Math.random() * bgs.length)]}.jpg`}
    />
  </Wrapper>
)

const bgs = ['lol', 'bdo', 'wow']