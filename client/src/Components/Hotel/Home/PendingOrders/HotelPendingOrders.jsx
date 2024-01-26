import { Box, Grow, Typography } from "@mui/material";
import React from "react";
import HotelPendingOrder from "./HotelPendingOrder";
const HotelPendingOrders = ({ pendingOrders, errormsg }) => {
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
                Pending Section
              </Typography>
              {errormsg === "" ? (
                <>
                  {pendingOrders.map((pendingOrder) => {
                    return (
                      <HotelPendingOrder
                        username={pendingOrder.userdetail.username}
                        userfood={pendingOrder.cartdetail.fooddetail.foodname}
                        foodprice={pendingOrder.totalamount}
                        quantity={pendingOrder.quantity}
                        useraddress={pendingOrder.userdetail.useraddress}
                        orderid={pendingOrder._id}
                      />
                    )
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

export default HotelPendingOrders;
