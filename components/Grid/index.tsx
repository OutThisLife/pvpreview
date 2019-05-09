import Flex from '@/components/Flex'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Grid: any = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--g), 1fr);
`

Grid.Item = styled(Flex)<{
  start?: number
  end?: number
}>`
  grid-column: ${prop('start', 1)} / ${prop('end', -1)};
`

export default Grid
