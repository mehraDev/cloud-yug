import styled from 'styled-components'

const Item: React.FC = (props) => {
  const name = props.data?.name || 'Not Defined'
  const des = props.data?.des || ''
  const price = props.data?.price || ''
  return <ItemCardStyled>
      <img />
      <div>
      <h4>{name}</h4>
      <p>{des}</p>
      <span>{price}</span>
      </div>

    </ItemCardStyled>
}

const ItemCardStyled = styled.div`
 height: 300px;
 width: 200px;
 margin: 4px;
 background:white;
 img{
    padding:2px;
    width:100%;
    height:75%;
 }
 p{
    font-size: x-small;
    color: rgba(0, 0, 0, 0.88);
 }
 span{
    color: #1677ff;
 }
`
export default Item
// antd theme
