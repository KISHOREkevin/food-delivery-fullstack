import React from 'react'

import {Box, Grow, Typography} from "@mui/material";
const About = () => {
  return (
    <>
    <Grow in>
    <Box bgcolor={"#D80032"} color={"white"} m={"3%"} p={"3%"} borderRadius={"5px"}>
      
      <Typography variant='h4' textAlign={"center"}> About Eat Easy: Your One-Stop Shop for Delicious Deliveries</Typography>
   <Typography variant='body1'>Eat Easy is more than just a food delivery app; it's your personal genie in a bottle, granting wishes in the form of piping-hot meals delivered straight to your doorstep. We're passionate about connecting people with the incredible food their city has to offer, all with a few taps on your phone.</Typography> 

   <Typography variant='h4' textAlign={"center"}> Here's what makes Eat Easy your go-to food delivery app:</Typography>
    <ul style={{fontSize:"22px"}}>
        <li>Widest Variety: Craving Indian curries, Italian pizzas, or juicy Korean BBQ? We've got you covered! Our platform boasts a diverse range of restaurants, from local gems to established favorites, ensuring you satisfy any culinary whim.</li>

        <li>Effortless Ordering: Our user-friendly interface makes ordering a breeze. Browse menus, customize your dishes, and checkout securely – all within the app. No more deciphering handwritten menus or battling long phone lines!</li>

        <li>Lightning-Fast Delivery: Our efficient network of delivery partners ensures your food arrives hot, fresh, and ready to devour. Track your order in real-time and watch as your culinary adventure gets closer with each passing minute.</li>

<li>Convenience at Your Fingertips: Schedule your meals in advance for busy days, save your favorite orders for quick re-ordering, and pay seamlessly through secure in-app payment options. Eat Easy is designed to make your life easier, one delicious bite at a time.</li>

<li>ommunity Focus: We're committed to supporting local restaurants and the communities they serve. By choosing Eat Easy, you're not just indulging your taste buds – you're helping your neighbors thrive.</li>C</ul>

 <Typography variant='body1'>But Eat Easy is more than just convenience. We're about bringing people together over shared meals, creating memories, and fueling good times. We believe food has the power to connect us, comfort us, and spark joy. And we're here to make sure that delicious experience is just a tap away.</Typography>

<Typography variant='h4' textAlign={"center"}>So, ready to embark on a culinary adventure? Download Eat Easy today and let the feast begin!</Typography>

<Typography variant='h4' textAlign={"center"}>Stay tuned for exciting updates and new features coming soon! We're always working to make your Eat Easy experience even better.</Typography> 
    </Box>
    </Grow>
    </>
  )
}

export default About