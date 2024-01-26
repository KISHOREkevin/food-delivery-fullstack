import React from 'react'
import errorimg from "../../assets/error.png";
import { Box, Typography } from '@mui/material';
import Header from "../Home/components/Header"
const Error = () => {
  return (
    <>
    <Header/>
    <Box color={"white"} textAlign={"center"}>
      <img src={errorimg} alt="error" />
      <Typography variant='h4'>Looks like this page got lost in the sauce.</Typography>
    </Box>
    </>
  )
}

export default Error