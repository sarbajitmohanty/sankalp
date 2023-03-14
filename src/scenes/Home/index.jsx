import { Box, Typography, useMediaQuery } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { ReactComponent as Banner } from "assets/web/banner.svg";
import Sankalp from "assets/web/sankalp.png";

const Home = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      m="1.5rem 2.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      // height="100vh"
      alignItems="center"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Box
        component="img"
        sx={{
          width: isNonMobile ? 470 : 300,
        }}
        src={Sankalp}
      />
      <Typography
        variant="h3"
        padding="2rem"
        style={{
          textAlign: isNonMobile ? "justify" : "center",
          textJustify: "inter-word",
        }}
      >
        30th March - 31st March 2023
      </Typography>
      {/* <div style={{ width: "100px", height: "400px" }}></div>
      <div style={{ width: "100px", height: "400px" }}></div>
      <div style={{ width: "100px", height: "400px" }}></div> */}
    </Box>
  );
};

export default Home;
