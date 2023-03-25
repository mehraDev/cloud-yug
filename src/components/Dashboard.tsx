/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './Dashboard.css'
import Header from './ui'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// import styled from 'styled-components'
import Layout from './ui/Layout'
import Menu from './ui/Menu/Menu'
import Main from './ui/Layout/Main'
import Footer from './ui/Layout/Footer'
import { useState } from 'react'
// import {ConfigProvider} from 'antd'

// const SideNavBarStyled = styled.ul`
// width: 256px;
// border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
// color: rgba(0, 0, 0, 0.88);
//     background: #ffffff;
// `

export const Dashhboard = () => {
  const [activeMenu, setActiveMenu] = useState(2)
  return <div>
    <Layout>
        <Header/>
        <Menu change={setActiveMenu} active={activeMenu}/>
        <Main switch={activeMenu}/>
        <Footer/>
    </Layout>
  </div>
}

export default Dashhboard
