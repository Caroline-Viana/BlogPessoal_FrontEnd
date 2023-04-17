import React, { ChangeEvent, useEffect, useState } from 'react'

import './CadastroUsuario.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service'

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    function updatedModel(evento: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [evento.target.name]: evento.target.value
        })

    }

    function confirmarSenhaHandle(evento: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(evento.target.value)
    }

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])

    async function onSubmit(evento: ChangeEvent<HTMLFormElement>) {
        evento.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            value={user.nome}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            value={user.usuario}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            value={user.senha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            value={confirmarSenha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(evento)} />

                        <TextField
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth
                            value={user.foto}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario