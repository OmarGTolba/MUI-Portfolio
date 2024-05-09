import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MUIAppBar from './MUIAppBar'
import MUICard from './MUICard'
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIHero from './MUIHero'
import { Box, Typography } from '@mui/material'
import Title from './Title'
import MUIMasony from './MUIMasony'
import MUIContact from './MUIContact'
import MUIBio from './MUIBio'
import MUIFooter from './MUIFooter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<MUIAppBar></MUIAppBar>
<div className="w-100"  >
<MUIHero></MUIHero>


<Typography variant="h2" sx={{display:'flex', justifyContent:'center', margin:'50px'}} color="inherit" component="div">
My Bio
     </Typography>
<MUIBio></MUIBio>

<Typography variant="h2" sx={{display:'flex', justifyContent:'center', margin:'50px'}} color="inherit" component="div">
My Portfolio
     </Typography>

<MUIMasony></MUIMasony>



<Typography variant="h2" sx={{display:'flex', justifyContent:'center'}} color="inherit" component="div">
     Services

     </Typography>
<Box className='container d-flex justify-content-center align-items-center m-5 mx-auto '  sx={{  width:'75%'}} >
         <MUICard></MUICard>
         <MUICard></MUICard>
         <MUICard></MUICard>
         </Box>

</div>

<Typography variant="h2" sx={{display:'flex', justifyContent:'center', margin:'50px'}} color="inherit" component="div">
Contact Me
     </Typography>

<MUIContact></MUIContact>
<MUIFooter></MUIFooter>
    </>
  )
}

export default App
