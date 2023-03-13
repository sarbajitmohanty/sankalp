import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";

const Footer = () => {
  return (
    <Box
      p="20px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "absolute", bottom: "0" }}
    ></Box>
  );
};

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userId = useSelector((state) => state.global.userId);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isNonMobile={isNonMobile}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
