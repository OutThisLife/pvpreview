import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.p`
  font-size: ${prop('size', 1)}rem;
  line-height: 1.7;
`

interface Props {
  size?: number
}
