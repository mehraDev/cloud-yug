/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'
import LogoIcon from '../../logo.svg'

const AvatarStyled = styled.img`
width:30px;
height:30px;
border-radius: 100px;
`

const Avatar = (props: any) => {
  return <AvatarStyled src={LogoIcon}/>
}

export default Avatar
