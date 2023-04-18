import React, { ChangeEvent, useEffect } from 'react'
import './Login.css'
import { Box, Grid, TextField, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useState } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D29642',
        },
        secondary: {
            main: '#B85851',
        },
    }
});

function Login() {

    let navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token');
    //[Acessar, alterar]
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    function updatedModel(evento: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            //[Capturando a propriedade] : Capturando o valor da propriedad
            [evento.target.name]: evento.target.value
        })
    }

    useEffect(() => {
        if(token != ''){
            navigate('/home')
        }
    }, [token])

    async function onSumit(evento: ChangeEvent<HTMLFormElement>) {
        evento.preventDefault();
        try {
            await login('/usuarios/logar', userLogin, setToken)
            alert("Usuario logado")
        } catch (error) {
            alert("Erro ao logar")
        }
    }

    return (
        <Grid container className='container'>
            <Grid xs={6} className='container_form'>
                <Box className='form'>
                    <form className='form_opcao' onSubmit={onSumit}>
                        <Typography variant='h3' component='h3' className='opcao_titulo'>Entrar</Typography>
                        <TextField
                            id='usuario'
                            label='usuario@usuario.com'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            value={userLogin.usuario}
                            onChange={(evento:ChangeEvent<HTMLInputElement>) => updatedModel(evento)}>
                        </TextField>

                        <TextField
                            id='senha'
                            label='Digite a Senha'
                            variant='outlined'
                            name='senha'
                            type='password'
                            margin='normal'
                            fullWidth
                            className='campo'
                            value={userLogin.senha}
                            onChange={(evento:ChangeEvent<HTMLInputElement>) => updatedModel(evento)}>
                        </TextField>
                        <Box textAlign='center'>
                            
                                <ThemeProvider theme={theme}>
                                    <Button type='submit' variant='contained' fullWidth color='primary' className='botao'>Logar</Button>
                                </ThemeProvider>
                            
                        </Box>
                    </form>
                    <Box className='form_opcao' display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='container_img'>

            </Grid>
        </Grid>
    )
}

export default Login