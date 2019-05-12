import Copy from '@/components/Copy'
import Flex from '@/components/Flex'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
  color: var(--inactive);
  width: 100%;

  &:before {
    content: '';
    opacity: 0.3;
    display: block;
    width: 5vw;
    height: 1px;
    margin: calc(var(--gs) * 2) auto calc(var(--gs) / 2);
    background: currentColor;
  }
`

export default () => (
  <Wrapper as="footer" column>
    <Copy size={0.65}>
      <p>&copy; {new Date().getFullYear()} pvpreview. All rights reserved.</p>
    </Copy>
  </Wrapper>
)
