import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Reactangle from '../../../../assets/images/Rectangle1.png'
import veactorImage from '../../../../assets/images/Vector.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../../../assets/images/Image-floor1.png'
import Image2 from '../../../../assets/images/Image-floor2.png'
import Image3 from '../../../../assets/images/Image-floor3.png'
import Image4 from '../../../../assets/images/Image-floor4.png'
import Image5 from '../../../../assets/images/Image-floor5.png'
import Image6 from '../../../../assets/images/Image-floor6.png'
import Image7 from '../../../../assets/images/Image-floor7.png'
import { Link, useNavigate } from 'react-router-dom'
const Floors = () => {
    const navigate = useNavigate();
  
    const productFloor = [
      { shade: 'LightShade', type: 'ButterscotchOak', image: Image1 },
      { shade: 'DarkShade', type: 'ButterscotchOak', image: Image2 },
      { shade: 'Shade', type: 'ghfhy', image: Image3 },
      { shade: 'Shade', type: 'Type', image: Image4 },
      { shade: 'Shade', type: 'Type', image: Image5 },
      { shade: 'Shade', type: 'Type', image: Image6 },
      { shade: 'Shade', type: 'Type', image: Image7 },
    ];
  
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
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div>
        <Grid container spacing={2} sx={{ marginBottom: '4rem' }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#121C17', textTransform: 'uppercase' }}
            >
              <Box
                component={'img'}
                src={Reactangle}
                style={{ position: 'absolute', left: '0%', width: '30px', height: '30px' }}
              />
              FLOORS
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign={'right'}>
            <Link to='/landscaping/floors'>
              <Button variant="contained" sx={{ backgroundColor: '#074143', color: '#fff' }}>
                View All
                <Box component={'img'} src={veactorImage} sx={{ width: '15px', m: '5px' }} />
              </Button>
            </Link>
          </Grid>
          <Grid xs={12}>
            <Slider {...settings}>
              {productFloor.map((item, idx) => (
                <div key={idx} style={{ padding: '0 10px' }}>
                  <Link
                    to={`/floors/${item.shade}-${item.type}`}
                    style={{ textDecoration: 'none' }}
                    onClick={(e) => {
                      e.preventDefault(); // لمنع التداخل مع السحب
                      navigate(`/floors/${item.shade}/${item.type}`); // استخدم navigate بدلاً من window.location.href
                    }}
                  >
                    <Box
                      sx={{
                        height: '200px',
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        overflow: 'hidden',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        margin: '20px',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: idx === 0 || idx === 2 || idx === 3 ? '#fff' : '#121C17', fontWeight: 'bold' }}
                      >
                        {item.shade}
                        <br />
                        {item.type}
                      </Typography>
                    </Box>
                  </Link>
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Floors;
  
