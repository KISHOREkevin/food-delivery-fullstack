import React, { useEffect, useState } from 'react'
import Header from './Header'
import UserFoods from './Hotels/UserFoods'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BaseUrl from '../../../Api/BaseUrl'
import {Toaster} from "react-hot-toast";
const UserFoodSection = () => {

  let [foodsData,setFoodsData] = useState([]);
  let [errormsg,setErrormsg] = useState("");
  let {hotelid} = useParams();
  useEffect(()=>{
    let fetchData = async()=>{
      try {
        let response = await axios.get(`${BaseUrl}/foods/food-category?hotelid=${hotelid}`);
        let data = response.data.foodbyhotelid;
        setFoodsData(data)
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
    }
    fetchData();
  },[hotelid,foodsData]);
  return (
    <>
    <Header />
    {foodsData.length===0 ? 
      <div className="loader"></div>
    :
    <UserFoods foods={foodsData} errormsg={errormsg} />
    }
    <Toaster />
    </>
  )
}

export default UserFoodSection