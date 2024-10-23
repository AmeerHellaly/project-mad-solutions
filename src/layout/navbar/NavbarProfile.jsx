import React from 'react'
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
const NavbarProfile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
     ''
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          
          <p style={{textTransform:'uppercase'}}>Home</p>
        </MenuItem>
        <MenuItem>
     
          <p style={{textTransform:'uppercase'}}>About</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>Projects</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <Link style={{textDecoration:'none',color:'#000'}} to={'/landscaping'}>
          <p style={{textTransform:'uppercase'}}>landscaping</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>decking</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>interlocking</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>floral design</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>pools</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>railings</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>woodwoorking</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>showroom</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>profile</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          
          <p style={{textTransform:'uppercase'}}>contact us</p>
        </MenuItem>
      </Menu>
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
          onClick={handleMobileMenuOpen }
          aria-haspopup="true"
          aria-controls={mobileMenuId} >
            <MenuIcon />
            </IconButton>
            <Typography sx={{fontWeight:700,fontFamily:'Inter',fontSize:'18px'}}>Menu</Typography>
            <Button variant='contained' sx={{backgroundColor:'#59ED9F',display: { xs: 'none', sm: 'none', lg: 'block' } ,ml:'10px',color:'#000',borderRadius:'10px',border:'3px solid #fff',fontWeight:700}}>Book now</Button>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </div>
  )
}

export default NavbarProfile
