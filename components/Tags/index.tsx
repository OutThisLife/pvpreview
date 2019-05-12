import Label from '@/components/Label'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Wrapper = styled.div`
  ${Label}:not(:last-of-type):after {
    content: '${prop('divider', ' / ')}';
    color: var(--primary);
  }
`

export default ({ tags = [], ...props }: Props) => (
  <Wrapper {...props}>
    {tags.map(t => (
      <Label key={t} as="span" dangerouslySetInnerHTML={{ __html: t }} />
    ))}
  </Wrapper>
)

interface Props {
  tags: string[]
  divider?: string
}
