import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Credit from './Components/Home/Credit';
import UserSignup from './Components/User/Auth/userSignup/UserSignup';
import UserSignin from './Components/User/Auth/userSignin/UserSignin';
import HotelSignup from './Components/Hotel/Auth/hotelSignup/HotelSignup';
import HotelSignin from './Components/Hotel/Auth/hotelSignin/HotelSignin';
import HotelHome from './Components/Hotel/Home/HotelHome';
import UserHome from './Components/User/Home/UserHome';
import Error from './Components/Error/Error';
import UserFoodSection from './Components/User/Home/UserFoodSection';
import UserCartSection from './Components/User/Cart/UserCartSection';
import UserOrderSection from './Components/User/Order/UserOrderSection';
import AccountSection from './Components/User/Account/AccountSection';
import UpdateAccount from './Components/User/Account/UpdateAccount';
import Food from './Components/Food/Food';
import AddFood from './Components/Hotel/Home/Foods/AddFood';
import UpdateHotel from './Components/Hotel/Home/UpdateHotel';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/credits" element={<Credit />} />
        <Route path='/user/signup' element={<UserSignup/>} />
        <Route path='/user/signin' element={<UserSignin/>} />
        <Route path='/user/home' element={<UserHome />} />
        <Route path='/user/:hotelid/user-foods' element={<UserFoodSection/>} />
        <Route path='/user/user-cart' element={<UserCartSection/>} />
        <Route path='/user/user-orders' element={<UserOrderSection />} />
        <Route path='/user/user-account' element={<AccountSection />} />
        <Route path='/user/user-update' element={<UpdateAccount />} />
        <Route path='/hotel/signup' element={<HotelSignup/>} />
        <Route path='/hotel/signin' element={<HotelSignin/>} />
        <Route path='/hotel/home' element={<HotelHome />} />
        <Route path='/hotel/update-hotel' element={<UpdateHotel />}/>
        <Route path='/hotel/add-food' element={<AddFood />} />
       <Route path='/food/:foodid' element={<Food />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App