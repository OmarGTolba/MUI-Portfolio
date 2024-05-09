import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from './assets/image_1_long.jpg';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(150, 187, 124)' : '#308fe8',
  },
}));
export default function MUIBio() {
  return (
    
    <>
    
    
    <Box sx={{display:'flex', width:'75%', margin:'auto'}}>
        <Box >
            <img src={Image} style={{width:'600px' , height:'700px'}} alt="" />
        </Box>
        <Box style={{margin:'20px'}}>
        <Typography variant="h3" sx={{  lineHeight: '1.5' }}>
       My Contact
        </Typography>
        <Typography variant="" sx={{  lineHeight: '1.5' , fontSize:'16px'}}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </Typography>



        <Typography variant="h6" sx={{  lineHeight: '.5', margin:'25px 0' }}>
        <h5>React</h5>
        <BorderLinearProgress variant="determinate" value={50} />
        </Typography>
        
        
        <Typography variant="h6" sx={{  lineHeight: '.5', margin:'25px 0' }}>
        <h5>Design</h5>
        <BorderLinearProgress variant="determinate" value={50} />
        </Typography>
        
        <Typography variant="h6" sx={{  lineHeight: '.5',margin:'25px 0' }}>
        <h5>Javascript</h5>
        <BorderLinearProgress variant="determinate" value={50} />
        </Typography>
        
        <Typography variant="h6" sx={{  lineHeight: '.5' ,margin:'25px 0'}}>
        <h5>Html</h5>
        <BorderLinearProgress variant="determinate" value={50} />
        </Typography>
       
        <Typography variant="h6" sx={{  lineHeight: '.5' ,margin:'25px 0'}}>
        <h5>Css</h5>
        <BorderLinearProgress variant="determinate" value={50} />
        </Typography>
       
       <Box>
       <Button variant="contained" sx={{
    backgroundColor: 'rgb(150, 187, 124)',
    margin: '15px 15px 15px 0',
    borderRadius: '25px',
    '&:hover': {
        backgroundColor: '#6c757d', // Change to the other color on hover
    }
}}>Contained</Button>

<Button variant="contained" sx={{
    backgroundColor: '#6c757d',
    margin: '15px 15px 15px 0',
    padding: '5px 35px',
    borderRadius: '25px',
    '&:hover': {
        backgroundColor: 'rgb(150, 187, 124)', // Change to the other color on hover
    }
}}>Contained</Button>

       </Box>

        </Box>
    </Box>
    </>
  )
}
