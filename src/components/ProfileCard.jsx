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

const ProfileCard = ({ name, desg, image, phone }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 320, "& .MuiCardContent-root": { padding: "10px" } }}>
      <CardMedia
        component="img"
        height="300"
        // image="/static/images/cards/paella.jpg"
        image={image}
        alt={name}
        style={{ objectFit: "cover" }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#55718b",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {desg}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontFamily: "Eczar, serif" }}
        >
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
