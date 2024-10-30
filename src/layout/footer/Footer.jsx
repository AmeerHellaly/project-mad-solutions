import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../../assets/images/logo.png";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Footer = () => {
  const [t]=useTranslation()
  const langDir=i18next.dir()
  return (
    <Box 
      sx={{
        width:"100%",
        background: "linear-gradient(180deg, #074143 0%, #031C1D 100%)",
        height: "auto", 
        padding: 3, 
        color:"#fff"
      }}
    >
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        justifyContent="space-between" 
        alignItems="flex-start" 
        sx={{ flexWrap: 'wrap', marginBottom: 2 }} 
      >
        <Box 
          display="flex" 
          alignItems="center" 
          flexDirection={{ xs: 'row', md: 'row' }} 
          sx={{ margin: 1 }}
        >
          <Box>
            <img src={logo} style={{ width: "50px" }} alt="Logo" />
          </Box>
          <Box sx={{ marginLeft: 1 }}>
            <Typography sx={{ fontSize:langDir==='rtl'?"24px":"18px", textTransform: "uppercase" }}>
              {t('construction')}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography sx={{ textTransform: "uppercase",fontSize:langDir==='rtl'?"20px":"14px" }}>
          {t('busniess-hour')}<br />
          {t('date')}<br />
          {t('saturady-date')}<br />
          {t('closed')}<br />
          </Typography>
        </Box>
        
        <Box sx={{ margin: 1,fontSize:langDir==='rtl'?"20px":"14px" }}>
          <Typography sx={{fontSize:langDir==='rtl'?"20px":"16px"}} >
          {t('quick-links')}
          </Typography>
          <ul>
            <li>{t('home')}</li>
            <li>{t('about-us')}</li>
            <li>{t('projects')}</li>
            <li>{t('contact-us')}</li>
          </ul>
        </Box>

        <Box sx={{ margin: 1 }}>
          <Typography sx={{fontSize:langDir==='rtl'?"20px":"14px"}} >
          {t('award')}
          </Typography>
          <ul>
            <li>{t('member')}</li>
            <li>{t('certified')}</li>
          </ul>
        </Box>
      </Box>
      <Box >

      </Box>

      <Box sx={{ textAlign: 'center', padding: 1 }}>
        <Typography variant="body2" sx={{ fontSize:langDir==='rtl'?"18px":"14px"}}>
          © {new Date().getFullYear()}  {t('right-revered')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;
