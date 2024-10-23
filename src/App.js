
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';

import { router } from './routes/routes';
function App() {
  const theme =createTheme()
  return (
    <>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  );
}

export default App;
