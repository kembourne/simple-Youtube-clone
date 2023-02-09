import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import styled from "styled-components";
import Box from "@mui/material/Box";

function VideoDisplay({ data }) {
  return (
    <Main>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {data?.map((item) => {
          return (
            <Grid container item={true} xsm={12} sm={6} md={3} spacing={2}>
              <Box sx={{ width: 300, height: 300 }} m="auto" overflow="hidden">
           {item?.id?.videoId? <Link to={ item?.id?.videoId}>

            <VideoCard data={item} />
                </Link> : <VideoCard data={item} /> }
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Main>
  );
}

export default VideoDisplay;

const Main = styled.div``;

