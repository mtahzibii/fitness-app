import React from "react";
import { Box, Stack } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt={5} bgcolor="#fff3f4" py={5}>
      <Stack alignItems="center">
        <img src={logo} alt="logo" width="200px" height="40px" />
      </Stack>
    </Box>
  );
};

export default Footer;
