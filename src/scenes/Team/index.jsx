import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import ProfileCard from "components/ProfileCard";
import React from "react";

const Team = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      m="1.5rem 2.5rem"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Header title="Team" />

      <Box
        mt="20px"
        display="grid"
        alignSelf="center"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": {
            gridColumn: isNonMobile ? undefined : "span 4",
          },
        }}
      >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </Box>
    </Box>
  );
};

export default Team;
