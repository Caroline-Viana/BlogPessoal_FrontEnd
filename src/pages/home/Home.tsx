import React, { useEffect } from 'react'
import './Home.css'
import { Box, Button, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
             })
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
                        <Link to="/postagens">
                            <Button variant="contained" color='secondary' style={{ borderRadius: "20px", backgroundColor: '#B85851' }}>Ver Postagens</Button>
                        </Link>

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