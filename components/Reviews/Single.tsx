import Copy from '@/components/Copy'
import Grid from '@/components/Grid'
import Label from '@/components/Label'
import Player from '@/components/Player'
import { Content } from '@/content'
import { Fragment, useEffect, useState } from 'react'
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

export default ({ html, videos: initialVideos = [], img, meta }: Content) => {
  const [videos, setVideos] = useState<Content['videos']>(initialVideos)

  useEffect(() => {
    fetch(
      `https://api.twitch.tv/kraken/streams?game=${
        meta.title
      }&stream_type=live&limit=2`,
      {
        headers: {
          'Client-ID': process.env.twitchId
        }
      }
    )
      .then(res => res.json())
      .then(
        r =>
          'streams' in r &&
          r.streams.length &&
          setVideos(
            videos.concat({
              title: `Streams (<a href='//www.twitch.tv/directory/game/${
                meta.title
              }' target="_blank" rel='noopener noreferrer'>${r._total >>
                0}+</a>)`,
              items: r.streams.map(s => s.channel.url)
            })
          )
      )
      .catch(console.error)
  }, [])

  return (
    <>
      <Excerpt hero {...{ img }} {...meta} />

      <Wrapper as="article" align="start">
        <Grid.Item as="section">
          <Copy dangerouslySetInnerHTML={{ __html: html }} />
        </Grid.Item>

        {videos.length > 0 && (
          <Grid.Item as="aside">
            {videos.map(({ title, items = [] }) => (
              <Fragment key={title}>
                <Label as="span" dangerouslySetInnerHTML={{ __html: title }} />

                {items.map((url, i) => (
                  <Player key={title + i} {...{ url }} />
                ))}
              </Fragment>
            ))}
          </Grid.Item>
        )}
      </Wrapper>
    </>
  )
}
