import Flex from '@/components/Flex'
import styled, { css } from 'styled-components'
import { ifNotProp, ifProp, prop } from 'styled-tools'

const Grid: any = styled.div<Props>`
  --cols: ${prop('cols', 'var(--g)')};

  display: grid;
  width: 100%;
  max-width: var(--mw);
  grid-column-gap: ${ifProp('gap', 'var(--gs)', 0)};
  grid-row-gap: ${ifProp('gap', 'calc(var(--gs) / 2)', 0)};
  grid-auto-rows: minmax(max-content, var(--gs));
  grid-template-columns: repeat(var(--cols), 1fr);
  align-items: ${prop('align', 'center')};
  margin: auto;

  ${ifProp(
    'center',
    css`
      align-items: center;
    `
  )}
`

Grid.Item = styled(Flex)<ItemProps>`
  grid-column: ${prop('start', 1)} / ${prop('end', -1)};

  ${ifProp(
    ['start', 'end'],
    ifNotProp(
      'justify',
      css`
        justify-content: initial;
      `
    )
  )};
`

interface Props {
  gap?: boolean
  cols?: string
  center?: boolean
  align?: string
}

interface ItemProps {
  start?: number
  end?: number
}

export default Grid
