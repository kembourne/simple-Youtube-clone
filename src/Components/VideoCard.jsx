
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function ActionAreaCard({data}) {
  return (
    <card sx={{ maxWidth:350}}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.snippet.thumbnails.high.url}
          alt="green iguana"
        />
        <CardContent>
          <Newcardcontent gutterBottom variant="pre" component="div">
          {data?.snippet.title}
          </Newcardcontent>
          <Smallwrapper>
      <Image src={data?.snippet?.thumbnails?.high.url} alt="none" />
     <Link to='/pageDetails'>
     <h3>{data?.snippet?.channelTitle}</h3>
     </Link > 
  </Smallwrapper>
        </CardContent>
      </CardActionArea>
    </card>
  );
}
const NewCard=styled(Card)`
  background-color: #3c3539;
  margin-bottom: card;
`
const Smallwrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
  
`
const Image=styled.img`
width: 60px;
border-radius: 50px;

`
const Newcardcontent=styled(Typography)`
  height: 50px;
  overflow: hidden;
`