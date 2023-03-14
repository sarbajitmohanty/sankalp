import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import React from "react";

const About = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      m="1.5rem 2.5rem"
      style={{ padding: isNonMobile ? "0 4rem 0 4rem" : "0 0rem 0 0rem" }}
    >
      <Header title="ABOUT" />

      <Typography
        variant="h3"
        padding="2rem"
        style={{
          textAlign: isNonMobile ? "justify" : "center",
          textJustify: "inter-word",
        }}
      >
        Established in 1996, NIST has built its grandeur in Southern Odisha
        claiming excellency in a disciplined form of education destined to
        create smart technocrats. Every year the celebrates the conglomeration
        of scientific thinking and innovation in the form of its
        Techno-Management fest Sankalp.
      </Typography>
      <Typography
        variant="h3"
        padding="2rem"
        style={{
          textAlign: isNonMobile ? "justify" : "center",
          textJustify: "inter-word",
        }}
      >
        SANKALP is a national-level techno-management symposium organized by the
        NIST Institute of Science and Technology, Berhampur, with an aim to
        nurture the technical expertise and skills among youngsters. The two-day
        event provides a unique platform to showcase their talents fuelling
        their innovations in all myriad forms so that they can defy the odds to
        achieve the pinnacle of fame and glory. Two days of extravaganza
        presents a plethora of events including Robotics, Web Designing,
        Quizzes, Coding, Paper Presentation and many more. This enthralling
        techno-fiesta gives a chance to students to explore and conquer the vast
        realm of new horizon, redefining the meaning of success itself.
      </Typography>
      <Typography
        variant="h3"
        padding="2rem"
        style={{
          textAlign: isNonMobile ? "justify" : "center",
          textJustify: "inter-word",
        }}
      >
        In association with ISTE Students Chapter, Sankalp has been bringing
        together technocrats from various colleges since the year 2003. Sankalp
        is a promising event with motivating orations, interesting workshops,
        innovative technologies, cut-throat competitions and breathtaking
        performances for its audience.
      </Typography>
      <Typography
        variant="h3"
        padding="2rem"
        style={{
          textAlign: isNonMobile ? "justify" : "center",
          textJustify: "inter-word",
        }}
      >
        There’s an event for everyone where they can exercise their skills and
        grab exciting cash prizes. Briefly concluded, it is an enthralling
        all-round experience and an exhilarating escape from a robust life- a
        catch for everyone.
      </Typography>
    </Box>
  );
};

export default About;
