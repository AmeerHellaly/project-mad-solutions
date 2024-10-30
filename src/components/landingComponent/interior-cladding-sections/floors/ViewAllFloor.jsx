import React from 'react'
import NavbarProfile from '../../../../layout/navbar/NavbarProfile'
import Heading from '../../../../layout/haeding/Heading'
import { Box, Grid, Typography } from '@mui/material'
import Image1 from '../../../../assets/images/Image-floor1.png'
import Image2 from '../../../../assets/images/Image-floor2.png'
import Image3 from '../../../../assets/images/Image-floor3.png'
import Image4 from '../../../../assets/images/Image-floor4.png'
import Image5 from '../../../../assets/images/Image-floor5.png'
import Image6 from '../../../../assets/images/Image-floor6.png'
import Image7 from '../../../../assets/images/Image-floor7.png'
import { useTranslation } from 'react-i18next'
const ViewAllFloor = ({setMyMode}) => {
  const [t]=useTranslation()
  const productFloor = [
    { shade: t('light-shade'), type: t('butter-scotchOak'), image: Image1 },
    { shade: t('dark-shade'), type: t('butter-scotchOak'), image: Image2 },
    { shade: t('shade'), type: t('type'), image: Image3 },
    { shade: t('shade'), type: t('type'), image: Image4 },
    { shade: t('shade'), type: t('type'), image: Image5 },
    { shade: t('shade'), type: t('type'), image: Image6 },
    { shade: t('shade'), type: t('type'), image: Image7 },
  ];
  return (
    <div>
        <NavbarProfile setMyMode={setMyMode} position={'static'}/>
        <Heading backgroundColor={'lightblue'}  text={t('floor')}/>
        <Grid container spacing={2}>
                {productFloor.map((product,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index} mt='2%'  >
                   
                        <Box   sx={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',

                         }}>
                        <Typography variant="body1" sx={{ color:(index===0 || index===2 || index===3 )?'#fff':'#121C17', fontWeight: 'bold' }}>
                                {product.shade }<br/> {product.type}
                            </Typography>
                            </Box>
                
            </Grid>
                ))}
        </Grid>
    </div>
  )
}

export default ViewAllFloor
