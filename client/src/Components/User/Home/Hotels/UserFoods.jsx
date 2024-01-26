import React from "react";
import UserFood from "./UserFood";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
const UserFoods = ({ foods, errormsg }) => {
  let {hotelid} = useParams();
  let userid = localStorage.getItem("userid");
  
  
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/")
      ) : (
        <>
          <Box p={"3%"} mt={"80px"}>
            {errormsg === "" ? (
              <Grid container columns={{ xs: 8, md: 12 }}>
                {foods.map((food) => {
                  return (
                    <Grid item xs={8} md={3} key={food._id}>
                      <UserFood
                        foodname={food.foodname}
                        foodid={food._id}
                        foodimage={food.foodimage}
                        foodprice={food.foodprice}
                        hotelid={hotelid}
                        userid={userid}
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

export default UserFoods;
