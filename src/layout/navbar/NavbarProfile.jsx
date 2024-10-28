import React, { useTransition } from 'react'
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
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const NavbarProfile = ({setMyMode}) => {
  const toggleMode = () => {
    setMyMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useTheme()
  const [t,i18next]=useTranslation()
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
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <IconButton onClick={handleMenuClose}>
          <CloseIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>
      <Link style={{textDecoration:'none',color:'#000'}} to={'/landscaping'}>
      <MenuItem onClick={handleMenuClose}>landscaping</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>decking</MenuItem>
      <MenuItem onClick={handleMenuClose}>gardening</MenuItem>
      <MenuItem onClick={handleMenuClose}>interlocking</MenuItem>
      <MenuItem onClick={handleMenuClose}>floral design</MenuItem>
      <MenuItem onClick={handleMenuClose}>pools</MenuItem>
      <MenuItem onClick={handleMenuClose}>railings</MenuItem>
      <MenuItem onClick={handleMenuClose}>woodworking</MenuItem>
      <MenuItem onClick={handleMenuClose}>showroom</MenuItem>
      <MenuItem onClick={handleMenuClose}>profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>contact us</MenuItem>

      {isSmallScreen && (
        <>
          <MenuItem onClick={handleMenuClose}>home</MenuItem>
          <MenuItem onClick={handleMenuClose}>about us</MenuItem>
          <MenuItem onClick={handleMenuClose}>projects</MenuItem>
        </>
      )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary  expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
              <Typography>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Button onClick={()=>changeLanguage('en')}>English</Button><br/>
              <Button onClick={()=>changeLanguage('ar')}>Arabic</Button>
              <MenuItem>
                D/L Mode
                <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 2 }}>
                  {theme.palette.mode === 'dark' ? <WbSunnyIcon sx={{color:"yellow"}}/> : <DarkModeIcon />}
                </IconButton>
              </MenuItem>
          </AccordionDetails>
      </Accordion>
      {/* Close Button inside the menu */}

    </Menu>
    </div>
    );
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#0E7E83"}} position="static">
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
            The Construction and <br/> landscaping company
          </Typography>
          <Box sx={{ flexGrow: 1,ml:'10px' }}/>
          <Box sx={{display:{xs:'none',lg:'flex'},alignItems:'center',justifyContent:'space-between',gap:'4'}}>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>Home</Button>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>About</Button>
                <Button sx={{color:'#fff',fontSize:'16px',fontFamily:'Inter',fontWeight:700}}>Projects</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
           
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
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
            <Typography sx={{fontWeight:700,fontFamily:'Inter',fontSize:'18px'}}>Menu</Typography>
            <Button variant='contained' sx={{backgroundColor:'#59ED9F',display: { xs: 'none', sm: 'none', lg: 'block' } ,ml:'10px',color:'#000',borderRadius:'10px',border:'3px solid #fff',fontWeight:700}}>Book now</Button>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}

    </Box>
    </div>
  )
}

export default NavbarProfile
