import Grid from '@/components/Grid'
import Review from '@/components/Review'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled(Grid)`
  --cols: 1;

  @media (min-width: ${size('tablet')}) {
    --cols: 2;
  }

  @media (min-width: ${size('desktop')}) {
    --cols: 3;
  }
`

export default () => (
  <Wrapper>
    <Review title="World of Warcraft" bg="/static/img/bg-wow.jpg" />
    <Review title="Black Desert Online" bg="/static/img/bg-bdo.jpg" />
    <Review title="League of Legends" bg="/static/img/bg-lol.jpg" />
    <Review title="League of Legends" bg="/static/img/bg-lol.jpg" />
    <Review title="World of Warcraft" bg="/static/img/bg-wow.jpg" />
    <Review title="Black Desert Online" bg="/static/img/bg-bdo.jpg" />
    <Review title="League of Legends" bg="/static/img/bg-lol.jpg" />
    <Review title="Black Desert Online" bg="/static/img/bg-bdo.jpg" />
    <Review title="League of Legends" bg="/static/img/bg-lol.jpg" />
  </Wrapper>
)
