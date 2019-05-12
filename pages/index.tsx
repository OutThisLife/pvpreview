import Reviews from '@/components/Reviews'
import content from '@/content'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
`

export default () => (
  <Wrapper>
    <Reviews {...{ content }} />
  </Wrapper>
)
