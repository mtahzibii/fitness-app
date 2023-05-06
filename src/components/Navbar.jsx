import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      marginTop="20px"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32", xs: "20px" },
        justifyContent: "none",
        px: "20px",
      }}>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{ textDecoration: "none", borderBottom: "2px solid red" }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
