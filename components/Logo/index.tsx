import Link from 'next/link'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Wrapper = styled.a`
  display: inline-block;
  font-size: 2.4rem;
  font-family: ${font('heading')};
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
`

export default () => (
  <Link href="/" passHref>
    <Wrapper>PvP/review</Wrapper>
  </Link>
)
