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
      <Header title="Events" />
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
          marginBottom: "2rem",
        }}
      >
        <EventCard
          name="Code One"
          club="Club Excel"
          image="https://drive.google.com/uc?export=view&id=1VvQ5Ga5Olc5CYGqOer7jKj0jSqud_M2E"
          link="https://google.com"
        />
        <EventCard
          name="Code One"
          club="Club Excel"
          image="https://drive.google.com/uc?export=view&id=1IHCp8c8mUUuc3uvF-ZxR4V2EHlU08jMo"
          link="https://google.com"
        />
        <EventCard name="Drishyam" club="NCS" link="https://google.com" />
        <EventCard name="NETRA" club="Club Excel" link="https://google.com" />

        <EventCard
          name="Code One"
          club="Club Excel"
          link="https://google.com"
        />
      </Box>
    </Box>
  );
};

export default Events;
