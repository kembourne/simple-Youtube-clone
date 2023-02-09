import React from 'react'
import { categories } from '../Methods/constdata.js'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { isLogin } from '../Redux/slice.js'
function Sidebar() {
  const dispatch=useDispatch();
const handleClick = (e) => {
 dispatch(isLogin(e))
 console.log(e)
  };
  return (
    <div>
      {categories?.map(({name , icon})=> {
        return <Wrapper  onClick={()=>handleClick(name)}>
        <Icon>{icon}</Icon>
        <Name >{name}</Name  >
          </Wrapper>
      }
      )}
 
    </div>
  )
}

export default Sidebar
const Wrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  padding-left: 20px;

  width: 200px;
  border-radius: 50px;
  margin-bottom: 5px;
 background-color: color;

`
const Icon=styled.pre`
  color: #8f2528;
`
const Name=styled.pre`
  font-weight: bolder;
`