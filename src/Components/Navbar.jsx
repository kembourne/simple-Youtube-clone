import React from 'react'
import {logo} from '../Methods/constdata'
import SearchBar from './SearchBar'
import styled from 'styled-components'
export default function Navbar() {
  return (
    <Wrapper>
      <Image src={logo} alt="" />
<SearchBar />
    </Wrapper>
  )
}
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
 
`
const Image=styled.img` 
width: 50px;
`