import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg"
        title="Sin Ansiedad"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sin Ansiedad
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard