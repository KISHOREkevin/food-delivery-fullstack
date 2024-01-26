import React, { useEffect, useState } from "react";
import {
  Grow,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import BaseUrl from "../../../../Api/BaseUrl";
import toast, { Toaster } from "react-hot-toast";
const UserCart = ({ foodname, foodprice, foodimage, foodid, cartid,hotelid }) => {
  let [quantity, setQuantity] = useState(1);
  let [totalFoodPrice, setTotalFoodPrice] = useState(foodprice);
  let [orderStatus, setOrderStatus] = useState(false);
  let userid = localStorage.getItem("userid");
  let cartDeleteHandler = async () => {
    try {
      let response = await axios.delete(
        `${BaseUrl}/cart/${cartid}/delete-cart`
      );
      let data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          `${BaseUrl}/orders/${cartid}/orders-by-cart`
        );
        let data = response.data;
        setOrderStatus(data.status);
      } catch (error) {
        setOrderStatus(error.response.data.status);
      }
    };
    fetchData();
  });
  useEffect(() => {
    setTotalFoodPrice(foodprice * quantity);
  }, [foodprice, quantity]);
  let plusButtonHandler = () => {
    setQuantity(quantity + 1);
  };
  let minusButtonHandler = () => {
    setQuantity(quantity - 1);
  };
  let orderAddHandler = async () => {
    let order = {
      quantity,
      totalamount: totalFoodPrice,
      userdetail: userid,
      hoteldetail:hotelid
    };
    try {
      let response = await axios.post(
        `${BaseUrl}/orders/${cartid}/create-order`,
        order
      );
      let data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Grow in>
        <Card
          sx={{
            maxWidth: "100%",
            background: "#D80032",
            color: "white",
            m: "2%",
            pb: "1%",
          }}
        >
          <CardActionArea LinkComponent={NavLink} to={`/food/${foodid}`}>
            <CardMedia
              component={"img"}
              height="100%"
              image={`${foodimage}`}
              alt={`${foodname}`}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={"bolder"}>
                {foodname}
              </Typography>
              <Typography variant="body1">{`₹${totalFoodPrice}`}</Typography>
            </CardContent>
          </CardActionArea>
          <Box p={2} textAlign={"center"}>
            {quantity <= 1 ? (
              <Button
                color="inherit"
                sx={{ backgroundColor: "#F78CA2", color: "black",borderRadius:"50%" }}
                disabled
              >
                <RemoveIcon/>
              </Button>
            ) : (
              <Button
                color="inherit"
                sx={{ backgroundColor: "#F78CA2", color: "black",borderRadius:"50%" }}
                onClick={minusButtonHandler}
              >
                <RemoveIcon/>
              </Button>
            )}
            <Typography variant="body1" display={"inline-block"} mx={"1%"}>
              {quantity}
            </Typography>
            <Button
              color="inherit"
              sx={{ backgroundColor: "#F78CA2", color: "black",borderRadius:"50%" }}
              onClick={plusButtonHandler}
            >
              <AddIcon />
            </Button>
          </Box>
          <Button
            onClick={orderAddHandler}
            color="inherit"
            sx={{ backgroundColor: "#F78CA2", color: "black" }}
            fullWidth
          >
            Order Now !
          </Button>
          {orderStatus ? (
            <Button
              
              color="error"
              sx={{ color: "white" }}
              fullWidth
              disabled
            >
              delete <DeleteIcon/>
            </Button>
          ) : (
            <Button color="error" sx={{ color: "white" }} onClick={cartDeleteHandler} fullWidth >
              delete <DeleteIcon/>
            </Button>
          )}
        </Card>
      </Grow>
      <Toaster />
    </>
  );
};

export default UserCart;
