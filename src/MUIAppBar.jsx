import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Title from './Title';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function DenseAppBar() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100 // Change this value to the desired scroll position
  });
  return (
    <Box sx={{ flexGrow: 1, padding: '0px' }}>
      <AppBar position="fixed"  sx={{  padding: '20px', backgroundColor: scrolled ? '#333' : 'transparent'  }}>
        <Toolbar variant="dense" sx={{display:'flex', justifyContent:'space-between'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Title title='Home'></Title>
            <Title title='About'></Title>
            <Title title='Service'></Title>
            <Title title='Contact'></Title>
            <Title title='Portfolio'></Title>
          </Box>
          <Typography variant="h6" sx={{display:'flex', justifyContent:'center'}} color="inherit" component="div">
     
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
