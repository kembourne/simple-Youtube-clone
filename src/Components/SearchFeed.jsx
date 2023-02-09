import React from 'react'
import VideoDisplay from './VideoDisplay';
import { useEffect ,useState} from 'react';
import { fetchData } from '../Methods/queries';
import { useSelector } from 'react-redux';
function SearchFeed() {
    const message=useSelector(state=>state.alldata.searchTerm)
    const [data,searchData]=useState([])
    useEffect(()=>{
           fetchData(`search?q=${message}&part=snippet%2Cid&maxResults=50`).then(res=>searchData(res.items));
    },[message])
  return (
    <div>

      <div className="allvideo">
<h1>{message}</h1>
{message? <VideoDisplay data={data}/> : " "}
</div>
    </div>
  )
}

export default SearchFeed

