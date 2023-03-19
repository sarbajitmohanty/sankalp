import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import ProfileCard from "components/ProfileCard";
import SubHeading from "components/SubHeading";
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
      <SubHeading subtitle="Office Bearers" />
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
        <ProfileCard
          name="Sayed Imran"
          desg="President"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sritam"
          desg="Secretary"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Kajal"
          desg="Treasurer"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sarthak Prusty"
          desg="Coordinator"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
      </Box>
      <SubHeading subtitle="Core Team" />
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
        <ProfileCard
          name="Sayed Imran"
          desg="President"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sritam"
          desg="Secretary"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Kajal"
          desg="Treasurer"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sarthak Prusty"
          desg="Coordinator"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
      </Box>
      <SubHeading subtitle="Tech Team" />
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
        <ProfileCard
          name="Sayed Imran"
          desg="President"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sritam"
          desg="Secretary"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Kajal"
          desg="Treasurer"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sarthak Prusty"
          desg="Coordinator"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
      </Box>
      <SubHeading subtitle="Design Team" />
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
        <ProfileCard
          name="Sayed Imran"
          desg="President"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sritam"
          desg="Secretary"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Kajal"
          desg="Treasurer"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
        <ProfileCard
          name="Sarthak Prusty"
          desg="Coordinator"
          phone="+91 9876543267"
          image="https://drive.google.com/uc?export=view&id=1GfQ-rGXX0W0t8Gzn6trGBmuil0tl4vLU"
        />
      </Box>
    </Box>
  );
};

export default Team;
