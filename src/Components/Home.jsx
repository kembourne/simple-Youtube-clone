import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Navbar from './Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Div>
      <NewSidebar />
        </Div>
      <NewFeed />
      </Main>
    </>
  )
}

export default Home
const Main=styled.div`
  display: flex;
flex-direction: row;
`
const NewSidebar=styled(Sidebar)`
  position: fixed;
  width: 25%;
  height: fit-content;
`
const Div=styled.div`
  width: 25%;
  position: relative;
`
const NewFeed=styled(Feed)`
width: 75%;
`