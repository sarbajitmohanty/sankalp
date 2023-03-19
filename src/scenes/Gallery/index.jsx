import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import { useState } from "react";

const boxStyle = {
  width: "100%",
  borderRadius: "10px",
  objectFit: "contain",
  dropShadow: ".5rem .5rem 1rem #e23",
  backgroundColor: "#eefaff",
};

const GalleryUI = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      m="1.5rem 2.5rem"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Header title="Gallery" />

      <Box
        mt="20px"
        display="grid"
        alignSelf="center"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        // justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > img": {
            gridColumn: isNonMobile ? undefined : "span 4",
          },
          marginBottom: "2rem",
        }}
      >
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1QBDZxNWhoTcTUR3UN7FTdtr4XVtHgAsE"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=19SO_f8meRFWSLRseZkHIWOKJRDP8ITek"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1V9Vn0DZdakr9P6zAmcUedJNY0ARs3Dq8"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1vPPj87q8hPuO_ycYGK7ZPzCVh1bv1cSZ"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1yUuuf1H3a4mvJZfeRewF3pIzWlQ6fAqv"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1jZpcvcWQ6eGYKkeHp5ZPyKjwBzjkLk1q"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=19nLxD-HKrQdVF86NKvKgQHmf-eBc-Hjf"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1h_1E11uf2E2cTddhj8WL-bRsV2l293ab"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1LlRXL6Rhamac8xD0ZglsFoG_e-E_V_6a"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=17r2Cq_jG3RvnCgKZXrRxThP58doujrSj"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1v-InMe3NJCFMg1XrquPJAdxIAtIRLnIl"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1TdOyG7-0EKkHxfnrjZTUEBK1vlah8b9K"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1Dir5s7d1cqyerb-c9QMmiN5fX4lrb9XR"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1XFtHNL90HWQMxyq37MvUph5gnXaYxIf8"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1P8v0PXuA3EbdCJopX0HzB4eH_q27WqJv"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://drive.google.com/uc?export=view&id=1BWMY62yyFsDqyhRKJbR33noO8RyQxU7s"
          sx={{ boxShadow: 6 }}
        />
      </Box>
    </Box>
  );
};

export default GalleryUI;
