import React from 'react'
import { Grid, Box, Typography, Button ,useMediaQuery,useTheme} from '@mui/material';
import paleImage from '../../assets/images/pale-851.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const LastContent = () => {
  const [t,i18next]=useTranslation()
  const theme=useTheme()
  const isDarkMode = theme.palette.mode === 'dark';
  const backGround=isDarkMode?'#000000':'#FFFFFF';
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try{
      const response=await fetch('https://backendsec3.trainees-mad-s.com/api/logout',{
        method:"GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // توكن التصريح
        },
      })
      if(response.ok){
        localStorage.removeItem('token')
        navigate('/login')
      }
      else {
        console.error('Logout failed');
      }
    }catch(error){
      console.error('Error during logout:', error);
    }
  }
  return (
    <div>
        <Grid container style={{ minHeight: '41.2vh', width: "100%", }}>
      {/* Left Section */}
      <Grid item xs={12} md={5} style={{ backgroundColor: backGround, minHeight: '39vh', position: "relative" }}>
        <Box component={'img'} src={paleImage} style={{
          position: "absolute",
          bottom: "0",
          width: "300px"
        }} />
        
        {!isSmallScreen && (
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: "50px",
          
          }}>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              {t('name')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
            {t('country')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
            {t('email')}
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
            {t('phone-number')}
            </Typography>
          </Box>
        )}
      </Grid>


      <Grid item xs={12} md={7} style={{ backgroundColor: '#031C1D', position: "relative", minHeight: '39vh', color: "#fff" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isSmallScreen ? "flex-start" : "flex-start", 
          margin: "50px",
        }}>
          {!isSmallScreen ? (
            <>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('ameer')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('aleppo')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('ameer-email')}
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                {t('phone-ameer')}
              </Typography>
            </>
          ) : (
            <>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('name')}
              </Typography>
              {/* <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('ameer')}
              </Typography> */}
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
              {t('country')}
              </Typography>
              {/* <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('aleppo')}
              </Typography> */}
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
              {t('email')}
              </Typography>
              {/* <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('ameer-email')}
              </Typography> */}
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
              {t('phone-number')}
              </Typography>
              {/* <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
              {t('phone-ameer')}
              </Typography> */}
            </>
          )}
        </Box>
        <Box sx={{
          position: "absolute",
          right: "0",
          bottom: "0"
        }}>
          <Button 
          onClick={handleLogout} variant='contained' sx={{
            color: "#fff",
            backgroundColor: "red",
            border: "2px solid #fff",
            margin: "10px",
          }}>
            {t('logout')}
          </Button>
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}

export default LastContent
