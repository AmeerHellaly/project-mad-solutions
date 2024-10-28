import React from 'react'
import NavbarProfile from '../../layout/navbar/NavbarProfile'
import LandPageContent from './landpageContent/LandPageContent'
import InteriorClading from './interior-cladding-sections/InteriorClading'
import LandScaping from './landscaping-department/LandScaping'
import AboutService from './about-service/AboutService'
import BussniesExhibtion from './bussnies-exhibtion/BussniesExhibtion'
import Footer from '../../layout/footer/Footer'
const LandingComponent =  ({setMyMode}) => {
  return (
    <div>
      <NavbarProfile setMyMode={setMyMode}/>
      <LandPageContent/>
      <InteriorClading/>
      <LandScaping/>
      <AboutService/>
      <BussniesExhibtion/>
      <Footer/>
    </div>
  )
}

export default LandingComponent
