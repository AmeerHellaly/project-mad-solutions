import React from 'react'
import { Box, Button, Grid, Typography,useTheme } from '@mui/material'
import ReacImage from '../../../../assets/images/Rectangle1.png'
import vectorImage from '../../../../assets/images/Vector.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../../../assets/images/Image-sink1.png'
import Image2 from '../../../../assets/images/Image-sink2.png'
import Image3 from '../../../../assets/images/Image-sink3.png'
import Image4 from '../../../../assets/images/Image-sink4.png'
import "../../../../assets/theme/darkmode/sliders.css"
const Sinks = () => {
    const theme=useTheme()
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor=isDarkMode?'#FFFFFF':'#121C17';
    const iconColorFilter = isDarkMode 
    ? 'brightness(0) saturate(100%) invert(14%) sepia(90%) saturate(749%) hue-rotate(133deg) brightness(100%) contrast(102%)' 
    : 'none';
    const ProductsSink=[
        {shade:'Light Shade',type:' Butterscotch Oak',image:Image1},
        {shade:'Dark Shade',type:' Butterscotch Oak',image:Image2},
        {shade:' Shade',type:' #Type',image:Image3},
        {shade:' Shade',type:' #Type',image:Image4},
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
                    <Typography variant='h6' sx={{fontWeight:'bold',color:textColor,textTransform:'uppercase'}}>
                       Sinks
                        <Box 
                        component={'img'} 
                        src={ReacImage}
                        sx={{position:'absolute',
                        left:0,
                        width: "30px",
                        height: "30px",
                        filter:iconColorFilter
                            }}/>
                    </Typography>
                    
            </Grid>
            <Grid item xs={12} sm={6} textAlign={'right'}>
                    <Button variant='contained'
                     sx={{backgroundColor:'#074143',
                     color:'#fff'
                     }}
                     >
                        View All
                        <Box component={'img'}  src={vectorImage} width={'15px'} sx={{m:'5px'}} />
                    </Button>
            </Grid>
            <Grid item xs={12} >
                     <Slider   className={isDarkMode ? "slider-dark" : "slider-light"} {...settings}>
                            {ProductsSink.map((product,index)=>(
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

export default Sinks
