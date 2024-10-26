import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Heading = ({backgroundColor,text}) => {
  return (
   
      <AppBar position='static' sx={{backgroundColor:backgroundColor||'#0E7E83',justifyContent:"center",height:'79px',margin:0,padding:0,boxShadow:"0"}}>
      <Typography variant="h6" component="div" sx={{ marginLeft:"2rem",textTransform:"uppercase",color:"#121C17" }}>
            {text}
          </Typography>
      </AppBar>
   
  )
}
export default Heading
