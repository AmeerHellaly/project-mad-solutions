import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import backgroundImage from '../../../../../assets/images/Image2.png'
import logo from '../../../../../assets/images/logo.png'
import KeyIcon from '@mui/icons-material/Key';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const ConfirmPassword = () => {
    const [t,i18next]=useTranslation()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()
    const [message, setMessage] = useState('');
    const langDir=i18next.dir()
    const navigate=useNavigate()
    useEffect(() => {
      const updateDirection = () => {
        window.document.dir = i18next.dir();
      };
  
      updateDirection(); 
  
      i18next.on('languageChanged', updateDirection);
  
      return () => {
        i18next.off('languageChanged', updateDirection);
      };
    }, []);
    const handleConfirm=async()=>{
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        try{
            const formData = new FormData();
            formData.append('password', password);
            formData.append('password_confirmation', confirmPassword);
            const response = await fetch('https://backendsec3.trainees-mad-s.com/api/user/password/reset-password', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok && data.message === 'Password reset successfully.') {
                setMessage('Password reset successfully.');
                navigate('/profile')

            } else {
                setMessage(data.message || 'An error occurred');
            }
        }catch(error){
            console.error('Error:', error);
            setMessage('An error occurred while resetting the password.');
        }
    }
  return (
    <div>
        <AppBar>
      <Toolbar  sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#074143',
        }}>
      </Toolbar>
      </AppBar>

    {/* right section */}
    <Box
        sx={{
          display: 'flex',
          height: '100vh', 
          overflow: 'hidden', 
        }}
      >
    <Box 
        sx={{ 
          flex: 1, 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: {xs:'none',md:'flex'},
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Box sx={{
             width: '350px',
             height: '350px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius:'50%',
            position:'relative',
            zIndex:'2'
        }}>
        <Box component={'img'} src={logo} 
        sx={{
            width:'120px',
            height:'120px',
            mb:'10px' 
        }}/>
        <Typography sx={{
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:'18px',
        textAlign:'center',
        color:'#000',
        textTransform:'uppercase'
        }}>
        {t('construction')}
        </Typography>
         </Box>
    </Box>
        {/* left section */}
        <Box sx={{
            flex:1,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'2rem'

        }}>
            <Box sx={{width:'100%',maxWidth:'400px',textAlign:'center'}}>
                 
            
            <Typography sx={{
            fontFamily:'Lato',
            fontWeight:700,
            fontSize:'36px',
            textTransform:'uppercase',
            mb:2
            }}>{t('confirm-password')}</Typography>
        <TextField 
        label={t('password')}
        type='password'
        variant='outlined'
        fullWidth
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        sx={{mb:2}}
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            },
          }} 
         />
          <TextField 
        label='confirm-pasword'
        type='password'
        variant='outlined'
        fullWidth
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        sx={{mb:2}}
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            },
          }} 
         />
         <Typography sx={{
            fontFamily:'Inter',
            fontWeight:500,
            fontSize:langDir==='rtl'?'18px':'14px',
            textTransform:'uppercase',
            mb:2,
            lineHeight:'18.15px'
         }}>{t('digit-code')}</Typography>
         <Button onClick={handleConfirm}  variant='contained' fullWidth sx={{
            padding:'10px 0',
            borderRadius:'10px',
            border:'1px solid #121C17',
            backgroundColor: '#2BE784', 
            fontSize:'16px',
            color: '#000',
         }}>Change Password </Button>
          {message && <p>{message}</p>}
        </Box>
        </Box>
        </Box>
    </div>
  )
}

export default ConfirmPassword
