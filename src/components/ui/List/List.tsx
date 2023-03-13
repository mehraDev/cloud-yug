/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled from 'styled-components'

const ListStyled = styled.ul`
list-style: none;
margin: 0;
padding: 0;
background: rgba(0, 0, 0, 0.02);
`
const List = ({ listItem }: any) => {
  return <ListStyled>
    {listItem.map((item: any) => <li>
        {item}
    </li>)}
  </ListStyled>
}

export default List
