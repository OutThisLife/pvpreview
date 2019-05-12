import { Single } from '@/components/Reviews'
import { Content, get } from '@/content'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
`

const Review = (props: Props) => (
  <Wrapper>
    <Single {...props} />
  </Wrapper>
)

Review.getInitialProps = ({ query, res, req }) => {
  try {
    return get(query.slug || req.headers.referer.split('/review/')[1])
  } catch (err) {
    res.statusCode = 404
    res.end('Not found')
  }

  return {}
}

export default Review

interface Props extends Content {
  slug: string
}
