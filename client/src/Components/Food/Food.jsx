import React, { useEffect, useState } from 'react'
import { Box, Grid, Grow, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import BaseUrl from '../../Api/BaseUrl';
import toast from 'react-hot-toast';
const Food = () => {
  let {foodid} = useParams();
  let [foodData,setFooddata] = useState([]);
  let [errormsg,setErrormsg] = useState("");
  useEffect(()=>{
    let fetchData = async ()=>{
      try {
        let response = await axios.get(`${BaseUrl}/foods/food-category?foodid=${foodid}`);
        let data = response.data.foodByfoodid;
        setFooddata(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
        toast.error(error.response.data.message);
      }
      
    }
    fetchData();
  },[foodid,foodData])
  return (
    <>
    {foodData.length===0 ? <div className='loader'></div>:
      <>
      {errormsg===""?
        <>
        <Grow in>
        <Box bgcolor={"#D80032"} color={"white"} display={"flex"} p={"3%"} m={"1%"} borderRadius={"5px"}>
       <Grid container columns={{sm:4,md:8}}>
         <Grid item sm={4} md={3} >
           <img style={{borderRadius:"5px"}} width={"100%"} src={`${foodData.foodimage}`} alt={foodData.foodname} />
           </Grid> 
          <Grid item  sm={4} md={4}>
            <Box mt={"3%"} mx={"2%"} letterSpacing={6} >
            <Typography variant='h4'>{foodData.foodname}</Typography>
            <Typography variant='h5'>{foodData.foodhotel.hotelname}</Typography>
            <Typography variant='h5'>{`₹${foodData.foodprice}`}</Typography>
            </Box>
          </Grid>
          </Grid>
    </Box>
    </Grow>
        </>:
      <Typography variant='h4' sx={{color:"white"}}>{errormsg}</Typography>
      }
      </>
    }
    
    </>
  )
}

export default Food