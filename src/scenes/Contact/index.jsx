import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import React from "react";

const Contact = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      m="1.5rem 2.5rem"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Header title="CONTACT" />
    </Box>
  );
};

export default Contact;
