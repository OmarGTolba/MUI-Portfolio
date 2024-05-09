import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TvIcon from '@mui/icons-material/Tv';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MUICard() {
  return (
    <Card sx={{ border:'.5px solid #ccc', minWidth: "35%", height:'40vh',display:'flex', alignItems:'center',textAlign:'center', margin:'10px ',padding:'20x' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <TvIcon sx={{fontSize: '50px', margin:'20px' }} style={{ color:"#96bb7c" }}/>
         <h3 sx={{ margin:'20px' }}>Design</h3>
        </Typography>
      
        <Typography sx={{ margin:'25px' }} color="text.secondary">
          adjective
          Far far away, behind the word mountains, 
        far from the countries Vokalia and Consonantia
        , there live the blind texts.
        
        </Typography>
        <Typography variant="body2">
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
  
      </CardActions>
    </Card>
  );
}
