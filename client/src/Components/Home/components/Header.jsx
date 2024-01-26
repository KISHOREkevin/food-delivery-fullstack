import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <AppBar position='fixed' >
            <Toolbar sx={{backgroundColor:"#D80032"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Eat Easy
          </Typography>
          <Button LinkComponent={NavLink} to="/" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained'>Home</Button>
          <Button LinkComponent={NavLink} to="/about" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained'>About</Button>
          <Button LinkComponent={NavLink} to="/credits" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained' >Credits</Button>
            
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header