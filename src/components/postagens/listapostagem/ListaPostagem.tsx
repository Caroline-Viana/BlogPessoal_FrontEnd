import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Postagem from '../../../models/Postagem'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import './ListaPostgem.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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
                    <Card variant="outlined" style={{ border: 'none', backgroundColor: 'hsla(39, 80%, 90%, 0.69)' }} className='card'>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom style={{ color: '#B85851' }}>
                                {post.titulo}
                            </Typography>
                            <Typography flexDirection={'column'} gutterBottom>
                                {post.texto}
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
                                        <Button variant="contained" size='small' color='inherit'>
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