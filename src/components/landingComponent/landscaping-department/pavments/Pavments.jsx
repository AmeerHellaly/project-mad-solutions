import React from 'react'
import { Box, Button, Grid, Typography,useTheme } from '@mui/material'
import ReacImage from '../../../../assets/images/Rectangle2.png'
import vectorImage from '../../../../assets/images/Vector.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imag1 from '../../../../assets/images/image-pavements1.png'
import Imag2 from '../../../../assets/images/image-pavements2.png'
import Imag3 from '../../../../assets/images/image-pavements3.png'
import Imag4 from '../../../../assets/images/image-pavements4.png'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Pavments = () => {
    const [t]=useTranslation()
    const langDir=i18next.dir()
    const theme=useTheme()
    const isDarkMode = theme.palette.mode === 'dark';
    const textColor=isDarkMode?'#FFFFFF':'#121C17';
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
    <Grid container spacing={2} marginBottom={'4rem'}       
    sx={{ marginBottom: '4rem', padding: '0 20px' }}
     justifyContent="space-between"
     alignItems="center"
     direction="row">
    <Grid item xs={6} >
               <Typography variant='h6'sx={{
              fontWeight: 'bold',
              fontSize: langDir==='rtl'?"24px":"16px",
              color: textColor,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
                  {t('pavements')}
                   <Box 
                   component={'img'} 
                   src={ReacImage}
                   sx={{position:'absolute',
                    left: langDir === 'rtl' ? 'unset' : '-40px',
                    right: langDir === 'rtl' ? '-40px' : 'unset',
                   width: "30px",
                   height: "30px"
                       }}/>
               </Typography>
               
       </Grid>
       <Grid item xs={6} container justifyContent={langDir === 'rtl' ? 'flex-end' : 'flex-end'}>
               <Button variant='contained'
                sx={{backgroundColor:'#14B05D',
                color:'#fff'
                }}
                >
                    {t('view-all')}
                   <Box component={'img'}  src={vectorImage} width={'15px'} sx={{m:'5px'}} />
               </Button>
       </Grid>
       <Grid item xs={12} >
                <Slider  className={isDarkMode ? "slider-dark" : "slider-light"} {...settings}>
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
