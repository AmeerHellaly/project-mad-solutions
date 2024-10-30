import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image4 from '../../../assets/images/Image4.png'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
const LandPageContent = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme, langDir }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: langDir === 'rtl' ? 'flex-end' : 'flex-start', 
    right: langDir === 'rtl' ? 'unset' : 0,
    left: langDir === 'rtl' ? 0 : 'unset',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme, langDir }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: langDir === 'rtl' ? theme.spacing(1) : `calc(1em + ${theme.spacing(4)})`, // التبديل حسب الاتجاه
      paddingRight: langDir === 'rtl' ? `calc(1em + ${theme.spacing(4)})` : theme.spacing(1),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const [t,i18next]=useTranslation()  
  const langDir=i18next.dir()
  return (
    <Grid item 
        xs={12} 
        style={{
            position:'relative',
            backgroundImage:`url(${Image4})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'100vh',
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
    }}>
        <Box 
            sx={{
                position:'absolute',
                opacity:'0.5',
                top:0,
                left:0,
                backgroundColor:'#121C17',
                width:'100%',
                height:'100%',
                zIndex:1
            }}
        />
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            textAlign:'center',
            zIndex:2,
            position:'relative'
        }}>
                <Typography component={'p'} 
                sx={{
                color:'#fff',
                textTransform:'uppercase',
                fontSize:'2rem',
                fontWeight:'bold',
                fontFamily:'Lato',
                mb:2}}>
            {t('land-content1')}<br/>
            {t('land-content2')}
                </Typography>
                 
          <Search  sx={{display:'flex',alignItems:'center',width:'250px',borderRadius:'5px'  }} >
            <SearchIconWrapper  langDir={langDir}>
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              langDir={langDir}
              placeholder={t('search')}
              color='#fff'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
    </Grid>
  )
}

export default LandPageContent
