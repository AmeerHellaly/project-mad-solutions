import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image4 from '../../../assets/images/Image4.png'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
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
            width: '40ch',
          },
        },
      }));
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
                Transform your vision into reality with our<br/>
              expert construction and landscaping services<br/>
              where quality meets creativity.
                </Typography>
                 
          <Search sx={{display:'flex',alignItems:'center',width:'250px',borderRadius:'5px',backgroundColor:'#fff'}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
    </Grid>
  )
}

export default LandPageContent
