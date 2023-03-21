/* eslint-disable react/jsx-key */
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getItems, auth } from '../../firebase/firebase'
import Item from '../common/Item/Item'
import ItemViewer from '../common/ItemViewer/ItemViewer'
import { Search } from '../common/Search/'
import { createUserWithEmailAndPassword } from 'firebase/auth'
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const ImageDB = () => {
  const TITLE = 'Inventory'
  const SHOP_ID = 'P3nv9Fi1TJvlVi6ToYez'
  const [itemsList, setItemsList] = useState([])
  const [query, setQuery] = useState('')
  const [user, setUser] = useState(null)
  const [filteredList, setFilteredList] = useState([])
  const createUser = () => {
  }

  useEffect(() => {
    let ignore = false
    createUser()
    getItems(SHOP_ID).then(result => {
      if (!ignore) {
        setItemsList(result)
      }
    })
    return () => {
      ignore = true
    }
  }, [])

  const items = query ? itemsList.map(item => (item.name.toLowerCase().includes(query.toLowerCase()) ? <Item data={item}/> : null)) : itemsList.map(item => <Item data={item}/>)
  return <Card>
    <CardHeading>
      <h3>{TITLE}</h3>
      <Search onSearch={setQuery}/>
      <ControlBar>
        <Button >Edit</Button>
      </ControlBar>
    </CardHeading>
    <CardBody>
    <ItemViewer items={items}/>
    </CardBody>
  </Card>
}

// @@ padding sepration for mobile/desktop
const Card = styled.div`
height: 100%;
position: relative;
`
const CardBody = styled.div`
height: 100%;
margin: 1rem;
overflow: auto;
overflow-y: scroll;
position: relative;
`
const CardHeading = styled.div`
background-color: white;
text-align: left;
justify-content: space-between;
display: flex;
align-items: center;
padding: 4px 36px;
    padding-right: 10rem;
border-bottom: 1px solid rgba(5, 5, 5, 0.06);
h3{
  font-weight:500;
}
`
const ControlBar = styled.div`
text-align: left;
margin: 4px;
border-bottom: 1px solid rgba(5, 5, 5, 0.06);;
`

export default ImageDB
