import React from 'react'
import './Home.css'
import { Box, Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
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