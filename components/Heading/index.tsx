import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export default styled.h2<Props>`
  ${ifProp(
    'mono',
    css`
      font-weight: 400;
      font-family: 'mnn';
      letter-spacing: -0.2em;
    `
  )}
`

interface Props {
  size?: number
  lh?: number
  mono?: boolean
}
