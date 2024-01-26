import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BaseUrl from "../../../Api/BaseUrl";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const AccountSection = () => {
  let userid = localStorage.getItem("userid");
  let navigate = useNavigate();
  let [userData, setUserData] = useState([]);
  let [errormsg, setErrormsg] = useState("");
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`${BaseUrl}/users/${userid}`);
        let data = response.data;
        setUserData(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
    };
    fetchData();
  }, [userid, userData]);
  let deleteAccountHandler = async ()=>{
      try {
        let response = await axios.delete(`${BaseUrl}/users/${userid}/delete-user`);
        let data = response.data;
        localStorage.clear();
        navigate("/");
        setTimeout(()=>{
          toast.success(data.message);
        },1000)
      } catch (error) {
        toast.error(errormsg);
      }
  }
  return (
    <>
      {localStorage.length === 0 ? (
        (window.location.href = "/user/signin")
      ) : (
        <>
          {userData.length === 0 ? (
            <>
              <div className="loader"></div>
            </>
          ) : (
            <>
              <Grow in>
                <Box textAlign={"center"}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      background: "#D80032",
                      color: "white",
                      m: "150px 20px",
                      p: "2%",
                      textAlign: "center",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h6">{`Your Name : ${userData.user.username}`}</Typography>
                        <Typography variant="h6">{`Your E-mail: ${userData.user.usermail}`}</Typography>
                        <Typography variant="h6">
                          Your password : -------
                        </Typography>
                        <Typography variant="h6">{`Your Address : ${userData.user.useraddress}`}</Typography>
                        <Typography variant="h6">{`Your Phone Number : ${userData.user.userphno}`}</Typography>
                      </CardContent>
                    </CardActionArea>

                    <Button
                      LinkComponent={NavLink}
                      to="/user/user-update"
                      color="inherit"
                      variant="contained"
                      sx={{ backgroundColor: "#F78CA2", color: "black" }}
                      fullWidth
                    >
                      Update Account
                    </Button>
                  </Card>
                  <Button
                    color="error"
                    variant="contained"
                    sx={{ backgroundColor: "red", color: "white" }}
                    onClick={deleteAccountHandler}
                  >
                    Delete Account
                  </Button>
                  <Toaster />
                </Box>
              </Grow>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AccountSection;
