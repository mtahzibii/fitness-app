import React from 'react';
import { useEffect, useContext } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import BodyContext from '../context/BodyContext';
const EXERCISES_API_URL = 'https://exercisedb.p.rapidapi.com/exercises';

const SearchExercises = () => {
 const { setBodyParts, bodyParts, search, setSearch, setExercises } =
  useContext(BodyContext);

 useEffect(() => {
  const fetchExercisesData = async () => {
   const bodyPartsData = await fetchData(
    `${EXERCISES_API_URL}/bodyPartList`,
    exerciseOptions
   );
   setBodyParts(['all', ...bodyPartsData]);
  };

  fetchExercisesData();
 }, [setBodyParts]);

 const handleSearch = async () => {
  if (search) {
   const exercisesData = await fetchData(EXERCISES_API_URL, exerciseOptions);

   const searchedExercises = exercisesData.filter(
    (exercise) =>
     exercise.name.toLowerCase().includes(search) ||
     exercise.target.toLowerCase().includes(search) ||
     exercise.equipment.toLowerCase().includes(search) ||
     exercise.bodyPart.toLowerCase().includes(search)
   );

   setSearch('');
   setExercises(searchedExercises);
  }
 };

 return (
  <Stack alignItems='center' mt='100px' justifyContent='center' p='2 0px'>
   <Typography
    fontWeight='700'
    textAlign='center'
    sx={{ fontSize: { lg: '44px', xs: '30px' }, marginBottom: '30px' }}
   >
    Awesome Exercises You <br />
    Should know
   </Typography>
   <Box mb='72px' position='relative'>
    <TextField
     height='76px'
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     placeholder='Search Exercises'
     type='text'
     sx={{
      input: { fontWeight: '700', border: 'none', borderRadius: '5px' },
      width: { lg: '800px', xs: '350px' },
      backgroundColor: '#fff',
      borderRadius: '40px',
     }}
    />
    <Button
     className='search-btn'
     sx={{
      bgcolor: '#ff2625',
      color: '#fff',
      textTransform: 'none',
      width: { lg: '175px', xs: '80px' },
      fontSize: { lg: '20px', xs: '12px' },
      height: '56px',
      position: 'absolute',
      right: 0,
     }}
     onClick={handleSearch}
    >
     Search
    </Button>
   </Box>

   <Box sx={{ width: '100%', position: 'relative', p: '20px' }}>
    <HorizontalScrollbar data={bodyParts} />
   </Box>
  </Stack>
 );
};

export default SearchExercises;
