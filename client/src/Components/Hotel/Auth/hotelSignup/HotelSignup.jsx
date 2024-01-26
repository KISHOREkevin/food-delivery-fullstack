import React, {  useState } from 'react'
import {Box, Button, FormControl, FormLabel, Grow, TextField} from "@mui/material";
import BaseUrl from '../../../../Api/BaseUrl';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const HotelSignup = () => {
  let navigate = useNavigate();
  let [hotelname,setHotelname] = useState("");
  let [hotelmail,setHotelmail] = useState("");
  let [hotelpassword,setHotelpassword] = useState("");
  let [hotelimage,setHotelimage] = useState();
  let [hoteladdress,setHoteladdress] = useState("");
  let [hotelphno,setHotelphno] = useState(0);
  let submitHandler = async (e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("hotelname",hotelname);
    formData.append("hotelmail",hotelmail);
    formData.append("hotelpassword",hotelpassword);
    formData.append("hotelimage",hotelimage);
    formData.append("hoteladdress",hoteladdress);
    formData.append("hotelphno",hotelphno);
    await axios.post(`${BaseUrl}/hotels/create-hotel`,formData);
    navigate("/hotel/signin");
  }
  return (

    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} sx={{p:"5%",m:"2% 5%",borderRadius:"5px"}}>
        <form onSubmit={submitHandler}>
            <FormControl  style={{color:"white"}} fullWidth >
                <FormLabel sx={{color:"white"}} htmlFor='hotelname'>Enter the restaurant name :</FormLabel>
                <TextField onChange={(e)=>setHotelname(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='text' id='hotelname' name='hotelname' required />
                <FormLabel sx={{color:"white"}} htmlFor='hotelmail'>Enter the restaurant e-mail :</FormLabel>
                <TextField onChange={(e)=>setHotelmail(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='email' id='hotelmail' name='hotelmail' required />
                <FormLabel  sx={{color:"white"}} htmlFor='hotelpassword'>Create the password :</FormLabel>
                <TextField  onChange={(e)=>setHotelpassword(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='password' id='hotelpassword' name='hotelpassword' required />
                <FormLabel sx={{color:"white"}} htmlFor='hotelimage'>upload an image :</FormLabel>
                <TextField onChange={(e)=>setHotelimage(e.target.files[0])} sx={{input:{color:"white"}}} variant='filled' type='file' id='hotelimage' name='hotelimage' required />
                <FormLabel sx={{color:"white"}} htmlFor='hoteladdress'>Enter the restaurant address :</FormLabel>
                <TextField onChange={(e)=>setHoteladdress(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='text' id='hoteladdress' name='hoteladdress' required />
                <FormLabel sx={{color:"white"}} htmlFor='hotelphno'>Enter the phone number :</FormLabel>
                <TextField onChange={(e)=>setHotelphno(e.target.value)} sx={{input:{color:"white"}}} variant='filled' type='number' id='hotelphno' name='hotelphno' required />
                <Button type='submit' variant='contained' color='inherit' sx={{mt:"2%",backgroundColor:"#F78CA2",color:"black"}}>Submit</Button>
            </FormControl>
        </form>
    </Box>
    </Grow>
  )
}

export default HotelSignup