import Label from '@/components/Label'
import Player from '@/components/Player'
import { Content } from '@/content'
import { Fragment, useEffect, useState } from 'react'

const { twitchId } = process.env

export default ({
  meta: { title },
  videos: initialVideos = []
}: Partial<Content>) => {
  const [videos, setVideos] = useState<Content['videos']>(initialVideos)

  useEffect(() => {
    fetch(
      `https://api.twitch.tv/kraken/streams?game=${title}&stream_type=live&limit=2`,
      {
        headers: {
          'Client-ID': twitchId
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
              title: `Streams (<a href='//www.twitch.tv/directory/game/${title}' target="_blank" rel='noopener noreferrer'>${r._total >>
                0}+</a>)`,
              items: r.streams.map(s => s.channel.url)
            })
          )
      )
      .catch(console.error)
  }, [])

  return (
    <>
      {videos.map(({ title, items = [] }) => (
        <Fragment key={title}>
          <Label as="span" dangerouslySetInnerHTML={{ __html: title }} />

          {items.map((url, i) => (
            <Player key={title + i} {...{ url }} />
          ))}
        </Fragment>
      ))}
    </>
  )
}
