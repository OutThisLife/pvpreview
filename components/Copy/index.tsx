import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.p<Props>`
  font-size: ${prop('size', 1)}rem;
  line-height: 1.7;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

interface Props {
  size?: number
}
