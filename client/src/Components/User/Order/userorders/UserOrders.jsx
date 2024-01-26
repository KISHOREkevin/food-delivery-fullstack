import React from "react";
import { Box, Grid,Typography } from "@mui/material";
import UserOrder from "./UserOrder";
const UserOrders = ({ orders, errormsg }) => {
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/user/signin")
      ) : (
        <>
          <Box p={"3%"} mt={"80px"}>
            {errormsg === "" ? (
              <Grid container columns={{ xs: 8, md: 12 }}>
                {orders.map((order) => {
                  return (
                    <Grid item xs={8} md={3}>
                      <UserOrder
                        foodname={order.cartdetail.fooddetail.foodname}
                        foodprice={order.totalamount}
                        foodimage={order.cartdetail.fooddetail.foodimage}
                        quantity={order.quantity}
                        orderstatus={order.pending}
                        orderid={order._id}
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

export default UserOrders;
