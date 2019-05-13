import Copy from '@/components/Copy'
import Grid from '@/components/Grid'
import Label from '@/components/Label'
import { Content } from '@/content'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Videos from '../Videos'
import Excerpt from './Excerpt'

const Wrapper = styled(Grid)`
  --sc: 4;
  --ec: 4;

  section {
    display: block;
    width: 100%;
    grid-column: var(--sc) / calc(var(--ec) * -1);
    margin: calc(var(--gs) * 3) auto;
  }

  aside {
    grid-column: calc(var(--ec) + 1) / calc(var(--sc) * -1);
    display: block;
    width: 100%;
    text-align: center;
    margin: auto;

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
      margin: 0;
    }

    aside {
      margin: 0;
    }
  }
`

export default ({ html, videos = [], img, meta }: Content) => (
  <>
    <Excerpt hero {...{ img }} {...meta} />

    <Wrapper as="article" align="start">
      <Grid.Item as="section">
        <Copy dangerouslySetInnerHTML={{ __html: html }} />
      </Grid.Item>

      {videos.length > 0 && (
        <Grid.Item as="aside">
          <Videos {...{ videos, meta }} />
        </Grid.Item>
      )}
    </Wrapper>
  </>
)
