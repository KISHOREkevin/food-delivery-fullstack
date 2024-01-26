import { Card, CardActionArea, CardContent, CardMedia, Grow, Typography } from '@mui/material'
import React from 'react'
import {  NavLink } from 'react-router-dom'
const UserHotel = ({hotelname,hotelimage,hoteladdress,hotelid}) => {
  return (
    <Grow in>
    <Card sx={{ maxWidth: "100%",background:"#D80032",color:"white",m:"2%" }} >
        <CardActionArea LinkComponent={NavLink} to={"/user/"+hotelid+"/user-foods"}>
        <CardMedia component={"img"} height="100%" image={`${hotelimage}`} alt={`${hotelname}`} />
        <CardContent>
           <Typography variant='h6' fontWeight={"bolder"}>{hotelname}</Typography>
            <Typography variant='body1'>{hoteladdress}</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    </Grow>
  )
}

export default UserHotel