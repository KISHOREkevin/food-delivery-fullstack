import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import UserOrders from './userorders/UserOrders'
import axios from 'axios';
import BaseUrl from '../../../Api/BaseUrl';

const UserOrderSection = () => {
  let [orderData,setOrderData] = useState([]);
  let [errormsg,setErrormsg] = useState("");
  let userid = localStorage.getItem("userid");
  useEffect(()=>{
    let fetchData = async ()=>{
      try {
        let response = await axios.get(`${BaseUrl}/orders/${userid}/orders-by-user`);
        let data = response.data.orders;
        setOrderData(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
    }
    fetchData();
  })
  return (
    <>
    <Header/>
    <UserOrders orders={orderData} errormsg={errormsg} />
    </>
  )
}

export default UserOrderSection