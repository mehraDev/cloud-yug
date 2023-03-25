/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled from 'styled-components'

const MenuItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 0.25rem;
    text-overflow: ellipsis;
    height:40px;
    border-radius: 0.25rem;
    postion:relative;
    cursor: pointer;
    padding: 0.12rem 1rem 0.12rem 1.5rem;
    justify-content: space-between;
    transition: border-color 0.3s,background 0.3s,padding 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    :hover{
      background-color: rgba(0, 0, 0, 0.06);
    }
    & .active{
      background-color: #e6f4ff;
    }
`

const MenuItem = (props: any) => {
  return <MenuItemStyled className={props.active ? 'active' : ''} onClick={props.onClick}>
  <div>{props.icon}</div>
  <div>{props.label}</div>
  <div>{props.notification}</div>
  </MenuItemStyled>
}

export default MenuItem
