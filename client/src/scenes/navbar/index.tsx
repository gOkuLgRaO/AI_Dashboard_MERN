import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";  // we are using the box style from flexbetween tsx file

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme(); // grabbing palette from themes
  const [selected, setSelected] = useState("dashboard");  // the page which is highlighted in the dashboard
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>  {/* to create a flex animation*/}
      {/* LEFT SIDE */}   {/* left side of the dashboard */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "32px" }} />    {/* sx is used to change the icon size*/}
        <Typography variant="h4" fontSize="16px">
          Dash
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}   {/* right side of the dashboard */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>   {/* it is selected when hovered upon 'dashboard' text. this box represents 'dashboard' button */}
          <Link
            to="/"     // where the dashboard takes us
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],   // when dashboard icon is clicked, it will show grey palette of 700 style
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}> {/* this box is for 'predictions' button */}
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
