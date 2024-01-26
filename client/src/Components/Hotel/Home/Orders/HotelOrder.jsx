import React from 'react'
import { Box,Typography } from '@mui/material'

const HotelOrder = ({username,userfood,foodprice,quantity,useraddress}) => {
  return (
    <Box bgcolor={"#F78CA2"} p={"2%"} m={"1%"} borderRadius={"5px"}>
       <Typography variant='h6'>{username}</Typography>
        <Typography variant='h6'>{userfood}</Typography>
        <Typography variant='body1'>{foodprice}</Typography>
        <Typography variant="body1">{quantity}</Typography>
        <Typography variant='body1'>{useraddress}</Typography>
    </Box>
  )
}

export default HotelOrder