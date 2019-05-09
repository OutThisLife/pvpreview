import Grid from '@/components/Grid'
import styled from 'styled-components'

const Wrapper = styled(Grid)`
  z-index: 255;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--gs);
`

export default () => <Wrapper as="header" />
