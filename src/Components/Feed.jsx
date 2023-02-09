import React from 'react'
import { fetchData } from '../Methods/queries.js'
import { useEffect ,useState} from 'react'
import VideoDisplay from './VideoDisplay.jsx'
import { useSelector } from 'react-redux'
function Feed() {
const category=useSelector(state=>state.alldata.category);
const [feedData,setFeedData]=useState([])
useEffect(()=>{
    fetchData(`search?q=${category}&part=snippet%2Cid&maxResults=50`).then(data=>setFeedData(data.items))
},[category])
 
  return (
    <div>
      <h1>{category} Videos</h1>
      <VideoDisplay data={feedData}/>
    </div>
  )
}

export default Feed
