import React, { useEffect, useContext } from "react";
import BodyContext from "../context/BodyContext";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";
import { Box } from "@mui/material";

const ExerciseDetail = () => {
  const {
    setExerciseDetail,
    setExerciseVideos,
    setTargetMuscleExercisesData,
    setEquipmentExercisesData,
  } = useContext(BodyContext);
  const { id } = useParams();

  useEffect(() => {
    const getExerciseDetail = async () => {
      // Set URLs
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      //  Get exercise Details
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      // Get youtube similar videos
      const exercisesVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exercisesVideosData.contents);

      //  Get target muscles exercise data
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercisesData(targetMuscleExercisesData);

      //  Get equipment exercise data
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercisesData(equipmentExercisesData);
    };

    getExerciseDetail();
    // eslint-disable-next-line
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
