import React from "react";
import { Box, Grow, Typography } from "@mui/material";
import HotelOrder from "./HotelOrder";
const HotelOrders = ({ orders, errormsg }) => {
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/hotel/signin")
      ) : (
        <>
          <Grow in>
            <Box
              bgcolor={"#D80032"}
              height={"400px"}
              padding={"2%"}
              margin={"1%"}
              borderRadius={"5px"}
              sx={{ overflowY: "scroll" }}
            >
              <Typography variant="h6" color={"white"} textAlign={"center"}>
                Orders Section
              </Typography>
              {errormsg === "" ? (
                <>
                  {orders.map((order) => {
                    return (
                      <HotelOrder
                        username={order.userdetail.username}
                        userfood={order.cartdetail.fooddetail.foodname}
                        foodprice={order.totalamount}
                        quantity={order.quantity}
                        useraddress={order.userdetail.useraddress}
                      />
                    );
                  })}
                </>
              ) : (
                <Typography variant="h6" sx={{ color: "white" }}>
                  {errormsg}
                </Typography>
              )}
            </Box>
          </Grow>
        </>
      )}
    </>
  );
};

export default HotelOrders;
