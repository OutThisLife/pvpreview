import Grid from '@/components/Grid'
import { Excerpt } from '@/components/Reviews'
import { Content } from '@/content'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled(Grid)`
  --cols: 1;

  @media (min-width: ${size('tablet')}) {
    --cols: 2;
  }

  @media (min-width: ${size('desktop')}) {
    --cols: 3;
  }
`

export default ({ reviews = [] }: Props) => (
  <Wrapper>
    {reviews.map(({ img, meta }) => (
      <Excerpt key={meta.published.toString()} {...{ img }} {...meta} />
    ))}
  </Wrapper>
)

export { default as Excerpt } from './Excerpt'
export { default as Single } from './Single'

interface Props {
  reviews: Content[]
}
