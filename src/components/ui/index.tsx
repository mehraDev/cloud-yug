
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 64px;
    padding-inline: 50px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 64px;
    background: #001529;
`
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Header = () => {
  return <HeaderWrapper/>
}

export default Header
