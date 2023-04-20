import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate('/login')
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [posts.length])
    return (
        <>
            {
                posts.map(post => (
                <Box m={2} >
                    <Card variant="outlined" style={{ border: '1px solid #B85851' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom style={{ color: '#B85851' }}>
                                {post.titulo}
                            </Typography>
                            <Typography flexDirection={'column'} gutterBottom>
                                {post.textro}
                            </Typography>
                            <Typography variant="body1" component="p" color="textSecondary">
                                {post.tema?.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: '#C28D55' }} >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="warning">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem