import { useState } from 'react'
import styled from 'styled-components'

const Search = ({onSearch}) => {
  const [query, setQuery] = useState('')
  const handleSearch = (e) => {
    const q = e.target.value
    console.log(q)
    setQuery(q)
    onSearch(q)
  }
  return (
        <SearchWrapperStyled>
                <input type="text" placeholder="Search for items" value={query} onChange={(e) => { handleSearch(e) }}/>
                <span className="icon-magnifier">
                    Search
                </span>
        </SearchWrapperStyled>
  )
}
const SearchWrapperStyled = styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(40, 44, 63, 0.3);
    border-radius: 3px;
input{
    padding: 4px 8px;
    outline: 0px;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: inherit;
    color: inherit;
    background: inherit;
    vertical-align: middle;
    font-weight: 500;
}
span{
    padding: 4px 8px;
    background: #1677ff;
    color: white;
    border-radius: 0px 3px 3px 0px;
}
`

export default Search
