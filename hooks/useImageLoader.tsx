import { useLayoutEffect, useState } from 'react'

export default src => {
  const [isLoaded, setLoaded] = useState(false)

  if ('browser' in process) {
    useLayoutEffect(() => {
      const im = new Image()
      im.onload = () => window.requestAnimationFrame(() => setLoaded(true))
      im.src = src

      if (im.complete) {
        setLoaded(true)
      }
    }, [src])
  }

  return [isLoaded, setLoaded]
}
