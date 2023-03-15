import styled from 'styled-components'

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const ItemViewerStyled = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1rem;
`

const ItemViewer = ({ items }: { items: any }) => {
  return <ItemViewerStyled>
    {items.map((item: any) => item)}
  </ItemViewerStyled>
}

export default ItemViewer
