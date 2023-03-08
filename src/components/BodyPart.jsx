import React, { useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import icon from '../assets/icons/gym.png';
import BodyContext from '../context/BodyContext';

const BodyPart = ({ item }) => {
 const { bodyPart, setBodyPart } = useContext(BodyContext);

 return (
  <Stack
   alignItems='center'
   justifyContent='center'
   className='bodyPart-card'
   sx={{
    borderTop: bodyPart === item && '3px solid #ff2625',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20px',
    width: '190px',
    height: '200px',
    cursor: 'pointer',
    gap: '17px',
   }}
  >
   <img
    src={icon}
    alt='icon'
    style={{ with: '40px', height: '40px' }}
    onClick={() => {
     setBodyPart(item);
     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
   />
   <Typography
    fontSize='22px'
    fontWeight='bold'
    color='#3A1212'
    textTransform='capitalize'
   >
    {item}
   </Typography>
  </Stack>
 );
};

export default BodyPart;
