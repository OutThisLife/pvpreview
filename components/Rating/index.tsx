import Label from '@/components/Label'
import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled<any & { v: number }>(Label)`
  display: block;

  &:after {
    content: '${prop('v', 0)} / 1';
  }
`
