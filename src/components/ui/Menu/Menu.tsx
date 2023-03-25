/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FileImageTwoTone, MessageTwoTone, SmileTwoTone, ToolTwoTone } from '@ant-design/icons'
import AccountBookTwoTone from '@ant-design/icons/lib/icons/AccountBookTwoTone'
import AppstoreTwoTone from '@ant-design/icons/lib/icons/AppstoreTwoTone'
import BankTwoTone from '@ant-design/icons/lib/icons/BankTwoTone'
import BookTwoTone from '@ant-design/icons/lib/icons/BookTwoTone'
import styled from 'styled-components'
import MenuItem from './MenuItem'
const MenuStyled = styled.div`
width: 256px;
height:100vh;
border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
font-size:14px;
position: absolute;
.active{
  background: #e6f4ff;
  color: #1677ff;
}
`

const Menu = ({ change, active }: { change: any, active: any }) => {
  const menuItemOnClick = (i: any) => {
    change(i)
  }
  const items = [
    { label: 'Home', icon: <BankTwoTone twoToneColor="#1677ff"/> },
    { label: 'Orders', icon: <BookTwoTone twoToneColor="#1677ff"/> },
    { label: 'Inventory', icon: <AppstoreTwoTone twoToneColor="#1677ff"/> },
    { label: 'Billing', icon: <AccountBookTwoTone twoToneColor="#1677ff"/> },
    { label: 'Messages', icon: <MessageTwoTone twoToneColor="#1677ff"/> },
    { label: 'Profile', icon: <SmileTwoTone twoToneColor="#1677ff"/> },
    { label: 'Settings', icon: <ToolTwoTone twoToneColor="#1677ff"/> },
    { label: 'Image Database Generator', icon: <FileImageTwoTone twoToneColor="#1677ff"/> }
  ]
  return <MenuStyled>
          <MenuListStyled>
            {items.map((item: any, i) =>
                <MenuItem active={active === i} onClick={() => { menuItemOnClick(i) }} label={item.label} icon={item.icon} key={i}/>
            )}
          </MenuListStyled>
        </MenuStyled>
}

const MenuListStyled = styled.ul`
list-style: none;
margin: 0;
padding: 0;
background: rgba(0, 0, 0, 0.02);
`

export default Menu
