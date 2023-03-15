
import styled from 'styled-components'
import Avatar from './Avatar'
import Logo from './Logo/Logo'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Header = () => {
  return <HeaderWrapper>
    <MainHeading>
        <Logo/>
        <ShopTitle>La Lavash</ShopTitle>
    </MainHeading>
    <HeaderMenu>
        <Avatar/>
    </HeaderMenu>
  </HeaderWrapper>
}

const HeaderWrapper = styled.div`
    padding-inline: 1rem;
    line-height: 64px;
    background: #001529;
    display:flex;
    color: white;
    justify-content: space-between;
    
`
const HeaderMenu = styled.div` 
display:flex;
align-items: center;
justify-content: space-between;
`
const ShopTitle = styled.div` 
margin: 0 .5rem;
`
const MainHeading = styled.h2` 
display:flex;
align-items: center;
justify-content: space-between;
`
export default Header
