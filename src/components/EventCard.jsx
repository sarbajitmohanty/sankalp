import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const EventCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        "& .MuiCardContent-root": { padding: "10px 10px 0 15px" },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Lizard
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="medium">Register</Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
