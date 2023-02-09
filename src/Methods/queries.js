import axios from "axios";
import {Rapid_API_key } from '../hello.env'
const base_URL='https://youtube-v31.p.rapidapi.com';

 export const fetchData=async (urlpart)=>{
   
   const data= await axios.get(`${base_URL}/${urlpart}` ,{
    headers: {
      'X-RapidAPI-Key': '538ade6eefmsh16448dfc43f6e45p1a22abjsn47ddeca3466b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }).then(res=>res.data)
   return data;
}


