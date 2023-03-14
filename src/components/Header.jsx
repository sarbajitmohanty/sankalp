import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as DecoDivider } from "assets/web/divider.svg";

const Header = ({ title }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" style={{ color: "#55718b" }}>
          {title}
        </Typography>
      </Box>
      <Box style={{ transform: "scale(0.5 ,0.5)", fill: "#c8ad2c" }}>
        <DecoDivider />
      </Box>
    </Box>
  );
};

export default Header;
