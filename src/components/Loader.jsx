import React from "react";
import { Stack, Box } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
import spinner from "../assets/images/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
    </div>
    // <Stack
    //   direction="row"
    //   justifyContent="center"
    //   alignItems="center"
    //   width="100%">
    //   <InfinitySpin color="gray" />
    // </Stack>
  );
};

export default Loader;
