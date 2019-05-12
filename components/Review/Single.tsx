import Copy from '@/components/Copy'
import Heading from '@/components/Heading'
import styled from 'styled-components'

import Excerpt from './'

const Wrapper = styled.article``

export default ({ bg, title }: Props) => (
  <Wrapper>
    <Excerpt hero {...{ title, bg }} />

    <Copy>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugiat
      iusto. Cum nam, repellat deleniti nulla nostrum itaque? Deserunt, expedita
      vero! Saepe eveniet minus perspiciatis est enim ratione quasi porro.
      epellat deleniti nulla nostrum itaque? Deserunt, expedita vero! Saepe
      eveniet minus perspiciatis est enim ratione quasi porro. epellat deleniti
      nulla nostrum itaque? Deserunt, expedita vero! Saepe eveniet minus
      perspiciatis est enim ratione quasi porro.sectetur adipisicing elit.
      Velit, fugiat iusto. Cum nam, repellat deleniti nulla nostrum itaque?
      Deserunt, expedita vero! Saepe eveniet minus perspiciatis est enim ratione
      quasi porro. epellat deleniti nulla nostrum itaque? Deserun
    </Copy>

    <Copy>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugiat
      iusto. Cum nam, repellat deleniti nulla nostrum itaque? Deserunt, expedita
      vero! Saepe eveniet minus perspiciatis est enim ratione quasi porro.
    </Copy>

    <Heading size={1.5}>Lorem ipsum. Dolar sit.</Heading>

    <Copy>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugiat
      iusto. Cum nam, repellat deleniti nulla nostrum itaque? Deserunt, expedita
      vero! Saepe eveniet minus perspiciatis est enim ratione quasi porro.
    </Copy>

    <Copy>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fugiat
      iusto. Cum nam, repellat deleniti nulla nostrum itaque? Deserunt, expedita
      vero! Saepe eveniet minus perspiciatis est enim ratione quasi porro.
    </Copy>
  </Wrapper>
)

interface Props {
  title: string
  bg: string
  released?: Date
  style?: string[]
  types?: string[]
}
