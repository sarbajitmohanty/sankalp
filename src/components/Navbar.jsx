import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "assets/web/banner.png";

const Navbar = ({ isNonMobile, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const btnSx = { color: theme.palette.primary[500], fontSize: "1rem" };
  return (
    <AppBar
      //   color="transparent"
      //   elevation={0}
      sx={{
        position: "sticky",
        background: "transparent",
        boxShadow: "none",
        // backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          {/* {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          )} */}
          <FlexBetween p="0.1rem 0.5rem">
            {/* <Typography variant="h4" sx={{ color: theme.palette.primary[500] }}>
              SANKALP 2023
            </Typography> */}
            <Box
              component="img"
              src={Banner}
              width="100px"
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            />
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        {isNonMobile && (
          <FlexBetween gap="1.5rem">
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/");
              }}
              sx={btnSx}
            >
              HOME
            </ButtonBase>
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/about");
              }}
              sx={btnSx}
            >
              ABOUT
            </ButtonBase>
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/sponsers");
              }}
              sx={btnSx}
            >
              SPONSERS
            </ButtonBase>
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/events");
              }}
              sx={{
                color: theme.palette.primary[500],
                fontSize: "1rem",
              }}
            >
              EVENTS
            </ButtonBase>
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/team");
              }}
              sx={btnSx}
            >
              TEAM
            </ButtonBase>
            <ButtonBase
              disableRipple
              variant="text"
              size="large"
              onClick={() => {
                navigate("/contact");
              }}
              sx={btnSx}
            >
              CONTACT
            </ButtonBase>
          </FlexBetween>
        )}
        {!isNonMobile && (
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
