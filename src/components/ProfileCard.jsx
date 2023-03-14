import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 320, "& .MuiCardContent-root": { padding: "10px" } }}>
      <CardMedia
        component="img"
        height="200"
        // image="/static/images/cards/paella.jpg"
        image="https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#55718b",
        }}
      >
        <Typography variant="h4" color="text.primary">
          KAJAL KUMARI JHA
        </Typography>
        <Typography variant="h5" color="text.secondary">
          +91 999988877
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
