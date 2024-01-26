import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserHotel from "./UserHotel";

const UserHotels = ({ hotels, errormsg }) => {
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/")
      ) : (
        <>
          <Box p={"3%"} mt={"80px"}>
            {errormsg === "" ? (
              <Grid container columns={{ xs: 8, md: 12 }}>
                {hotels.map((hotel) => {
                  return (
                    <Grid item xs={8} md={3} key={hotel._id}>
                      <UserHotel
                        hotelid={hotel._id}
                        hoteladdress={hotel.hoteladdress}
                        hotelname={hotel.hotelname}
                        hotelimage={hotel.hotelimage}
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

export default UserHotels;
