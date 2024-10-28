import React from 'react'
import { Avatar, Box, Grid, Stack, Typography,useTheme } from '@mui/material';
import backimg from '../../assets/images/photo_2024-10-21_15-05-08.jpg'
import profileImage from '../../assets/images/profile.jpg'

const   ContentProfile = () => {
  const theme=useTheme()
  const isDarkMode = theme.palette.mode === 'dark';
  const textColor=isDarkMode?'#FFFFFF':'#121C17';
  return (
    <div>
 <Grid item xs={12} style={{ 
      position:'relative',
      backgroundImage:`url(${backimg})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      height:'50vh',
      width:'100%',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <Box sx={{
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        background: "linear-gradient(0deg, rgba(238, 249, 243, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
        zIndex: 1
      }}/>
      <Box sx={{
        position:'absolute',
        left:  '2%' ,
        top:  '75%' , 
        zIndex:3,
      }}>
        <Stack direction={'row'} spacing={2}>
          <Avatar alt='Profile' sx={{width:150,height:150,border:'10px solid #14B05D'}} src={profileImage} />
        </Stack>
        <Typography sx={{ border:"1px solid #000", borderRadius:"4px",color:textColor }} variant='body1'>@Ameer Hellaly</Typography>
      </Box>



      

    </Grid>
    </div>
  )
}

export default ContentProfile
