import Label from '@/components/Label'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import styled from 'styled-components'

dayjs.extend(advancedFormat)

const Timestamp = ({ date, ...props }: Props) => (
  <Label as="time" {...props}>
    {dayjs(date).format('MMMM Do, YYYY')}
  </Label>
)

export default styled(Timestamp)`
  color: var(--inactive);
`

interface Props {
  date: Date
}
