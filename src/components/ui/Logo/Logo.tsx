/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'
import LogoIcon from '../../../logo.svg'

const LogoStyled = styled.img`
width:40px;
height:40px;
`

const Logo = (props: any) => {
  return <LogoStyled src={LogoIcon}/>
}

export default Logo
