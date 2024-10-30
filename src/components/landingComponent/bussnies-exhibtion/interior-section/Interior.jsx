import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import vectorImage from '../../../../assets/images/Vector.png'
import image1 from '../../../../assets/images/image-bussnies1.png'
import image2 from '../../../../assets/images/image-bussnies2.png'
import image3 from '../../../../assets/images/image-bussnies3.png'
import image4 from '../../../../assets/images/image-bussnies4.png'
import image5 from '../../../../assets/images/image-bussnies5.png'
import image6 from '../../../../assets/images/image-bussnies6.png'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Interior = () => {
  const [t]=useTranslation()
  const langDir=i18next.dir()
    const imageInterior=[
        {image:image1},
        {image:image2},
        {image:image3},
        {image:image4},
        {image:image5},
        {image:image6},
    ]

  return (
    <>
    <Grid item xs={12} md={5}  sx={{ backgroundColor: "#fff", padding: "10px", margin: { xs: "10px 0", md: "10px" } }}>
    <Grid container alignItems="center" justifyContent="space-between">
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#121C17", textTransform: "uppercase", fontSize: langDir==='rtl'?"36px":"14px" }}>
      {t('interior')}
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#074143', color: '#fff',margin:"5px" }}>
      {t('view-all')}
        <Box component={'img'} src={vectorImage} style={{ width: "15px", margin: "5px" }} />
      </Button>
    </Grid>
    <Grid container alignItems="center" justifyContent="space-between" >
            {imageInterior.map(({image},idx)=>(
                <Grid item xs={12} sm={6} md={6} key={idx}>
                <Box component="img" src={image} sx={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }} />
              </Grid>
            ))}
    </Grid>
    
    </Grid>

    </>
  )
}

export default Interior
