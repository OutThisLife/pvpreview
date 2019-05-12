import styled from 'styled-components'
import { ifNotProp, ifProp, prop } from 'styled-tools'

export default styled.div<Props>`
  display: ${ifNotProp('block', 'flex')};
  flex-direction: ${ifProp('column', 'column', 'row')};
  align-items: ${prop('align', 'center')};
  justify-content: ${prop('justify', 'center')};
`

interface Props {
  column?: boolean
  align?: string
  justify?: string
}
