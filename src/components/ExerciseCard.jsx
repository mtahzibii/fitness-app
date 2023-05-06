import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise);
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      <Stack direction="row" mt="20px">
        <Button
          sx={{
            ml: "21px",
            px: "20px",
            color: "#fff",
            background: "#ffa7a7",
            fontSize: "14px",
            borderRadius: "50px",
            textTransform: "capitalize",
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            px: "20px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "50px",
            textTransform: "capitalize",
          }}>
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "21px",
          color: "#000",
          fontWeight: "bold",
          mt: "20px",
          pb: "10px",
          textTransform: "capitalize",
          fontSize: "22px",
        }}>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
