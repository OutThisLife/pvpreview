import Link from 'next/link'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { flex } from '../theme'

const Wrapper = styled.a`
  display: block;
  color: ${palette('primary', 0)};
  font-size: ${flex(13, 16)};
  letter-spacing: -0.001em;
`

export default () => (
  <Link href="/">
    <Wrapper>pvpreview</Wrapper>
  </Link>
)
