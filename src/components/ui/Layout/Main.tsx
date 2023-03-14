import styled from 'styled-components'
import ComponentSwitcher from '../ComponentSwitcher/ComponentSwitcher'
import Header from '..'
import Inventory from '../../Inventory/Inventory'
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @@ padding sepration for mobile/desktop
const MainStyled = styled.main`
margin-left: 256px;
background-color: #f5f5f5;
height: calc(100vh - 64px);
padding: 1rem;
`

const mainList = [
  <Header key={1}/>,
  <Header key={1}/>,
  <Inventory key={1}/>
]

const Main = () => {
  return <MainStyled>
    <ComponentSwitcher list={mainList} index={2}/>
  </MainStyled>
}

export default Main
