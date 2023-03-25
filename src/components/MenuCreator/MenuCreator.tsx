/* eslint-disable react/jsx-key */
import styled from 'styled-components'
import { addItem } from '../../firebase/firebase'
import FileUploader from './FileUploader'
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const items = [
    
]
const MenuCreator = () => {
  const SHOP_ID = 'P3nv9Fi1TJvlVi6ToYez'
  const handleButton = () => {
    console.log('Calling handle button ')
    addItem(SHOP_ID, {
      name: 'burger'
    })
  }
  return <Card>
    <CardHeading>
      <div>MenuCreator</div>
      <ControlBar>
      </ControlBar>
    </CardHeading>
    <CardBody>
    <FileUploader/>
    </CardBody>
  </Card>
}

const ItemCard = () => {
  return <Item>
    ItemCard
  </Item>
}

const Item = styled.div`
 background-color: green;
 height: 300px;
 width: 300px;
 border-radius: 3px  3px 0px;
 margin: 4px;
`
// @@ padding sepration for mobile/desktop
const Card = styled.div`
background-color: white;
height: 100%;
border-radius: 5px;
position: relative;
`
const CardBody = styled.div`

`
const CardHeading = styled.h3`
text-align: left;
justify-content: space-between;
display: flex;
padding: .7rem;
border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`
const ControlBar = styled.div`
text-align: left;
margin: 4px;
padding: 2px 4px;
background: red;
border-bottom: 1px solid rgba(5, 5, 5, 0.06);;
`

export default MenuCreator
