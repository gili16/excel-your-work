import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

export default function CardRound(props: { image: any, title: string, text: string, url: string }) {
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    navigate(`/project/${props.url}`);
  }

  return (
    <Card sx={{
      backgroundColor: 'transparent',  // Make the card background transparent
      boxShadow: 'none',               // Remove the shadow
      padding: 0,                      // Remove any internal padding for the card
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <CardMedia
        sx={{
          width: 180, // Increased image width
          height: 180, // Increased image height
          borderRadius: '50%', // Keep the image circular
          objectFit: 'cover',   // Ensures the image fits well within the circle
          marginBottom: 2, // Space between the image and the content
          border: '5px solid forestgreen',
        }}
        image={props.image}
        title={props.title}
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 2
      }}>
        <Button size="small" sx={{color:"forestgreen"}} onClick={onClickHandler}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
