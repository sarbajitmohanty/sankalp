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
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(5).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(8).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(9).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(10).jpeg"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(11).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(14).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(16).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(18).jpeg"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(21).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(22).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(23).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(30).jpeg"
          sx={{ boxShadow: 6 }}
        />

        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(35).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(37).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(43).jpeg"
          sx={{ boxShadow: 6 }}
        />
        <Box
          component="img"
          style={boxStyle}
          src="https://sankalpiste.s3.ap-south-1.amazonaws.com/10A+(44).jpeg"
          sx={{ boxShadow: 6 }}
        />
      </Box>
    </Box>
  );
};

export default GalleryUI;
