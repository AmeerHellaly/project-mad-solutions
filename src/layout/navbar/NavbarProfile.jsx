import React, { useEffect, useTransition } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoImage from '../../assets/images/logo.png';
import {  Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTranslation } from 'react-i18next';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from '@mui/material/styles';

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

const NavbarProfile = ({setMyMode,position}) => {

  const toggleMode = () => {
    setMyMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useTheme()
  const [t,i18next]=useTranslation()
  const langDir = i18next.dir();
  const changeLanguage=(language)=>{
    i18next.changeLanguage(language)
    localStorage.setItem('language',language)
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('lg')); // Check if the screen is medium or small

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  

  
    const mobileMenuId = 'primary-search-account-menu-mobile';
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
    const renderMobileMenu = (
      <div>
   
      
      <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      PaperProps={{
        sx: {
          padding: '16px',
          textTransform: "uppercase",
        },
      }}
    >
            <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t('menu')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <IconButton onClick={handleMenuClose}>
          <CloseIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>
      <Link style={{textDecoration:'none',color:'#000'}} to={'/landscaping'}>
      <MenuItem onClick={handleMenuClose}>{t('land-scaping')}</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>{t('decking')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('gardening')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('inter-locking')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('floral')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('pools')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('ralings')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('wood')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('show-room')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('profile')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t('contact-us')}</MenuItem>

      {isSmallScreen && (
        <>
          <MenuItem onClick={handleMenuClose}>{t('home')}</MenuItem>
          <MenuItem onClick={handleMenuClose}>{t('about')}</MenuItem>
          <MenuItem onClick={handleMenuClose}>{t('projects')}</MenuItem>
        </>
      )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary  expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
              <Typography>{t('langugaes')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Button onClick={()=>changeLanguage('en')}>English</Button><br/>
              <Button onClick={()=>changeLanguage('ar')}>Arabic</Button><br/>
              <Button onClick={()=>changeLanguage('ge')}>Germany</Button><br/>
              <Button onClick={()=>changeLanguage('fr')}>France</Button><br/>
              <Button onClick={()=>changeLanguage('ru')}>Russia</Button>
          
          </AccordionDetails>
      </Accordion>
          <MenuItem>
                D/L Mode
                <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 2 }}>
                  {theme.palette.mode === 'dark' ? <WbSunnyIcon sx={{color:"yellow"}}/> : <DarkModeIcon />}
                </IconButton>
              </MenuItem>
      {/* Close Button inside the menu */}

    </Menu>
    </div>
    );
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#0E7E83" ,position:position||"fixed"}} >
        <Toolbar>
        <Box
            component="img"
            src={LogoImage}
            alt="logo"
            sx={{ width: '50px', height: '50px', marginBottom: '5px' }}
          />
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ display: { xs: 'none',md:'block' },textTransform:'uppercase',}}
          >
          {t('construction')}
          </Typography>
          <Box sx={{ flexGrow: 1,ml:'10px' }}/>
          <Box sx={{display:{xs:'none',lg:'flex'},alignItems:'center',justifyContent:'space-between',gap:'4'}}>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>{t('home')}</Button>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>{t('about')}</Button>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>{t('projects')}</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
           
          <Search >
            <SearchIconWrapper langDir={langDir}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              langDir={langDir}
              placeholder={t('search')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <IconButton color='inherit'
            size="large"
            aria-label="menu"
            onClick={handleMenuClick }
            aria-haspopup="true"
            aria-controls={mobileMenuId} >
              <MenuIcon />
            </IconButton>
            <Typography sx={{fontWeight:700,fontFamily:'Inter',fontSize:'18px',ml:'7px'}}>{t('menu')}</Typography>
            <Button variant='contained' sx={{backgroundColor:'#59ED9F',display: { xs: 'none', sm: 'none', lg: 'block' } ,ml:'10px',color:'#000',borderRadius:'10px',border:'3px solid #fff',fontWeight:700}}>{t('book-now')}</Button>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}

    </Box>
    </div>
  )
}

export default NavbarProfile
