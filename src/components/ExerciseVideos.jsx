import React, { useContext } from "react";
import BodyContext from "../context/BodyContext";
import { Typography, Stack, Box } from "@mui/material";

const ExerciseVideos = () => {
  const { exerciseVideos, exerciseDetail } = useContext(BodyContext);
  const { name } = exerciseDetail;

  return (
    <Box
      sx={{
        mrginTop: { lg: "200px", xs: "20px" },
        p: "20px",
      }}>
      <Typography variant="h4" mb="35px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize " }}>
          {name}
        </span>{" "}
        exercises videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "100px", xs: "0" } }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Stack key={index}>
            <a
              href={`https://www.youtube.com/watch/?v=${item.video.videoId}`}
              className="exercise-video">
              <Stack className="image-container">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="video-img"
                />
              </Stack>
              <Typography color="#000" fontSize={13} fontWeight={600}>
                {item.video.title}
              </Typography>
              <Typography color="#000" fontSize={12} fontWeight={400}>
                {item.video.channelName}
              </Typography>
            </a>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
