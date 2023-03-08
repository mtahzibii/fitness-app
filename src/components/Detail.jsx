import React, { useContext } from 'react';
import BodyContext from '../context/BodyContext';
import { Typography, Stack, Button } from '@mui/material';

import bodyPartImage from '../assets/icons/body-part.png';
import equipmentImage from '../assets/icons/equipment.png';
import targetImage from '../assets/icons/target.png';

const Detail = () => {
 const { exerciseDetail } = useContext(BodyContext);
 const { name, target, equipment, gifUrl, bodyPart } = exerciseDetail;

 const extraDetails = [
  {
   icon: bodyPartImage,
   name: bodyPart,
  },
  {
   icon: equipmentImage,
   name: equipment,
  },
  {
   icon: targetImage,
   name: target,
  },
 ];

 return (
  <Stack
   direction='row'
   gap='60px'
   sx={{
    flexDirection: { lg: 'row', xs: 'column' },
    alignItems: 'center',
    p: '20px',
   }}
  >
   <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
   <Stack direction='column' sx={{ lg: '35px', xs: '20px' }}>
    <Typography variant='h3' mb='20px' textTransform='capitalize'>
     {name}
    </Typography>
    <Typography variant='h6' mb={4}>
     Exercises keep you strong. {name} {` `}
     is one of the best exercises to target your {target}. It will help you improve
     your mood and gain energy.
    </Typography>
    <Stack direction='column' gap={3}>
     {extraDetails.map((item) => (
      <Stack key={item.name} direction='row' alignItems='center' gap='24px'>
       <Button
        sx={{
         background: '#fff2db',
         width: '100px',
         height: '100px',
         borderRadius: '50%',
         padding: '20px',
        }}
       >
        <img
         src={item.icon}
         alt={bodyPart}
         style={{ width: '50px', height: '50px' }}
        />
       </Button>
       <Typography variant='h6' textTransform='capitalize'>
        {item.name}
       </Typography>
      </Stack>
     ))}
    </Stack>
   </Stack>
  </Stack>
 );
};

export default Detail;
