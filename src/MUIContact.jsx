import { Box, Button, TextField, Typography } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react'
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function MUIContact() {
  return (

    <Box sx={{display:"flex", width:"75%", margin:"100px auto", alignItems:'space-between'}} 
    InputLabelProps={{ style: { color: 'black' } }}>
<Box sx={{width:"65%"}}>

<Box>    
<TextField
    id="standard-basic"
    label="Standard"
    variant="standard"
    sx={{
        margin: '17px',
        color: 'black',
        width: '35%',
        '& .MuiInput-underline:after': {
            borderBottomColor:  'rgb(150, 187, 124)',
            color: 'rgb(150, 187, 124)'
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor:  'rgb(150, 187, 124)',
            
            }
        },
    }}
    InputLabelProps={{ style: { color: 'black' } }}
/><TextField id="standard-basic" label="Standard" variant="standard" sx={{margin:'17px', width:'35%','& .MuiInput-underline:after': {
            borderBottomColor:  'rgb(150, 187, 124)',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor:  'rgb(150, 187, 124)',
            }
        },}} 
        InputLabelProps={{ style: { color: 'black' } }} />
</Box>
<Box>    
<TextField id="standard-basic" label="Standard" variant="standard" 
    InputLabelProps={{ style: { color: 'black' } }} sx={{margin:'15px' , width:'75%','& .MuiInput-underline:after': {
            borderBottomColor:  'rgb(150, 187, 124)',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor:  'rgb(150, 187, 124)',
            }
        },}} />
</Box>
<Box>    
<TextField
    id="standard-basic"
    label="Standard"
    variant="standard"
    multiline
    rows={4} // Adjust the number of rows as needed
    sx={{
        margin: '17px',
        color: 'black',
        width: '75%',
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(150, 187, 124)', // Change underline color after focus or click
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white', // Default border color
            },
            '&:hover fieldset': {
                borderColor: 'white', 
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(150, 187, 124)',
            },
        },
    }}
    InputLabelProps={{ style: { color: 'black' } }}
/>

</Box>
<Button variant="contained" sx={{backgroundColor:'rgb(150, 187, 124);' ,margin:'15px','&:hover': {
        backgroundColor: '#6c757d', 
    }}}>Contained</Button>
</Box>


<Box sx={{margin:'17px', width:'40%', }}>
<Typography variant="h4" sx={{textAlign:'left', margin:' 0 20px 30px 20px '}}>
Contact info
    </Typography>
    <Typography variant="h6" sx={{textAlign:'start', margin:'20px' ,color:'rgb(150, 187, 124);'}}>
<LocalPhoneIcon/> 01060702328
    </Typography>
    <Typography variant="" sx={{textAlign:'left', margin:'20px', fontSize:'16px', color:'rgb(150, 187, 124);'}}>
      <PinDropIcon/> 43 Raymouth Rd. Baltemoer, London 3910
    </Typography>
    <Typography variant="h6" sx={{textAlign:'left', margin:'20px',color:'rgb(150, 187, 124);'}}>
<AcUnitIcon/> ttt
    </Typography>
    
    <Typography variant="h6" sx={{textAlign:'left', margin:'20px',color:'rgb(150, 187, 124);'}}>
<EmailIcon/> omar.739.tolba@gmail.com
    </Typography>
    

    <Typography variant="h6" sx={{textAlign:'left', margin:'20px',color:'rgb(150, 187, 124);'}}>
<EmailIcon/> omar.739.tolba@gmail.com
    </Typography>

    </Box>
    </Box>

)
}
