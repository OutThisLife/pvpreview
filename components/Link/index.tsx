import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import styled from 'styled-components'

const Wrapper = styled.a``

export default withRouter(({ router, href, ...props }: Props) => (
  <Link {...{ href }} passHref>
    <Wrapper className={router.asPath === href ? 'active' : ''} {...props} />
  </Link>
))

interface Props extends WithRouterProps {
  children: React.ReactNode
  href: string
  as?: any
}
