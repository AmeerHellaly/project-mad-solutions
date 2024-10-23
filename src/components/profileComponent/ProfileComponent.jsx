import * as React from 'react';
import NavbarProfile from '../../layout/navbar/NavbarProfile';
import ContentProfile from '../../components/profileComponent/ContentProfile'
import LastContent from './LastContent';



export default function PrimarySearchAppBar() {
  return (
    <>
    <NavbarProfile/>
    <ContentProfile/>
    <LastContent/>


  </>
  );
}