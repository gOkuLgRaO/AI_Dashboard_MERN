import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []); //you are importing theme from theme.ts
  return (
    <div className="app">
      <BrowserRouter>                       {/* for route creating */}
        <ThemeProvider theme={theme}>       {/* declaring the theme */}
          <CssBaseline />                   {/* importing the default css styles */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">       {/* box component from mui */}
            <Navbar />      {/* declare the navbar */}
            <Routes>    {/* creating routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />     {/* for prediction page */}
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
