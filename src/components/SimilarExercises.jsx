import React, { useContext } from "react";
import BodyContext from "../context/BodyContext";
import { Stack, Box, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = () => {
  const { targetMuscleExercisesData, equipmentExercisesData } =
    useContext(BodyContext);

  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
        p: "20px",
      }}>
      <Typography variant="h4" mb="10px" pl={7}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row">
        {targetMuscleExercisesData.length ? (
          <Box sx={{ width: "100%", position: "relative", m: "20px" }}>
            <HorizontalScrollbar data={targetMuscleExercisesData} />
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mt={5} pl={7}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row">
        {equipmentExercisesData.length ? (
          <Box sx={{ width: "100%", position: "relative", m: "20px" }}>
            <HorizontalScrollbar data={equipmentExercisesData} />
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
