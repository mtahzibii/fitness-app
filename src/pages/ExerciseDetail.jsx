import React, { useEffect, useContext } from 'react';
import BodyContext from '../context/BodyContext';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
import { Box } from '@mui/material';

const ExerciseDetail = () => {
 const { exerciseDetail, setExerciseDetail, exerciseVideos, setExerciseVideos } =
  useContext(BodyContext);
 const { id } = useParams();

 useEffect(() => {
  const getExerciseDetail = async () => {
   // Set URLs
   const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
   const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

   //  Get exercise Details
   const exerciseDetailData = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    exerciseOptions
   );
   setExerciseDetail(exerciseDetailData);

   // Get youtube similar videos
   const exercisesVideosData = await fetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=cardio`,
    youtubeOptions
   );
   setExerciseVideos(exercisesVideosData.contents);
  };

  getExerciseDetail();
 }, [id]);
 return (
  <Box>
   <Detail />
   <ExerciseVideos />
   <SimilarExercises />
  </Box>
 );
};

export default ExerciseDetail;