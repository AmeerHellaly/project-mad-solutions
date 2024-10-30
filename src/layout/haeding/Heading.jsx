import { AppBar, Typography } from '@mui/material'
import i18next from 'i18next'
import React from 'react'

const Heading = ({backgroundColor,text}) => {
  const langDir=i18next.dir()
  return (
   
      <AppBar position='relative' sx={{backgroundColor:backgroundColor||'#0E7E83',justifyContent:"center",height:'79px',margin:0,padding:0,boxShadow:"0"}}>
      <Typography variant="h4" component="div" sx={{ marginLeft:langDir==='ltr'?'2rem':0,marginRight:langDir==='rtl'?'2rem':0,textTransform:"uppercase",color:"#121C17" }}>
            {text}
          </Typography>
      </AppBar>
   
  )
}
export default Heading
