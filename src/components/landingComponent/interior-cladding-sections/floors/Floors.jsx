import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import Reactangle from '../../../../assets/images/Rectangle1.png';
import veactorImage from '../../../../assets/images/Vector.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../../../assets/images/Image-floor1.png';
import Image2 from '../../../../assets/images/Image-floor2.png';
import Image3 from '../../../../assets/images/Image-floor3.png';
import Image4 from '../../../../assets/images/Image-floor4.png';
import Image5 from '../../../../assets/images/Image-floor5.png';
import Image6 from '../../../../assets/images/Image-floor6.png';
import Image7 from '../../../../assets/images/Image-floor7.png';
import { Link, useNavigate } from 'react-router-dom';
import "../../../../assets/theme/darkmode/sliders.css";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Floors = () => {
  const [t] = useTranslation();
  const langDir = i18next.dir();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const textColor = isDarkMode ? '#FFFFFF' : '#121C17';
  const iconColorFilter = isDarkMode 
    ? 'brightness(0) saturate(100%) invert(14%) sepia(90%) saturate(749%) hue-rotate(133deg) brightness(100%) contrast(102%)' 
    : 'none';
  const navigate = useNavigate();

  const productFloor = [
    { shade: t('light-shade'), type: t('butter-scotchOak'), image: Image1 },
    { shade: t('dark-shade'), type: t('butter-scotchOak'), image: Image2 },
    { shade: t('shade'), type: t('type'), image: Image3 },
    { shade: t('shade'), type: t('type'), image: Image4 },
    { shade: t('shade'), type: t('type'), image: Image5 },
    { shade: t('shade'), type: t('type'), image: Image6 },
    { shade: t('shade'), type: t('type'), image: Image7 },
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
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: '4rem', padding: '0 20px' }}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item xs={6} >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: langDir==='rtl'?"24px":"16px",
              color: textColor,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={Reactangle}
              sx={{
                position: 'absolute',
                left: langDir === 'rtl' ? 'unset' : '-40px',
                right: langDir === 'rtl' ? '-40px' : 'unset',
                width: '30px',
                height: '30px',
                filter: iconColorFilter,
              }}
            />
            {t('floor')}
          </Typography>
        </Grid>
        

        <Grid item xs={6}  container justifyContent={langDir === 'rtl' ? 'flex-end' : 'flex-end'}>
          <Link to="/landscaping/floors">
            <Button variant="contained" sx={{ backgroundColor: '#074143', color: '#fff' }}>
            {t('view-all')}
              <Box component="img" src={veactorImage} sx={{ width: '15px', mr: '5px' }} />
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Slider {...settings} className={isDarkMode ? "slider-dark" : "slider-light"}>
            {productFloor.map((item, idx) => (
              <div key={idx} style={{ padding: '0 10px' }}>
                <Link
                  to={`/floors/${item.shade}-${item.type}`}
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault(); // لمنع التداخل مع السحب
                    navigate(`/floors/${item.shade}/${item.type}`);
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
