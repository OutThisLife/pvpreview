import Copy from '@/components/Copy'
import Grid from '@/components/Grid'
import Label from '@/components/Label'
import Player from '@/components/Player'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Excerpt from './'

const Wrapper = styled(Grid)`
  --sc: 4;
  --ec: 4;

  section {
    display: block;
    width: 100%;
    grid-column: var(--sc) / calc(var(--ec) * -1);
  }

  aside {
    grid-column: calc(var(--ec) + 1) / calc(var(--sc) * -1);
    display: block;
    width: 100%;
    text-align: center;
    margin: calc(var(--gs) * 3) auto 0;

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
    --ec: 30;

    aside,
    section {
      grid-row: 1;
    }

    section {
      grid-column: var(--sc) / var(--ec);
    }

    aside {
      margin: 0;
    }
  }
`

export default ({ bg, title }: Props) => (
  <>
    <Excerpt hero {...{ title, bg }} />

    <Wrapper as="article" align="start">
      <Grid.Item as="section">
        <Copy>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro. epellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro. epellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro.sectetur adipisicing elit. Velit, fugiat iusto.
            Cum nam, repellat deleniti nulla nostrum itaque? Deserunt, expedita
            vero! Saepe eveniet minus perspiciatis est enim ratione quasi porro.
            epellat deleniti nulla nostrum itaque? Deserun
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro.
          </p>

          <h2>Lorem ipsum. Dolar sit.</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
            Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim
            ratione quasi porro.
          </p>
        </Copy>
      </Grid.Item>

      <Grid.Item as="aside">
        <Label as="span">Spotlights</Label>
        <Player url="https://www.youtube.com/watch?v=zywKc2I0qWU" />
        <Player url="https://www.youtube.com/watch?v=x7cM3r7Gzhk" />

        <Label as="span">Livestreams</Label>
        <Player url="https://www.twitch.tv/overwatchleague" />
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
