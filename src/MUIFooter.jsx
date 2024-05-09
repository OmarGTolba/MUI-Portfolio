import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react'
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MUIBox from './MUIBox';
export default function MUIFooter() {
  return (
   
    <>
<Box textAlign={'center'} sx={{ color:'rgb(150, 187, 124)',fontSize:'20px', width: '100%', height: '50vh', bgcolor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Grid container spacing={3} marginX={'auto'} justifyContent="center">
        <Grid textAlign={'center'} item xs={12} sm={4} >
            <div>
                <p>Section 1</p>
                <p>Some text goes here.</p>
                <p>Some text goes here.</p>
                <p>Some text goes here.</p>
            </div>
        </Grid>
        <Grid  item xs={12} sm={4}>
            <div>
                <p>Section 2</p>
                <p>Some text goes here.</p>
 
                <p>Some text goes here.</p>
                <p>Some text goes here.</p>
            </div>
        </Grid>
        <Grid textAlign={'center'} item xs={12} sm={4}>
            <div>
                <p>Section 3</p>
                <p>
                    <Link href="https://www.facebook.com">
                        <FacebookIcon sx={{ fontSize: 40, color: 'white', bgcolor: 'rgb(150, 187, 124);', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
                    </Link>
                    <Link href="https://www.linkedin.com">
                        <LinkedInIcon sx={{ fontSize: 40, color: 'white', bgcolor: 'rgb(150, 187, 124);', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
                    </Link>
                    <Link href="https://wa.me/">
                        <WhatsAppIcon sx={{ fontSize: 40, color: 'white', bgcolor: 'rgb(150, 187, 124);', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
                    </Link>
                    <Link href="https://www.instagram.com">
                        <InstagramIcon sx={{ fontSize: 40, color: 'white', bgcolor: 'rgb(150, 187, 124);', borderRadius: '50%', padding: '5px', margin: '5px', '&:hover': { bgcolor: '#ccc' } }} />
                    </Link>
                </p>
            </div>
        </Grid>
    </Grid>
</Box>

    </>
  )
}
