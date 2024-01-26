import React, { useEffect, useState } from 'react'
import {Box, Button, FormControl, FormLabel, Grow, TextField} from "@mui/material";
import axios from "axios";
import {toast} from "react-hot-toast";
import BaseUrl from "../../../Api/BaseUrl";
import { useNavigate } from 'react-router-dom';
const UpdateAccount = () => {
  let userid = localStorage.getItem("userid");
  let navigate = useNavigate();
  
  let [inputData,setInputData] = useState({
    username:"",
    usermail:"",
    userpassword:"",
    useraddress:"",
    userphno:0
  })
  useEffect(()=>{
    let fetchData = async()=>{
      let response = await axios.get(`${BaseUrl}/users/${userid}`);
      let data = response.data;
      setInputData({
        username:data.user.username,
        usermail:data.user.usermail,
        useraddress:data.user.useraddress,
        userphno:data.user.userphno
      })
    }
    fetchData();
  },[userid]);
  let inputHandler = (e)=>{
    let {name,value} = e.target;
    setInputData((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }
  let submitHandler = async (e)=>{
      e.preventDefault();
      try {
        let response = await axios.patch(`${BaseUrl}/users/${userid}/update-user`,inputData);
        let data = response.data;
        navigate("/user/user-account");
        setTimeout(()=>{
            toast.success(data.message);
        },1000)
      } catch (error) {
        toast.error(error.response.data.message);
      }
  }
  return (
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} sx={{p:"5%",m:"2% 5%",borderRadius:"5px"}}>
        <form onSubmit={submitHandler}>
            <FormControl style={{color:"white"}} fullWidth >
                <FormLabel sx={{color:"white"}} htmlFor='username'>Enter your name :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='text' id='username' name='username' value={inputData.username}  />
                <FormLabel sx={{color:"white"}} htmlFor='usermail'>Enter your e-mail :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='email' id='usermail' name='usermail' value={inputData.usermail} />
                <FormLabel sx={{color:"white"}} htmlFor='userpassword'>Update the password :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='password' id='userpassword' name='userpassword' />
                <FormLabel sx={{color:"white"}} htmlFor='useraddress'>Enter your address :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='text' id='useraddress' name='useraddress' value={inputData.useraddress} />
                <FormLabel sx={{color:"white"}} htmlFor='userphno'>Enter your phone number :</FormLabel>
                <TextField onChange={inputHandler} sx={{input:{color:"white"}}} variant='filled' type='number' id='userphno' name='userphno' value={inputData.userphno} />
                <Button type='submit' variant='contained' color='inherit' sx={{mt:"2%",backgroundColor:"#F78CA2",color:"black"}}>Submit</Button>
            </FormControl>
          
        </form>
    </Box>
    </Grow>
  )
}

export default UpdateAccount