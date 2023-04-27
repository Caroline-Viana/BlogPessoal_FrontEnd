import React, { ChangeEvent, useEffect, useState } from 'react'

import './CadastroUsuario.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service'
import { toast } from 'react-toastify'

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
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                 })
            } catch (error) {
                toast.error('Por favor, verifique os campos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                 })
            }
        } else {
            toast.error('As senhas não coincidem', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
             })
            setConfirmarSenha('')
            setUser({
                ...user,
                senha: ''
            })
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom style={{ color: '#D29642' }} component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField
                            id='nome'
                            label='Nome Completo'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            value={user.nome}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='usuario'
                            label='usuario@usuario.com'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            value={user.usuario}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='senha'
                            label='Digite a Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            value={user.senha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <TextField
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            value={confirmarSenha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(evento)} />

                        <TextField
                            id='foto'
                            label='Link da Foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth
                            value={user.foto}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedModel(evento)} />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='warning' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' style={{ backgroundColor: '#D29642' }}>
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