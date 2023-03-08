import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
 return (
  <Box sx={{ mt: { lg: '160px', xs: '60px' }, ml: { sm: '50px' } }}>
   <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
    Fitness Club
   </Typography>
   <Typography fontWeight='700' sx={{ fontSize: { lg: '44px' }, xs: '40px' }}>
    Sweat, Smile <br />
    And Repeat
   </Typography>
   <Typography fontSize='22px' lineHeight='35px' mb={3} mt={4}>
    Checkout the most effective exercises
   </Typography>
   <Button
    variant='contained'
    color='error'
    href='#exercises'
    sx={{ background: '#ff2625', padding: '10px 20px', marginTop: '10px' }}
   >
    Explore Exercises
   </Button>
   <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
   <Typography
    fontWeight='600'
    color='#FF2625'
    fontSize='200px'
    sx={{ opacity: 0.2, display: { lg: 'block', xs: 'none' } }}
   >
    Exercise
   </Typography>
  </Box>
 );
};

export default HeroBanner;
