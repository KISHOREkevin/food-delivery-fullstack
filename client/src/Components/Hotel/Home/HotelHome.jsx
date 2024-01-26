import React, { useEffect, useState } from 'react'
import axios from "axios";

import Header from "./Header";
import Profile from './Profile'
import HotelFoods from './Foods/HotelFoods'
import HotelOrders from './Orders/HotelOrders'
import HotelPendingOrders from './PendingOrders/HotelPendingOrders'
import { Grid } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import BaseUrl from '../../../Api/BaseUrl.js';
import "../../../style.css";

const HotelHome = () => {
  let [hotelData,setHotelData] = useState([]);
  let [foodData,setFoodData] = useState([]);
  let [orderData,setOrderData] = useState([]);
  let [pendingOrderData,setPendingOrderData] = useState([]);
  let hotelid = localStorage.getItem("hotelid");
  let [errormsg,setErrormsg] = useState("");
  let [orderSectionErr,setOrderSectionErr] = useState("");
  let [pendingSectionErr,setPendingSectionErr] = useState("");
  useEffect(()=>{
    let fetchData = async ()=>{
      try {
        let response = await axios.get(`${BaseUrl}/hotels/${hotelid}`);
        let datum =  response.data.hotel;
        setHotelData(datum);
        
      } catch (error) {
        console.log(error);
      }
       
    }
    fetchData();
  },[hotelid]);
  
  useEffect(()=>{
    let fetchData=async ()=>{
      try {
        let response = await axios.get(`${BaseUrl}/foods/food-category?hotelid=${hotelid}`);
        let data = response.data.foodbyhotelid;
        setFoodData(data);
      } catch (error) {
          setErrormsg(error.response.data.message);
      }
    }
    fetchData();
  },[hotelid,foodData])

  useEffect(()=>{
    let fetchData = async ()=>{
      try {
        let response = await axios.get(`${BaseUrl}/orders/${hotelid}/orders-by-hotel`);
        let data =  response.data.orders;
        setOrderData(data);
      } catch (error) {
        setOrderSectionErr(error.response.data.message);
      }
    }
    fetchData();
  },[hotelid,orderData]);

  useEffect(()=>{
    let fetchData = async()=>{
      try {
        let response = await axios.get(`${BaseUrl}/orders/${hotelid}/orders-by-status?pending=true`);
        let data = response.data.orders;
        setPendingOrderData(data);
      } catch (error) {
        setPendingSectionErr(error.response.data.message);
      }
    }
    fetchData();
  },[hotelid,pendingOrderData])
  
  return (
      <>
      {localStorage.length===0?
        window.location.href="/hotel/signin"
      :
        <>
        {hotelData.length===0 ? <div className='loader'></div>:
          <>
           <Toaster />
           <Header />
          
            <Profile 
            hotelname={hotelData.hotelname}   
            hotelmail={hotelData.hotelmail}
            hotelimage={`${hotelData.hotelimage}`}
            hoteladdress={hotelData.hoteladdress}
            hotelphno={hotelData.hotelphno}    
        /> 
          
           
           <Grid container columns={{xs:4,md:12}}>
             <Grid item xs={4} md={4}>
               <HotelFoods foods={foodData} errormsg={errormsg}/>
             </Grid>
             <Grid item xs={4} md={4}>
               <HotelOrders orders={orderData} errormsg={orderSectionErr} />
             </Grid>
             <Grid item xs={4} md={4}>
               <HotelPendingOrders pendingOrders={pendingOrderData} errormsg={pendingSectionErr} />
             </Grid>
     
           </Grid>  
          
          </>
        }
        
        </>
      }

       
      </>
          
 
   
  )
}

export default HotelHome
