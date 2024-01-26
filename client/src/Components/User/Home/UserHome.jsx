import React, { useEffect, useState } from 'react'
import Header from './Header'
import UserHotels from './Hotels/UserHotels'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import BaseUrl from '../../../Api/BaseUrl'
const UserHome = () => {
  let [hotelsData,setHotelsData] = useState([]);
  let [errormsg,setErrormsg] = useState("");
  useEffect(()=>{
    let fetchData = async()=>{
      try {
        let response = await axios.get(`${BaseUrl}/hotels`);
        let data = response.data.hotels;
        setHotelsData(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
    }
    fetchData();
  },[hotelsData])
  return (
    <>
      <Header />
      {hotelsData.length===0?
        <div className="loader"></div>
      :
      <UserHotels hotels={hotelsData} errormsg={errormsg} />
      }
      
      <Toaster />
    </>
  )
}

export default UserHome