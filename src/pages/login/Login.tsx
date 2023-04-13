import React from 'react'
import './Login.css'
import { Box, Grid, TextField, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

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
    return (
        <Grid container className='container'>
            <Grid xs={6} className='container_form'>
                <Box className='form'>
                    <form className='form_opcao'>
                        <Typography variant='h3' component='h3' className='opcao_titulo'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth className='campo'></TextField>
                        <Box textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                            <ThemeProvider theme={theme}>
                                <Button type='submit' variant='contained' fullWidth color='primary' className='botao'>Logar</Button>
                            </ThemeProvider>
                            </Link>
                        </Box>
                    </form>
                    <Box className='form_opcao' display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='container_img'>

            </Grid>
        </Grid>
    )
}

export default Login