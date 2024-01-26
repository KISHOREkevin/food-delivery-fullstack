import React from 'react'
import { Grow,Card,CardMedia,CardContent,Typography, Box, Button } from '@mui/material'
import axios from "axios";
import BaseUrl from "../../../../Api/BaseUrl";
const UserOrder = ({foodname,foodprice,foodimage,quantity,orderstatus,orderid}) => {
  let orderRecieveButtonHandler = async ()=>{
    await axios.delete(`${BaseUrl}/orders/${orderid}/delete-order`);
  }
  return (
    <Grow in>
    <Card sx={{ maxWidth: "100%",background:"#D80032",color:"white",m:"2%",pb:"1%"}} >

    <CardMedia component={"img"} height="100%" image={`${foodimage}`}  alt={foodname} />
    <CardContent>
       <Typography variant='h6' fontWeight={"bolder"}>{foodname}</Typography>
       <Typography variant='body1'>{quantity}</Typography>
        <Typography variant='body1'>{`₹${foodprice}`}</Typography>
    </CardContent>
 
    <Box p={2} textAlign={"center"}>
     {orderstatus ?  <Button variant='contained' color='error' sx={{color:"white"}} disabled>Order Pending!!!</Button>: <Button onClick={orderRecieveButtonHandler} variant='contained' color='error' >Order Recieved!!!</Button>}
      
    </Box>
    </Card>
    </Grow>
  )
}

export default UserOrder