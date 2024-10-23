import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import vectorImage from '../../../../assets/images/Vector.png'
import image7 from '../../../../assets/images/image-bussnies7.png'
import image8 from '../../../../assets/images/image-bussnies8.png'
import image9 from '../../../../assets/images/image-bussnies9.png'
import image10 from '../../../../assets/images/image-bussnies10.png'
import image11 from '../../../../assets/images/image-bussnies11.png'
import image12 from '../../../../assets/images/image-bussnies12.png'

const Exterior = () => {
    const imageExterior=[
        {image:image7},
        {image:image8},
        {image:image9},
        {image:image10},
        {image:image11},
        {image:image12},
    ]
  return (
    <>
    <Grid item xs={12} md={5} sx={{ backgroundColor: "#fff", padding: "10px", margin: { xs: "10px 0", md: "10px" } }}>
    <Grid container alignItems="center" justifyContent="space-between">
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#121C17", textTransform: "uppercase", fontSize: "14px" }}>
        exterior
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#074143', color: '#fff',margin:"5px" }}>
        View All
        <Box component={'img'} src={vectorImage} style={{ width: "15px", margin: "5px" }} />
      </Button>
    </Grid>
    <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
        {imageExterior.map(({image},idx)=>(
            <Grid item xs={12} sm={6} md={6} key={idx}>
                <Box component="img" src={image} sx={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }} />
                </Grid>
            ))}
    </Grid>
    </Grid>

    </>
  )
}

export default Exterior
