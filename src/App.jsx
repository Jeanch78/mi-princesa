import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import { Box, Button, Dialog, DialogActions, DialogContent, Grid, Typography } from '@mui/material';
import Flower from './components/flower';
import Preloader from './components/preloader';
import CustomButtom from './components/customButtom';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [continuar, setContinuar] = useState(false);
  const [dlgConfirm, setDlgConfirm] = useState({ show: false, message: '', });


  useEffect(() => {
    // Simula un tiempo de carga (puedes cambiar esto según tus necesidades)
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const clicked = () => {
    setDlgConfirm({ show: true, message: 'ssss', });
  }

  const closeDlgLoginWelc = () => {
    setDlgConfirm({ show: false, message: '', });
    setContinuar(true);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isLoading ? <Preloader /> :
        continuar ? <Flower /> :
          <Box
            sx={{
              display: 'flex', justifyContent: 'center', alignItems: "center",
              height: '100vh',
            }}
          >
            <CustomButtom clicked={clicked} />
            <Dialog open={dlgConfirm.show} onClose={() => closeDlgLoginWelc()} maxWidth="md" fullWidth >
              <DialogContent sx={{ textAlign: 'center', bgcolor: '', color: '' }} >
                <Typography sx={{ fontSize: '20px' }}>
                  "Mi dulce y preciosa Heydi,<br />
                  Antes de comenzar este día, quiero susurrarte al oído cuánto significas para mí. Eres un regalo del universo, una estrella brillante en mi vida que ilumina cada rincón de mi corazón. Desde el momento en que entraste en mi vida, todo ha cobrado un sentido más profundo y hermoso.
                  <br />¡Preparados para escribir juntos el próximo capítulo de nuestra historia!
                </Typography>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'center' }}>
                <Button variant='contained' sx={{ bgcolor: '#db3eb1', '&:hover': { color: '#db3eb1', border: ' 2px solid #db3eb1', bgcolor: '#fff' } }} onClick={() => closeDlgLoginWelc()} >continuar</Button>
                {/* <CustomButtom /> */}
              </DialogActions>
            </Dialog>
          </Box>

      }

      {/* <Grid container spacing={2}>
        <Grid item md={12}>
          <Button variant="contained">Contained</Button>
        </Grid>
        <Grid item md={12} className='p_flowera'>
          <Flower />
          as
        </Grid>
        <Grid item md={12}>
          <Button variant="contained">Contained</Button>
        </Grid>
      </Grid> */}
    </ThemeProvider>
  )
}

export default App
