import Copy from '@/components/Copy'
import Grid from '@/components/Grid'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Excerpt from './'

const Player = props => <ReactPlayer width="100%" height="100%" {...props} />

const Wrapper = styled(Grid)`
  --sc: 2;

  aside,
  section {
    grid-row: 1;
  }

  section {
    display: block;
    grid-column: var(--sc) / calc(var(--sc) * -1);
  }

  aside {
    display: none;
    text-align: center;

    ${Label} {
      display: block;
      margin: 0 0 1em;

      &:not(:first-of-type) {
        margin-top: 4em;
      }
    }
  }

  @media (min-width: ${size('desktop')}) {
    --sc: 3;

    section {
      grid-column: var(--sc) / 30;
    }

    aside {
      display: block;
      grid-column: 31 / calc(var(--sc) * -1);
    }
  }
`

export default ({ bg, title }: Props) => (
  <>
    <Excerpt hero {...{ title, bg }} />

    <Wrapper as="article" align="start">
      <Grid.Item as="aside">
        <Label as="span">Spotlights</Label>
        <Player url="https://www.youtube.com/watch?v=zywKc2I0qWU" />
        <Player url="https://www.youtube.com/watch?v=x7cM3r7Gzhk" />

        <Label as="span">Livestreams</Label>
        <Player url="https://www.twitch.tv/summit1g" />
      </Grid.Item>

      <Grid.Item as="section">
        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
          Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
          ratione quasi porro. epellat deleniti nulla nostrum itaque? Deserunt,
          expedita vero! Saepe eveniet minus perspiciatis est enim ratione quasi
          porro. epellat deleniti nulla nostrum itaque? Deserunt, expedita vero!
          Saepe eveniet minus perspiciatis est enim ratione quasi porro.sectetur
          adipisicing elit. Velit, fugiat iusto. Cum nam, repellat deleniti
          nulla nostrum itaque? Deserunt, expedita vero! Saepe eveniet minus
          perspiciatis est enim ratione quasi porro. epellat deleniti nulla
          nostrum itaque? Deserun
        </Copy>

        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
          Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
          ratione quasi porro.
        </Copy>

        <Heading size={1.5}>Lorem ipsum. Dolar sit.</Heading>

        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
          Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
          ratione quasi porro.
        </Copy>

        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
          Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
          ratione quasi porro.
        </Copy>
      </Grid.Item>
    </Wrapper>
  </>
)

interface Props {
  title: string
  bg: string
  released?: Date
  style?: string[]
  types?: string[]
}
