/* eslint-disable react/jsx-key */
import { QRCode } from 'antd'
import styled from 'styled-components'
import ItemViewer from '../ItemViewer/ItemViewer'

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const Inventory = () => {
  return <Card>
    <CardHeading>
      <div>Inventory</div>
      <ControlBar>

      </ControlBar>
    </CardHeading>
    <CardBody>
    <ItemViewer items={[<QRCode value="https://ant.design/" />, <QRCode value="https://ant.design/" />]}/>
    </CardBody>
  </Card>
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

export default Inventory
