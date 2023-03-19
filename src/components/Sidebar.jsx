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
import { ChevronLeft } from "@mui/icons-material";
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
          hideBackdrop="true"
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="temporary"
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
                <IconButton
                  size="large"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
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
                    primary={"GALLERY"}
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                      navigate("/gallery");
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
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
