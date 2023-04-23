import React, { useEffect } from 'react'
import './Home.css'
import { Box, Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container className='home'>
                <Grid alignItems="center" item xs={12} md={6} className='home_secao'>
                    <Box paddingX={20} className='home_secao-opcao'>
                        <Typography variant="h3" className='opcao_item' component="h3" style={{ fontWeight: "bold" }}>
                            Seja bem vindo(a)!
                        </Typography>
                        <Typography variant="h5" className='opcao_item' component="h5">
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="contained" color='secondary' style={{ borderRadius: "20px", backgroundColor: '#B85851' }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.imgur.com/nZCwMHF.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    )
}

export default Home