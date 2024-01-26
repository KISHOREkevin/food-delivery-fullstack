import React from 'react'
import {Box, Button, Grid, Typography} from "@mui/material";
import homePageAsset_1 from "../../../assets/home-page-asset-1.jpg"
import homePageAsset_2 from "../../../assets/home-page-asset-2.jpg"
import homePageAsset_3 from "../../../assets/home-page-asset-3.jpeg" 
import homePageAsset_4 from "../../../assets/home-page-asset-4.jpg" 
import homePageAsset_5 from "../../../assets/home-page-asset-5.jpg" 

import { NavLink } from 'react-router-dom';
const Main = () => {
  return (
    <>
    <Box sx={{p:"12%",mt:"4%",color:"white",backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${homePageAsset_1})`,textAlign:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         <Typography variant='h3' fontWeight={"bolder"}>Eat Easy</Typography>
         <Typography variant="h5" fontWeight={"bolder"}>An food delivery application (for users)</Typography>
          <div style={{display:"flex"}}>
            <Button LinkComponent={NavLink} to={"/user/signup"} variant='contained' color='inherit' sx={{m:"6%",fontSize:"16px",backgroundColor:"#F78CA2",color:"black"}} fullWidth>Sign up </Button>
            <Button LinkComponent={NavLink} to={"/user/signin"} variant='contained' color="inherit" sx={{m:"6%",fontSize:"16px",backgroundColor:"#F78CA2",color:"black"}} fullWidth >Sign in</Button> 
          </div>
    </Box>
    <Box sx={{backgroundColor:"black",color:"white",p:"3%"}}>
        <Typography variant='h5' textAlign={"center"}>Varities of foods available here ....</Typography>
        <Grid textAlign={"center"} padding={"5%"} columns={{xs:1,sm:1,md:3}}  >
        <img src={homePageAsset_2} alt="pizza" width={300} style={{padding:"3%"}}  />
        <img src={homePageAsset_3} alt="briyani" width={300} style={{padding:"3%"}} />
        <img src={homePageAsset_4} alt="chicken" width={300} style={{padding:"3%"}} />
        </Grid>
    </Box>
    <Box sx={{p:"12%",color:"white",backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${homePageAsset_5})`,textAlign:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
        <Typography variant='h3' fontWeight={"bolder"}>Eat Easy</Typography>
         <Typography variant="h5" fontWeight={"bolder"}>An food delivery application (for business)</Typography>
         <div style={{display:"flex"}}>
            <Button LinkComponent={NavLink} to={"/hotel/signup"} variant='contained' color='inherit' sx={{m:"6%",fontSize:"16px",backgroundColor:"#F78CA2",color:"black"}} fullWidth>Create Restaurant</Button>
            <Button LinkComponent={NavLink} to={"/hotel/signin"} variant='contained' color="inherit" sx={{m:"6%",fontSize:"16px",backgroundColor:"#F78CA2",color:"black"}} fullWidth >Go to Restaurant</Button> 
          </div>
    </Box>
    </>
  )
}

export default Main