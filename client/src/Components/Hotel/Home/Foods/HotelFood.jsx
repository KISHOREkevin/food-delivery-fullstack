import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom";

const HotelFood = ({foodname,foodprice,deletefood,foodid}) => {
  return (
    <Box bgcolor={"#F78CA2"} p={"2%"} m={"1%"} borderRadius={"5px"}>
        <Link to={`/food/${foodid}`} style={{color:"black",textDecoration:"none"}}><Typography display={"inline-block"} variant='h6'>{foodname}</Typography></Link>
        <Button variant='contained' color='error' sx={{float:"right"}} onClick={()=>deletefood(foodid)} >delete</Button>
        <Typography variant='body1'>{`₹${foodprice}`}</Typography>
       
    </Box>
  )
}

export default HotelFood