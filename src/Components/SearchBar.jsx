import { useState} from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../Redux/slice';
import '../App.css'
const SearchBar = () => {
  const [message, setMessage] = useState('');

const dispatch =useDispatch();

  const handleChange = event => {
    setMessage(event.target.value);
  };

const clickMe=()=>{
dispatch(search(message));
}

  return (
    <Wrapper>
      <Input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
{ message?<Link to='/search' onClick={()=>clickMe()}>Search</Link> : "Search"}
    </Wrapper>
  );
};

export default SearchBar;
const Input=styled.input`
 width :250px ;
 height: 20px;
 border-radius: 8px;
 outline: none;
`
const Wrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`
