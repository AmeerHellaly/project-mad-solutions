import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import ReacImage from '../../../../assets/images/Rectangle1.png'
import vectorImage from '../../../../assets/images/Vector.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imag1 from '../../../../assets/images/Image-kitchen1.png'
import Imag2 from '../../../../assets/images/Image-kitchen2.png'
import Imag3 from '../../../../assets/images/Image-kitchen3.png'
import Imag4 from '../../../../assets/images/Image-kitchen4.png'
import { Link } from 'react-router-dom'
const Kitchen = () => {
    const ImageKitchen=[
        {image:Imag1},
        {image:Imag2},
        {image:Imag3},
        {image:Imag4},
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960, 
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
  return (
    <Grid container spacing={2} sx={{marginBottom:'10px'}}>
    <Grid item xs={12} sm={6}>
               <Typography variant='h6' sx={{fontWeight:'bold',color:"#121C17",textTransform:'uppercase'}}>
                  Kitchen
                   <Box 
                   component={'img'} 
                   src={ReacImage}
                   sx={{position:'absolute',
                   left:0,
                   width: "30px",
                   height: "30px"
                       }}/>
               </Typography>
               
       </Grid>
       <Grid item xs={12} sm={6} textAlign={'right'}>
                <Link to='landscaping/kitchen'>
               <Button variant='contained'
                sx={{backgroundColor:'#074143',
                color:'#fff'
                }}
                >
                   View All
                   <Box component={'img'}  src={vectorImage} width={'15px'} sx={{m:'5px'}} />
               </Button>
                </Link>
       </Grid>
       <Grid item xs={12} >
                <Slider {...settings}>
                       {ImageKitchen.map((product,index)=>(
                           <div key={index} padding={'0 10px '}>
                               <Box sx={{
                                   height:'200px',
                                   backgroundImage:`url(${product.image})`,
                                   backgroundSize:'cover',
                                   backgroundPosition:'center',
                                   display:'flex',
                                   alignItems:'flex-end',
                                   overflow:'hidden',
                                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                   padding: '10px',
                                   margin:"20px"
                               }}>
                                   <Typography variant='body1' sx={{fontWeight:'bold',color:(index===0)?'#121C17':'#fff'}} >
                                       {product.shade} <br/> {product.type}
                                   </Typography>
                               </Box>
                           </div>
                       ))}


                </Slider>
       </Grid>
</Grid>
  )
}

export default Kitchen
