import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate('/login')
        }
    }, [token])

    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])
    return (
        <>
            {
                temas.map(tema => (
                <Box m={2} >
                    <Card variant="outlined" style={{ border: '1px solid #B85851', width: '35%' }} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography variant="h5" component="h2" style={{ color: '#B85851' }}>
                                {tema.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: '#C28D55' }} >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
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

export default ListaTema