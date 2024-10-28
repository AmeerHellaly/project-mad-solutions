
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { router, routes } from './routes/routes';
import './utils/i18n'
function App() {

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const [myMode, setMyMode] = useState(
    localStorage.getItem("currentMode") || (systemPrefersDark ? "dark" : "light")
  );

  useEffect(() => {
    // Save user preference in local storage on mode change
    localStorage.setItem("currentMode", myMode);
  }, [myMode]);

  const theme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={routes( setMyMode )}/>
    </ThemeProvider>
    </>
  );
}

export default App;
