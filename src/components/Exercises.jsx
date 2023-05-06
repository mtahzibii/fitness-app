import React, { useEffect, useContext, useState } from "react";
import BodyContext from "../context/BodyContext";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Stack, Box, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
const EXERCISES_API_URL = "https://exercisedb.p.rapidapi.com/exercises";

const Exercises = () => {
  const { exercises, setExercises, bodyPart } = useContext(BodyContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getAllExercises = async () => {
      const allExercises = await fetchData(EXERCISES_API_URL, exerciseOptions);
      setExercises(allExercises);
    };
    getAllExercises();
  }, [setExercises]);

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px", xs: "50px" }, p: "20px" }}>
      <Typography variant="h3" mb="40px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            size="large"
            count={Math.ceil(Math.ceil(exercises.length / exercisesPerPage))}
            defaultPage={1}
            page={currentPage}
            showFirstButton
            showLastButton
            color="standard"
            onChange={paginate}
            shape="rounded"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
