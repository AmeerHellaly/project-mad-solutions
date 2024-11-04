import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Avatar, InputAdornment, AppBar, Toolbar, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LogoImage from '../../assets/images/logo.png'; 
import BackgroundImage from '../../assets/images/Image3.png';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const [t,i18next]=useTranslation()

  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [resetPasswprd,setResetPassword]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [city,setCity]=useState('')
  const [country,setCountry]=useState('')
  
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

  const handleSignPage=async()=>{
    if (!userName || !email || !password || !phoneNumber || !city || !country) {
      alert(t('please-fill-all-fields'));
      return;
  }
  try{
    const formData=new FormData()
    formData.append('full_name', userName);
    formData.append('phone', phoneNumber);
    formData.append('address', '123 Main St');
    formData.append('governorate', country);
    formData.append('city', city);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', ''); // مسار الصورة إذا كان موجوداً
 const response = await fetch('https://backendsec3.trainees-mad-s.com/api/register', {
        method: 'POST',
        body: formData
      });

    const data=await response.json()
    if(response.ok){
      alert(data.message)
      navigate('/verfication',{state:{email}})
    }else{
      
        alert(data.message || t('error-occurred'));
    }
  }catch(error){
    console.error('Error:', error);
    // alert(t('error-occurred'));
  }
  }

  return (
    <>
      <AppBar position='static' sx={{backgroundColor:'#074143'}}>
      <Toolbar  >
      </Toolbar>
      </AppBar>
    <Box sx={{ display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: 'calc(100vh - 64px)', 
         overflowY: 'auto', 
       }}>
      <Box
        sx={{
          flex: 1,
          display:{xs:'none',md:'flex'},
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          
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
        <Box component={'img'} src={LogoImage} 
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
      
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '2rem', md: '4rem' },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: '700', fontSize: { xs: '24px', md: '36px' }}}
        >
          {t('sign-up')}
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '18px'}}>
        {t('profile-picture')}
        </Typography>

        <Box sx={{ position: 'relative', mb: 4 }}>
            <Avatar sx={{ width: 100, height: 100 }} />
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#2BE784',
                boxShadow: 1,
              }}
            >
              <AddBoxOutlinedIcon sx={{color:"#fff"}} />
            </IconButton>
          </Box>
        <TextField
          label={t('email')}
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          sx={{ marginBottom: '1rem' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            },
          }} 
        />

        <TextField
          label={t('phone-number')}
          variant="outlined"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          fullWidth
          sx={{ marginBottom: '1rem' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            },
          }} 
        />

        <TextField
          label={t('user-name')}
          variant="outlined"
          fullWidth
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          sx={{ marginBottom: '1rem' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }} 
        />

        <TextField
          label={t('password')}
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          sx={{ marginBottom: '1rem' }}
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
          label={t('re-password')}
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '1.5rem' }}
          value={resetPasswprd}
          onChange={(e)=>setResetPassword(e.target.value)}
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
        <Box sx={{display: {xs:'block',md:'flex'} ,justifyContent:'center',alignItems:'center'}}>
        <FormControl  sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id='country'>{t('country')}</InputLabel>
            <Select value={country} onChange={(e)=>setCountry(e.target.value)}  label="Country">
              <MenuItem value={'country1'}>Example Governorate</MenuItem>
              <MenuItem value={'country2'}>Example Governorate1</MenuItem>
              <MenuItem value={'country3'}>Example Governorate2</MenuItem>
            </Select>
        </FormControl>
        <FormControl    ol  sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id='city'>{t('city')}</InputLabel>
            <Select  labelId='city' value={city} onChange={(e)=>setCity(e.target.value)}  label="City">
            <MenuItem value={'city1'}>Example City</MenuItem>
            <MenuItem value={'city2'}>Example City1</MenuItem>
            <MenuItem value={'city3'}>Example City2</MenuItem>
            </Select>
        </FormControl>
        </Box>

        <Button 
          onClick={handleSignPage}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#2BE784',
            color: '#000',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            marginTop:'2rem',
            maxWidth: '400px',
            borderRadius:'10px',
            border:'1px solid #121C17'
          }}
        >
         {t('create-account')}
        </Button>
     

        
      </Box>
    </Box>
    </>
  );
};

export default SignUpPage;
