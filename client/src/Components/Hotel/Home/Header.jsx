import React from 'react'
import { AppBar,Box,Button,Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
const Header = () => {
  let logoutHandler= ()=>{
    localStorage.clear();
    
}
  return (
      <Box>
        <AppBar position='static'>
          <Toolbar  sx={{backgroundColor:"#D80032"}}>
              <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                    Eat-Easy for business
              </Typography>
              <Button onClick={logoutHandler} LinkComponent={NavLink} to="/" color='inherit' sx={{backgroundColor:"#F78CA2",color:"black",mx:"3px"}} variant='contained'>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Header