import { useLayoutEffect, useState } from 'react'

export default src => {
  const [isLoaded, setLoaded] = useState(false)

  if ('browser' in process) {
    useLayoutEffect(() => {
      const im = new Image()
      im.src = src

      if (im.complete) {
        setLoaded(true)
      } else {
        im.onload = () => setLoaded(true)
      }
    }, [src])
  }

  return [isLoaded, setLoaded]
}
