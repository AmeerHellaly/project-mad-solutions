import * as React from 'react';
import NavbarProfile from '../../layout/navbar/NavbarProfile';
import ContentProfile from '../../components/profileComponent/ContentProfile'
import LastContent from './LastContent';
import { Box } from '@mui/material';



export default function PrimarySearchAppBar() {
  return (
    <Box sx={{
      height:"100vh"
    }}>
      <NavbarProfile/>
      <ContentProfile/>
      <LastContent/>
    </Box>
    

  );
}