import React, {  useEffect, useState } from 'react'
import axios from "axios";
import { FormControl,Grow,Box,FormLabel,TextField,Button } from '@mui/material'
import BaseUrl from "../../../Api/BaseUrl";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";
const UpdateHotel = () => {
  let navigate = useNavigate();
  let hotelid = localStorage.getItem("hotelid");
  let [hotelname,setHotelname] = useState("");
  let [hotelmail,setHotelmail] = useState("");
  let [hotelpassword,setHotelpassword] = useState("");
  let [hotelimage,setHotelimage] = useState();
  let [hoteladdress,setHoteladdress] = useState("");
  let [hotelphno,setHotelphno] = useState(0);
  useEffect(()=>{
    let fetchData = async ()=>{
      let response = await axios.get(`${BaseUrl}/hotels/${hotelid}`);
      let data = response.data.hotel;
      setHotelname(data.hotelname);
      setHotelmail(data.hotelmail);
      setHotelpassword(data.hotelpassword);
      setHoteladdress(data.hoteladdress);
      setHotelphno(data.hotelphno);
    }
    fetchData();
  },[hotelid])
  let submitHandler = async (e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("hotelname",hotelname);
    formData.append("hotelmail",hotelmail);
    formData.append("hotelpassword",hotelpassword);
    formData.append("hotelimage",hotelimage);
    formData.append("hoteladdress",hoteladdress);
    formData.append("hotelphno",hotelphno);
    await axios.patch(`${BaseUrl}/hotels/${hotelid}/update-hotel`,formData);
    navigate("/hotel/home");
    setTimeout(()=>{
        toast.success("updated succesfully");
    },1000)
  }
  return (
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} sx={{p:"5%",m:"2% 5%",borderRadius:"5px"}}>
        <form onSubmit={submitHandler} >
            <FormControl  style={{color:"white"}} fullWidth >
                <FormLabel sx={{color:"white"}} htmlFor='hotelname'>Enter the restaurant name :</FormLabel>
                <TextField onChange={(e)=>setHotelname(e.target.value)}  sx={{input:{color:"white"}}} variant='filled' type='text' id='hotelname' name='hotelname' value={hotelname}  />
                <FormLabel sx={{color:"white"}} htmlFor='hotelmail'>Enter the restaurant e-mail :</FormLabel>
                <TextField onChange={(e)=>setHotelmail(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='email' id='hotelmail' name='hotelmail' value={hotelmail}  />
                <FormLabel  sx={{color:"white"}} htmlFor='hotelpassword'>update the password :</FormLabel>
                <TextField onChange={(e)=>setHotelpassword(e.target.value)}  sx={{input:{color:"white"}}} variant='filled' type='password' id='hotelpassword' name='hotelpassword'  />
                <FormLabel sx={{color:"white"}} htmlFor='hotelimage'>upload an image :</FormLabel>
                <TextField onChange={(e)=>setHotelimage(e.target.files[0])}  sx={{input:{color:"white"}}} variant='filled' type='file' id='hotelimage'  name='hotelimage' required   />
                <FormLabel sx={{color:"white"}} htmlFor='hoteladdress'>Enter the restaurant address :</FormLabel>
                <TextField onChange={(e)=>setHoteladdress(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='text' id='hoteladdress' name='hoteladdress' value={hoteladdress}  />
                <FormLabel sx={{color:"white"}} htmlFor='hotelphno'>Enter the phone number :</FormLabel>
                <TextField onChange={(e)=>setHotelphno(e.target.value)}  sx={{input:{color:"white"}}} variant='filled' type='number' id='hotelphno' name='hotelphno' value={hotelphno}  />
                <Button type='submit' variant='contained' color='inherit' sx={{mt:"2%",backgroundColor:"#F78CA2",color:"black"}}>Submit</Button>
            </FormControl>
        </form>
    </Box>
    </Grow>
  )
}

export default UpdateHotel