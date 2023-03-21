import { Box, useMediaQuery } from "@mui/material";
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
      <SubHeading subtitle="Office Bearers" width="15" />
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
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SAYED+IMRAN.jpg"
        />
        <ProfileCard
          name="Sritam Shraban Rath"
          desg="Secretary"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SRITAM+SHRABAN+RATH.jpg"
        />
        <ProfileCard
          name="Kajal Kumari"
          desg="Treasurer"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Kajal+Kumari.jpg"
        />
        <ProfileCard
          name="B Durga Madhab Prusty"
          desg="Coordinator"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/B.DURGA+PRUSTY.jpg"
        />
      </Box>
      <SubHeading subtitle="Core Team" width="15" />
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
          name="Priyanka Pratihari"
          desg="Event Head"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Priyanka+Pratihari.jpg"
        />
        <ProfileCard
          name="Sarthak Singh"
          desg="Event Head"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SARTHAK+SINGH.jpg"
        />

        <ProfileCard
          name="Pratyush Panigrahi"
          desg="Event Co-Ordinator’s Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/PRATYUSH+PANIGRAHI.jpg"
        />
        <ProfileCard
          name="Rahul Acharya"
          desg="Event Co-Ordinator’s Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/RAHUL+ACHARYA.jpg"
        />
        <ProfileCard
          name="Sthitaprajna Mishra"
          desg="Event Co-Ordinator’s Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/STHITAPRAJNA+MISHRA.jpg"
        />
        <ProfileCard
          name="Aditya Gupta"
          desg="Event Co-Ordinator’s Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Aditya+Gupta.jpg"
        />

        <ProfileCard
          name="A Suraj Kumar"
          desg="Photography & Video Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/A+SURAJ+KUMAR.jpg"
        />
        <ProfileCard
          name="Sujal Prasad"
          desg="Photography & Video Team"
          phone="+91 9876543267"
          image="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />

        <ProfileCard
          name="Sarbajit Mohanty"
          desg="Tech Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SARBAJIT+MOHANTY.jpg"
        />
        <ProfileCard
          name="V Roshan Kumar Patro"
          desg="Tech Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/V+KUMAR+PATRO.jpg"
        />
        <ProfileCard
          name="Rohit Raj Padhy"
          desg="Tech Team"
          phone="+91 9876543267"
          image="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />

        <ProfileCard
          name="Swaraj Sunil Mohaptro"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SWARAJ+MOHAPATRA.jpg"
        />
        <ProfileCard
          name="Resma Acharya"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Resma+Acharya.jpg"
        />
        <ProfileCard
          name="Suryanshu"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SURYANSHU+SURYANSHU.jpg"
        />
        <ProfileCard
          name="Jilludimudi Sriya"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/JILLUDIMUDI+SRIYA.jpg"
        />
        <ProfileCard
          name="Himanshu Kumar"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/HIMANSHU+KUMAR.jpg"
        />
        <ProfileCard
          name="Sonalika Nayak"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SONALIKA+NAYAK.jpg"
        />
        <ProfileCard
          name="Monalisa Mohapatra"
          desg="Financial Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Monalisha+Mohapatra.jpg"
        />

        <ProfileCard
          name="Surya Prakash Das"
          desg="Cultural Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SURYA+PRAKASH+DAS.jpg"
        />
        <ProfileCard
          name="V Kameswar Avinash"
          desg="Cultural Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/V+Kameswar+Avinash.jpg"
        />
        <ProfileCard
          name="K Kirti Kumari"
          desg="Cultural Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/K+Kirti+Kumari.jpg"
        />
        <ProfileCard
          name="Mangala Charan Panda"
          desg="Cultural Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Mangala+Charan+Panda.jpg"
        />

        <ProfileCard
          name="Vivek Vishal Mahato"
          desg="Design Team"
          phone="+91 9876543267"
          image="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
        <ProfileCard
          name="Mirza Amanul Haque Baig"
          desg="Design Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Mirza+Amanul+Haque+Baig.jpg"
        />
        <ProfileCard
          name="Hritvik Ranjan"
          desg="Design Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Hritvik+Ranjan.jpg"
        />

        <ProfileCard
          name="Shubham Kumar Sahu"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Shubham+Kumar+Sahu.jpg"
        />
        <ProfileCard
          name="Padala Yavanika"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Padala+Yavanika.jpg"
        />
        <ProfileCard
          name="V Somesh Kumar Raju"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/V+Somesh+Kumar+Raju.jpg"
        />
        <ProfileCard
          name="Madhusmita Mishra"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Madhusmita+Mishra.jpg"
        />
        <ProfileCard
          name="Chandra Prakash"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Chandra+Prakash.jpg"
        />
        <ProfileCard
          name="Pratyush Ranjan"
          desg="Hospitality & Travel"
          phone="+91 9876543267"
          image="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />

        <ProfileCard
          name="Omkar Sharma"
          desg="Food Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/OMKAR+SHARMA.jpg"
        />
        <ProfileCard
          name="Prabin Satapathy"
          desg="Food Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/PRABIN+SATAPATHY.jpg"
        />
        <ProfileCard
          name="Shashi Bhushan"
          desg="Food Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Shashi+Bhushan.jpg"
        />
        <ProfileCard
          name="Baka Naveen"
          desg="Food Team"
          phone="+91 9876543267"
          image="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />

        <ProfileCard
          name="Abhishek Mahanti"
          desg="Sponsor Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/ABHISHEK+MAHANTI.jpg"
        />
        <ProfileCard
          name="Sritam Roshan Panda"
          desg="Sponsor Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/SRITAM+PANDA.jpg"
        />
        <ProfileCard
          name="Pritesh Kumar Maharana"
          desg="Sponsor Team"
          phone="+91 9876543267"
          image="https://sankalpiste.s3.ap-south-1.amazonaws.com/Pritesh+Kumar+Maharana.jpg"
        />
      </Box>
    </Box>
  );
};

export default Team;
