import React, { useState } from 'react'
import {Box, Button, FormControl, FormLabel, Grow, TextField} from "@mui/material";
import { toast } from 'react-hot-toast';
import axios from "axios";
import BaseUrl from '../../../../Api/BaseUrl';
import { useNavigate } from 'react-router-dom';
const AddFood = () => {
  let [foodname,setFoodname] = useState("");
  let [foodprice,setFoodprice] = useState(0);
  let [foodimage,setFoodimage] = useState();
  let hotelid = localStorage.getItem("hotelid");
  let navigate = useNavigate();
  let submitHandler = async (e)=>{
    try {
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("foodname",foodname);
      formdata.append("foodprice",foodprice);
      formdata.append("foodimage",foodimage);
      let response = await axios.post(`${BaseUrl}/foods/${hotelid}/create-food`,formdata);

      navigate("/hotel/home");
      setTimeout(()=>{
          toast.success(response.data.message);
      },1000)
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} sx={{p:"5%",m:"2% 5%",borderRadius:"5px"}}>
        <form onSubmit={submitHandler} >
            <FormControl  style={{color:"white"}} fullWidth >
                <FormLabel sx={{color:"white"}} htmlFor='foodname'>Enter the food name :</FormLabel>
                <TextField onChange={(e)=>setFoodname(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='text' id='foodname' name='foodname' />
                <FormLabel sx={{color:"white"}} htmlFor='foodimage'>upload an image :</FormLabel>
                <TextField onChange={(e)=>setFoodimage(e.target.files[0])} sx={{input:{color:"white"}}} variant='filled' type='file' id='foodimage' name='foodimage' />
                <FormLabel sx={{color:"white"}} htmlFor='foodprice'>Enter the food price :</FormLabel>
                <TextField onChange={(e)=>setFoodprice(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='number' id='foodprice' name='foodprice' />
                <Button type='submit' variant='contained' color='inherit' sx={{mt:"2%",backgroundColor:"#F78CA2",color:"black"}}>Submit</Button>
            </FormControl>
        </form>
    </Box>
    </Grow>
  )
}

export default AddFood