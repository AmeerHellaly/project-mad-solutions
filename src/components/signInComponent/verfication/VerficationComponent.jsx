import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Button } from '@mui/material';
import Ellipse1 from '../../../assets/images/Ellipse7.png'
import Ellipse2 from '../../../assets/images/Ellipse8.png'
import MessageImage from '../../../assets/images/morphis-mail-with-a-frosted-glass-effect-11.png'

const VerficationComponent = () => {
  return (
    <>
    <AppBar position="static"  sx={{backgroundColor:'#074143'}}>
    <Toolbar>
     
    </Toolbar>
  </AppBar>
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        position: 'relative',
      }}
    >

      <Box sx={{ position: 'relative', width: '100%', height: '300px', mb: 4, maxWidth: '500px' }}>
        <Box
          component="img"
          src={Ellipse1}
          alt="icon1"
          sx={{
            width: '120px',
            height: '120px',
            position: 'absolute',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Box
          component="img"
          src={MessageImage}
          alt="icon2"
          sx={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex:1
          }}
        />
        <Box
          component="img"
          src={Ellipse2}
          alt="icon3"
          sx={{
            width: '150px',
            height: '150px',
            position: 'absolute',
            top: '20%',
            right: '25%',
            transform: 'translate(50%, -50%)',
          }}
        />
      </Box>
        <Typography variant="h3" sx={{fontWeight:700,fontFamily:'Inter'}}textAlign={'center'} gutterBottom>
          PLEASE VERIFY ACCOUNT
        </Typography>
        <Typography variant="body1" gutterBottom sx={{textTransform:'uppercase',textAlign:"center"}}>
          Enter the 6 digit code (contains letters and numbers) that we sent <br/> to your email address to verify your new account.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {[...Array(6)].map((_, index) => (
            <TextField
              key={index}
              variant="outlined"
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
              style={{ width: '40px', margin: '0 5px' }}
            />
          ))}
        </Box>
        <Typography variant="body2" sx={{fontWeight:700,fontFamily:'Inter',fontSize:'22px',mt: 2}} color="#121C17" >
          Valid for 3 minutes
        </Typography>
        <Button  sx={{mt:1,color:'#0E7E83'}}>Resend Code</Button>
        <Button sx={{ mt: 3,backgroundColor:'#2BE784',borderRadius:'10px',border:'1px solid #121C17',p:2,width:{xs:'70%',lg:'30%'} }}  variant="contained" color="#000"
        >
          VERIFY AND CONTINUE
        </Button>
   
    </Box>
</>
  );
};
export default VerficationComponent