import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios'
import BaseUrl from '../../../Api/BaseUrl'
const Header = () => {
  let [username,setUserName] = useState("");
  let [cartsize,setCartsize] = useState(0);
  let userid = localStorage.getItem("userid");
  let logoutHandler = ()=>{
    localStorage.clear();
    
  }
  useEffect(()=>{
    let fetchData = async ()=>{
      let response = await axios.get(`${BaseUrl}/users/${userid}`);
     
      let data = response.data;
      
      setUserName(data.user.username);
      
      try {
        let lengthResponse = await axios.get(`${BaseUrl}/cart/${userid}/user-cart`);
        let cartlenghtdata = lengthResponse.data.usercarts;
        setCartsize(cartlenghtdata.length);
      } catch (error) {
        setCartsize(0);
      }
    }
    fetchData();
  });
  return (
    <AppBar position='fixed'>
        <Toolbar sx={{backgroundColor:"#D80032"}}  >
              
               <Typography variant='h6'component="div" sx={{flexGrow:1}} >
               <Link to={"/user/home"} style={{color:"white",textDecoration:"none"}}> Eat Easy for users</Link>
                </Typography> 
                
                <Box >
                <Button LinkComponent={NavLink} to="/user/user-account" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",m:"3px"}} variant='contained'><PersonIcon fontSize='medium'/>{` Hey , ${username}`}</Button>
                <Badge color='warning' badgeContent={cartsize}>
                <Button LinkComponent={NavLink} to="/user/user-cart"  color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"5px"}} variant='contained'><ShoppingCartIcon/>cart</Button>
                </Badge> 
                <Button LinkComponent={NavLink} to="/user/user-orders" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained'><BookmarkBorderIcon/>orders</Button>
                
                <Button onClick={logoutHandler} LinkComponent={NavLink} to="/" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained'><LogoutIcon/>Logout</Button> 
                </Box>
        </Toolbar>
       
    </AppBar>
  )
}

export default Header