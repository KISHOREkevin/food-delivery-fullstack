import React, { useState } from 'react'
import {Box, Button, FormControl, FormLabel, Grow, TextField} from "@mui/material";
import { Toaster,toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../../../../Api/BaseUrl';
const UserSignin = () => {
  let navigate = useNavigate();
  let [inputData,setInputData] = useState({
    usermail:"",
    userpassword:""
  })
  let inputHandler = (e)=>{
    let {name,value} = e.target;
    setInputData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  let submitHandler = async(e)=>{
    e.preventDefault();
    try {
      let response = await axios.post(`${BaseUrl}/users/authenticate`,inputData);
      let data = response.data;
      localStorage.setItem("userid",data.user._id);
      localStorage.setItem("usermail",data.user.usermail);
      navigate("/user/home")
      setTimeout(()=>{
          toast.success(data.message);
      },1000)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} sx={{p:"5%",m:"100px 3%",borderRadius:"5px"}}>
        <form onSubmit={submitHandler} >
            <FormControl  style={{color:"white"}} fullWidth >
                <FormLabel sx={{color:"white"}} htmlFor='usermail'>Enter your e-mail :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='email' id='usermail' name='usermail' />
                <FormLabel sx={{color:"white"}} htmlFor='userpassword'>Enter the password :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='password' id='userpassword' name='userpassword' />
                <Button type="submit" variant='contained' color='inherit' sx={{mt:"2%",backgroundColor:"#F78CA2",color:"black"}}>Submit</Button>
            </FormControl>
            <Toaster />
        </form>
    </Box>
    </Grow>
  )
}

export default UserSignin