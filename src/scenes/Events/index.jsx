import { Box, Typography, useMediaQuery } from "@mui/material";
import EventCard from "components/EventCard";
import Header from "components/Header";
import React from "react";

const Events = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      m="1.5rem 2.5rem"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Header title="EVENTS" />
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
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Box>
    </Box>
  );
};

export default Events;
