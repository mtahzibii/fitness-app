import React, { useContext } from 'react';
import BodyContext from '../context/BodyContext';
import { Typography, Stack, Box, capitalize } from '@mui/material';

const ExerciseVideos = () => {
 const { setExerciseVideos, exerciseVideos, exerciseDetail } =
  useContext(BodyContext);
 const { name } = exerciseDetail;

 return (
  <Box sx={{ mrginTop: { lg: '200px', xs: '20px' }, p: '20px' }}>
   <Typography variant='h4' mb='35px'>
    Watch{' '}
    <span style={{ color: '#ff2625', textTransform: 'capitalize ' }}>{name}</span>{' '}
    exercises videos
   </Typography>
   <Stack
    justifyContent='flex-start'
    flexWrap='wrap'
    alignItems='center'
    sx={{ flexDirection: { lg: 'row' }, gap: '100px', xs: '0' }}
   >
    {exerciseVideos?.slice(0, 3).map((item, index) => (
     <Stack>
      <a
       key={index}
       href={`https://www.youtube.com/watch/?v=${item.video.videoId}`}
       target='_blank'
       ref='noreferrer'
      >
       <img src={item.video.thumbnails[0].url} alt={item.video.title} />
      </a>
     </Stack>
    ))}
    ))
   </Stack>
  </Box>
 );
};

export default ExerciseVideos;
