import Copy from '@/components/Copy'
import Grid from '@/components/Grid'
import Label from '@/components/Label'
import Player from '@/components/Player'
import { Content } from '@/content'
import { createElement, Fragment } from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import Excerpt from './Excerpt'

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

export default ({ default: children, videos = [], meta }: Content) => (
  <>
    <Excerpt hero {...meta} />

    <Wrapper as="article" align="start">
      <Grid.Item as="section">
        <Copy>{createElement(children)}</Copy>
      </Grid.Item>

      {videos.length > 0 && (
        <Grid.Item as="aside">
          {videos.map(({ title, items = [] }) => (
            <Fragment key={title}>
              <Label as="span">{title}</Label>

              {items.map((url, i) => (
                <Player key={i} {...{ url }} />
              ))}
            </Fragment>
          ))}
        </Grid.Item>
      )}
    </Wrapper>
  </>
)
