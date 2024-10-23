import { Box, Grid } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: '0rem' }}>
        <Box sx={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <ReactPlayer
                url={'https://youtu.be/y7_Spedf2BI?si=Voy_RN8ihCXN3H4v'}
                width={'100%'}
                height={'100%'}
                style={{ position: 'absolute', top: 0, left: 0 }}
                controls          
            />
        </Box>
    </Grid>
  )
}

export default Video
