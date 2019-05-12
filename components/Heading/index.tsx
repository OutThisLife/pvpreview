import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

export default styled.h2<Props>`
  font-size: ${prop('size', 2.5)}rem;
  font-weight: 700;
  line-height: ${prop('lh', 1.2)};
  letter-spacing: -0.01em;

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
