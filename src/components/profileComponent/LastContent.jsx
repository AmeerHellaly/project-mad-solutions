import React from 'react'
import { Grid, Box, Typography, Button ,useMediaQuery} from '@mui/material';
import paleImage from '../../assets/images/pale-851.png';
const LastContent = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <div>
        <Grid container style={{ minHeight: '39.3vh', width: "100%" }}>
      {/* Left Section */}
      <Grid item xs={12} md={5} style={{ backgroundColor: 'white', minHeight: '39vh', position: "relative" }}>
        <Box component={'img'} src={paleImage} style={{
          position: "absolute",
          bottom: "0",
          width: "300px"
        }} />
        
        {!isSmallScreen && (
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: "50px",
          }}>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              Name
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              Country
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              Email
            </Typography>
            <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", width: "150px", zIndex: "2" }}>
              Phone
            </Typography>
          </Box>
        )}
      </Grid>


      <Grid item xs={12} md={7} style={{ backgroundColor: '#031C1D', position: "relative", minHeight: '39vh', color: "#fff" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isSmallScreen ? "flex-start" : "flex-start", 
          margin: "50px",
        }}>
          {!isSmallScreen ? (
            <>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james williams
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                usa - Washington
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james96@gmail.com
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                +1 202 555 1234
              </Typography>
            </>
          ) : (
            <>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                Name
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james williams
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                Country
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                usa - Washington
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                Email
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                james96@gmail.com
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "600", textTransform: "uppercase", fontSize: "20px", mt: 1 }}>
                Phone
              </Typography>
              <Typography sx={{ color: "#14B05D", fontWeight: "600", textTransform: "uppercase", fontSize: "20px" }}>
                +1 202 555 1234
              </Typography>
            </>
          )}
        </Box>
        <Box sx={{
          position: "absolute",
          right: "0",
          bottom: "0"
        }}>
          <Button variant='contained' sx={{
            color: "#fff",
            backgroundColor: "red",
            border: "2px solid #fff",
            margin: "10px",
          }}>
            Log out
          </Button>
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}

export default LastContent
