import React, { useEffect, useState } from 'react'
import UserCarts from './usercarts/UserCarts'
import Header from "../Home/Header";
import axios from 'axios';
import BaseUrl from '../../../Api/BaseUrl';
import { Toaster } from 'react-hot-toast';

const UserCartSection = () => {
  let [cartData,setCartData] = useState([]);
  let [errormsg,setErrormsg] = useState("");
 
  let userid = localStorage.getItem("userid");
  useEffect(()=>{
   let fetchData = async()=>{
      try {
        let response = await axios.get(`${BaseUrl}/cart/${userid}/user-cart`);
        let data = response.data.usercarts;
        setCartData(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
   }
   fetchData();
  },[userid,cartData]);
 
  return (
    <>
    <Header />
    <UserCarts  cartFoods={cartData} errormsg={errormsg}  />

   <Toaster />
    </>
  )
}

export default UserCartSection