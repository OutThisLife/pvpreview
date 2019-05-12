import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--gs) / 3);
  background: var(--text);

  p {
    color: var(--bg);
    font-size: 0.7rem;
    margin: 0;
  }
`

export default () => (
  <Wrapper>
    <p>&copy; {new Date().getFullYear()} pvpreview. All rights reserved.</p>
  </Wrapper>
)
