import React from 'react'
import { Box,Button,Typography } from '@mui/material'
import axios from 'axios'
import BaseUrl from '../../../../Api/BaseUrl'
import toast from 'react-hot-toast'
const HotelPendingOrder = ({username,userfood,foodprice,quantity,useraddress,orderid}) => {
  let completedButtonHandler = async()=>{
    try {
      let response = await axios.patch(`${BaseUrl}/orders/${orderid}/status-change`,{pending:false});
      let data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <Box bgcolor={"#F78CA2"} p={"2%"} m={"1%"} borderRadius={"5px"}>
    <Typography variant='h6'>{username}</Typography>
     <Typography variant='h6'>{userfood}</Typography>
     <Typography variant='body1'>{foodprice}</Typography>
     <Typography variant="body1">{quantity}</Typography>
     <Typography variant='body1'>{useraddress}</Typography>
     <Button  onClick={completedButtonHandler} variant='contained' color="primary" sx={{color:"white",background:"#D80032"}}>Completed</Button>
 </Box>
  )
}

export default HotelPendingOrder