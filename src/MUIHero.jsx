import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';
import MUICard from './MUICard';
import Image from './assets/hero_img.jpg';
import Title from './Title';
export default function MUIHero() {
  return (
   
     
        <Box className='d-flex justify-content-center align-items-center  m-auto mb-5'  sx={{backgroundImage:`url(${Image})`,  height: '100vh' ,width:'100',marginBottom:'20px' }} >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 for 50%)
          zIndex: 0,
        }}
      />
    <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          padding: '20px',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: '1.5' }}>
          I'm James Anderson <br />
          A Front-end Developer
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: '1.5' }}>
          A Front-end <span style={{ color:"#96bb7c" }}>Developer</span> 
        </Typography>
        
      </Box>
    
            </Box>
  );
}
