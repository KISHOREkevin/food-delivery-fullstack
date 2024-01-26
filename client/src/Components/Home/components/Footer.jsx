import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box color={"white"} bgcolor={"black"} textAlign={"center"} padding={"10%"}>
        <Typography variant='h6'>For enquiries and feedback:</Typography>
        <Typography variant='body1'>+91XXXXXXXX</Typography>
        <Typography variant='body1'>XXXX@YYYY.com</Typography>
    </Box>
  )
}

export default Footer