import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const EventCard = ({ name, image, club, link }) => {
  return (
    <Card
      sx={{
        // minWidth: 320,
        maxWidth: 370,
        "& .MuiCardContent-root": { padding: "10px 10px 0 15px" },
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="300"
        image={image}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Event: {name}
        </Typography>
        <Typography variant="body1" component="div" color="text.secondary">
          Club: {club}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingTop: 0 }}>
        <Button size="medium">
          <a href={link} target="blank" style={{ textDecoration: "none" }}>
            Register
          </a>
          {/* Register */}
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
