import { Box, Button, Grow, Typography } from '@mui/material'
import React from 'react'
import HotelFood from "./HotelFood";
import {toast} from "react-hot-toast";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import BaseUrl from '../../../../Api/BaseUrl';
const HotelFoods = ({foods,errormsg}) => {
  let deleteFoodHandler = async  (foodid)=>{
    try {
      let response = await axios.delete(`${BaseUrl}/foods/${foodid}/delete-food`);
      let data = response.data;
      setTimeout(()=>{
        toast.success(data.message);
      },1000)
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <Grow in>
      <Box bgcolor={"#D80032"} height={"400px"} padding={"2%"} margin={"1%"} borderRadius={"5px"} sx={{overflowY:"scroll"}} >
            <Box display={"flex"}>
            <Typography variant='h6' color={"white"} textAlign={"center"} sx={{flexGrow:1}}>Food Section</Typography>
            
            <Button variant="contained" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black"}} LinkComponent={NavLink} to="/hotel/add-food" >Add</Button>
            </Box>
            {errormsg===""?
              <>
                {foods.map((food)=>{
                      return (
                          <HotelFood key={food._id} foodname={food.foodname} foodprice={food.foodprice} foodid={food._id} deletefood={deleteFoodHandler} /> 

                      )
                })}
              </>
                
            :<Typography variant='h4' sx={{color:"white"}}>{errormsg}</Typography>}
            
      </Box>
      </Grow>
  )
}

export default HotelFoods