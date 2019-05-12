import Flex from '@/components/Flex'
import { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { size } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Wrapper = styled(Flex)`
  --isrc: url(${require('./exit.svg?inline')});

  ${ifProp(
    'isOpen',
    css`
      z-index: 1000;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.9) var(--isrc) calc(100% - var(--gs))
        var(--gs) / 3rem auto no-repeat;

      @media (min-width: ${size('tablet')}) {
        cursor: var(--isrc), auto;
        background: rgba(0, 0, 0, 0.9);
      }
    `
  )}

  iframe {
    height: 100%;
  }
`

export default ({
  children,
  className,
  onOpen = () => null,
  onClose = () => null,
  ...props
}: Props) => {
  const [isOpen, toggle] = useState<State['isOpen']>(false)

  const onClick = useCallback(() => toggle(!isOpen), [isOpen])

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove']('lock')

    if (isOpen) {
      onOpen()
    } else {
      onClose()
    }
  }, [isOpen])

  return (
    <Wrapper
      column
      className={`${className} ${isOpen ? 'open' : 'closed'}`}
      {...props}
      {...{ isOpen, onClick }}>
      {children({ isOpen, toggle })}
    </Wrapper>
  )
}

interface Props {
  children: (a: State) => React.ReactNode
  className?: string
  onOpen?: () => void
  onClose?: () => void
}

interface State {
  isOpen: boolean
  toggle: (b: boolean) => void
}
