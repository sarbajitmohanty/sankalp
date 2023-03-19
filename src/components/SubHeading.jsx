import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeading = ({ subtitle }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h2"
          style={{ color: "#55718b", fontWeight: "600" }}
        >
          {subtitle}
        </Typography>
      </Box>
      {/* <Box style={{ transform: "scale(0.5 ,0.5)", fill: "#c8ad2c" }}>
        <DecoDivider />
      </Box> */}
    </Box>
  );
};

export default SubHeading;
