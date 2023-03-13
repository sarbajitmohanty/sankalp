import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { SettingsOutlined, ChevronLeft } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box component="drawer">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="right"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.primary[500],
              backgroundColor: theme.palette.grey[100],
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box
              m="0.5rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FlexBetween color={theme.palette.primary.main}>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              </FlexBetween>
            </Box>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"HOME"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/");
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItemButton>
                <ListItemText
                  primary={"ABOUT"}
                  onClick={() => {
                    setIsSidebarOpen(!isSidebarOpen);
                    navigate("/about");
                  }}
                />
              </ListItemButton>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"SPONSERS"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/sponsers");
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"EVENTS"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/events");
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"TEAM"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/team");
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={"CONTACT"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/contact");
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <Box position="absolute" bottom="-11rem">
            <Divider />
            <FlexBetween
              textTransform="none"
              gap="1rem"
              m="1.5rem 2rem 2rem 3rem"
            >
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
