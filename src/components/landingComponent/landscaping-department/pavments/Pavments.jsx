import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import ReacImage from '../../../../assets/images/Rectangle2.png'
import vectorImage from '../../../../assets/images/Vector.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imag1 from '../../../../assets/images/image-pavements1.png'
import Imag2 from '../../../../assets/images/image-pavements2.png'
import Imag3 from '../../../../assets/images/image-pavements3.png'
import Imag4 from '../../../../assets/images/image-pavements4.png'
const Pavments = () => {
    const ImagePavements=[
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
                  Pavements
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
               <Button variant='contained'
                sx={{backgroundColor:'#14B05D',
                color:'#fff'
                }}
                >
                   View All
                   <Box component={'img'}  src={vectorImage} width={'15px'} sx={{m:'5px'}} />
               </Button>
       </Grid>
       <Grid item xs={12} >
                <Slider {...settings}>
                       {ImagePavements.map((product,index)=>(
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

export default Pavments
