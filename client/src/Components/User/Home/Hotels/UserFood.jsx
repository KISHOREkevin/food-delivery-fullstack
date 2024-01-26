import React from 'react'
import { Card,CardActionArea,CardContent,Typography,CardMedia, Button, Grow } from '@mui/material'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import BaseUrl from '../../../../Api/BaseUrl';
import toast from 'react-hot-toast';
const UserFood = ({foodname,foodprice,foodid,foodimage,hotelid,userid}) => {
 
  let addToCartButtonHandler = async()=>{
    try {
      let response = await axios.post(`${BaseUrl}/cart/${hotelid}/${userid}/${foodid}/create-cart`);
      let data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      
    }
  }
  return (
    <Grow in>
    <Card sx={{ maxWidth: "100%",background:"#D80032",color:"white",m:"2%"}} >
    <CardActionArea LinkComponent={NavLink} to={`/food/${foodid}`}>
    <CardMedia component={"img"} height="100%" image={`${foodimage}`}  alt={`${foodname}`} /> 
    <CardContent>
       <Typography variant='h6' fontWeight={"bolder"}>{foodname}</Typography>
        <Typography variant='body1'>{`₹${foodprice}`}</Typography>
    </CardContent>
    </CardActionArea>
    <Button variant='contained' color='inherit' sx={{backgroundColor:"#F78CA2",color:"black"}} onClick={addToCartButtonHandler} fullWidth>Add to cart <AddIcon/></Button>
    </Card>
    </Grow>
  )
}

export default UserFood