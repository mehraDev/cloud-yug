/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MessageTwoTone, SmileTwoTone, ToolTwoTone } from '@ant-design/icons'
import AccountBookTwoTone from '@ant-design/icons/lib/icons/AccountBookTwoTone'
import AppstoreTwoTone from '@ant-design/icons/lib/icons/AppstoreTwoTone'
import BankTwoTone from '@ant-design/icons/lib/icons/BankTwoTone'
import BookTwoTone from '@ant-design/icons/lib/icons/BookTwoTone'
import styled from 'styled-components'
import List from '../List/List'
import MenuItem from './MenuItem'
const MenuStyled = styled.div`
width: 256px;
height:100vh;
border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
font-size:14px;
`

const Menu = (props: any) => {
  const items = [
    <MenuItem key='1' label='Home' icon={<BankTwoTone twoToneColor="#eb2f96"/>}/>,
    <MenuItem key='2' label='Orders' icon={<BookTwoTone />}/>,
    <MenuItem key='2' label='Inventory' icon={<AppstoreTwoTone />}/>,
    <MenuItem key='2' label='Billing' icon={<AccountBookTwoTone />}/>,
    <MenuItem key='2' label='Messages'icon={<MessageTwoTone />}/>,
    <MenuItem key='2' label='Profile' icon={<SmileTwoTone />}/>,
    <MenuItem key='2' label='Settings' icon={ <ToolTwoTone />}/>
  ]
  return <MenuStyled>
    <List listItem={items}/>
  </MenuStyled>
}

export default Menu
