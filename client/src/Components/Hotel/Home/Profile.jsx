import { Box, Grid, Grow, Typography,Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Profile = ({hotelimage,hotelname,hotelmail,hoteladdress,hotelphno,}) => {
 
  return (
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} display={"flex"} p={"3%"} m={"1%"} borderRadius={"5px"}>
       <Grid container columns={{sm:4,md:8}}>
         <Grid item sm={4} md={3} >
           <img style={{borderRadius:"5px"}} width={"100%"} src={hotelimage} alt="hotel" />
           </Grid> 
          <Grid item  sm={4} md={4}>
            <Box mt={"3%"} mx={"2%"} letterSpacing={6} >
            <Typography variant='h4'>{hotelname}</Typography>
            <Typography variant='h5'>{hotelmail}</Typography>
            <Typography variant='h5'>{hoteladdress}</Typography>
            <Typography variant='h5'>{hotelphno}</Typography>
            <Button LinkComponent={NavLink} to="/hotel/update-hotel"  color='inherit' sx={{backgroundColor:"#F78CA2",color:"black"}} variant='contained'>Update</Button>
            </Box>
            
          </Grid>
        </Grid>
      
    </Box>
    </Grow>
  )
}

export default Profile