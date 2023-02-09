import React from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { fetchData } from '../Methods/queries';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard'
import styled from 'styled-components';

import { Typography } from '@mui/material';
export default function Playing() {
const [data,setData]=useState([]);
const [likedata,setLikedata]=useState([]);
    const params=useParams();
const {videoId}=params;
console.log(params)
useEffect(()=>{
 fetchData(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`).then(res=>setData(res));
},[])
useEffect(()=>{
fetchData(`search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`).then(res=>setLikedata(res))
},[])

  return (
  <Wrapper>
    
<Newbox >

      <iframe
      title='javascript'
    width="660"
    height="415"
    src={`https://www.youtube.com/embed/${videoId}`}
   
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
  <Link to='/pageDetails'>
 
{
  data?.items?.map(item=>{
    return <>
<Typography >
  <h1>{item?.snippet?.title}</h1>

</Typography>
      <Link to='/pagedetails/'>
    <Smallwrapper>
      <Image src={item?.snippet?.thumbnails?.high.url} alt="none" />
      <h3>{item?.snippet?.channelTitle}</h3>
  </Smallwrapper>
      </Link>
  
  <p>{item?.snippet?.description}</p>
   </>
    
  })
}
  </Link>
</Newbox>
<Stack>
{likedata?.items?.map((item) => {
          return (
            <Box sx={ { width: 300,
              height: 300,}} m="auto" overflow="hidden">
             {item?.id?.videoId? <Link to={ item?.id?.videoId}>

<VideoCard data={item} />
    </Link> : <VideoCard data={item} /> }
              </Box>
               );
              })}
</Stack>

  </Wrapper>
  )
}
const Wrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
 padding: 50px;

 @media screen and (max-width:820px){
  flex-direction: column;
  
 }
`

const Image=styled.img`
width: 60px;
border-radius: 50px;

`
const Newbox=styled(Box)`
max-width: 600px;
height: fit-content;
overflow: unset;
`
const Smallwrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`