import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import UserCart from "./UserCart";
const UserCarts = ({ cartFoods, errormsg }) => {
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/user/signin")
      ) : (
        <>
        <Box p={"3%"} mt={"80px"}>
          {errormsg === "" ? (
            <Grid container columns={{ xs: 8, md: 12 }}>
              {cartFoods.map((cart) => {
                return (
                  <Grid item xs={8} md={3} key={cart._id}>
                    <UserCart
                      foodname={cart.fooddetail.foodname}
                      foodimage={cart.fooddetail.foodimage}
                      foodprice={cart.fooddetail.foodprice}
                      foodid={cart.fooddetail._id}
                      cartid={cart._id}
                      hotelid={cart.hoteldetail}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Typography variant="h6" sx={{ color: "white" }}>
              {errormsg}
            </Typography>
          )}
        </Box>
      
        </>
        
      )}
    </>
  );
};

export default UserCarts;
