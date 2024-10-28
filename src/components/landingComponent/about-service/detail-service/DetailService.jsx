import { Grid, Typography,useTheme } from '@mui/material'
import React from 'react'

const DetailService = () => {
    const theme=useTheme()
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor=isDarkMode?'#FFFFFF':'#121C17';
  return (
    <Grid container spacing={2}  sx={{ marginBottom: '4rem' }}> 
        <Grid item xs={12} sm={6}>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor,fontSize:'16px'}}>
                <span style={{fontWeight:'bold',fontSize:'25px',fontFamily:'Inter'}}>Welcom</span><br/>
                to Z and N Construction and Landscaping, where quality meets creativity. Founded with a passion for transforming outdoor spaces and building lasting structures, we are dedicated to providing exceptional services that enhance both the beauty and functionality of your property.
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor,fontSize:'16px'}}>
                <span style={{fontWeight:'bold',fontSize:'25px',fontFamily:'Inter'}}>Our Mission</span><br/>
                At Z and N, our mission is to deliver high-quality construction and landscaping solutions tailored to meet the unique needs of our clients. We believe in creating spaces that reflect your vision while ensuring durability and sustainability
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor,fontSize:'16px'}}>
                <span style={{fontWeight:'bold',fontSize:'25px',fontFamily:'Inter'}}>Our Team</span><br/>
                Our experienced team of professionals brings a wealth of knowledge and expertise to every project. From skilled landscapers to expert builders, we work collaboratively to ensure that each job is completed to the highest standards. We pride ourselves on our attention to detail, commitment to excellence, and passion for our craft.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor,fontSize:'16px'}}>
                <span style={{fontWeight:'bold',fontSize:'25px',fontFamily:'Inter'}}>What We Offer</span><br/>
                Construction Services: From residential projects to commercial builds, we handle everything from design to execution, ensuring a seamless construction process.
                Landscaping Services: Our landscaping team specializes in creating beautiful gardens, patios, and outdoor living spaces that enhance your property’s appeal.
            </Typography>
            <Typography variant='h6' sx={{textTransform:'uppercase',color:textColor,fontSize:'16px'}}>
                <span style={{fontWeight:'bold',fontSize:'25px',fontFamily:'Inter'}}>Why Choose Us?</span><br/>
                Quality Craftsmanship: We use only the best materials and techniques to ensure lasting results.
                Customer-Centric Approach: Your satisfaction is our priority. We listen to your needs and work closely with you throughout the project.
                Sustainable Practices: We are committed to environmentally friendly practices that benefit both our clients and the planet.
                Join us in creating beautiful, functional spaces that you can cherish for years to come. At Z and N Construction and Landscaping, we turn your dreams into reality.
            </Typography>
        </Grid>
    </Grid>
  )
}

export default DetailService
