import Grid from '@/components/Grid'
import Label from '@/components/Label'
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import styled from 'styled-components'

const Wrapper = styled(Grid)`
  text-align: center;
`

const Nav = styled.nav`
  ${Label} {
    + ${Label} {
      margin-left: 3em;
    }

    &:not(.active):not(:hover) {
      color: var(--inactive);
    }
  }
`

export default () => (
  <Wrapper as="header" gap cols={1}>
    <Logo />

    <Nav>
      {links.map(({ href, title, ...props }) => (
        <Link as={Label} key={href} {...{ href }} {...props}>
          {title}
        </Link>
      ))}
    </Nav>
  </Wrapper>
)

const links = [
  {
    href: '/',
    title: 'All Reviews'
  },
  {
    href: '/best',
    title: 'Best Games'
  },
  {
    href: '/latest',
    title: 'Latest Reviews'
  }
]
