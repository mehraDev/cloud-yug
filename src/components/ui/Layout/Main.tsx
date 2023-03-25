import styled from 'styled-components'
import ComponentSwitcher from '../ComponentSwitcher/ComponentSwitcher'
import Inventory from '../../Inventory/Inventory'
import MenuCreator from '../../MenuCreator/MenuCreator'
import ImageDB from '../../ImageDB/ImageDB'
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @@ padding sepration for mobile/desktop
const MainStyled = styled.main`
margin-left: 256px;
background-color: #f5f5f5;
height: calc(100vh - 64px);
background: rgba(0, 0, 0, 0.02);
`

const mainList = [
  <MenuCreator key={1}/>,
  <MenuCreator key={1}/>,
  <Inventory key={1}/>,
  <Inventory key={1}/>,
  <Inventory key={1}/>,
  <Inventory key={1}/>,
  <Inventory key={1}/>,
  <ImageDB key={2}/>
]

const Main = (props: any) => {
  return <MainStyled>
    <ComponentSwitcher list={mainList} index={props.switch} />
  </MainStyled>
}

export default Main
