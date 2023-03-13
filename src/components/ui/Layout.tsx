/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled from 'styled-components'

const LayoutStyled = styled.div`
width:100vw;
height:100vh;
`

const Layout = (props: any) => {
  return <LayoutStyled>{props.children}</LayoutStyled>
}

export default Layout
