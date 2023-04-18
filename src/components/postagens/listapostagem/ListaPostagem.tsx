import { Box, Button, Card, CardActions, CardContent, Link, Typography } from '@mui/material'
import React from 'react'

function ListaPostagem() {
    return (
        <>
            <Box m={2} >
                <Card variant="outlined" style={{border: '1px solid #B85851'}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom style={{color: '#B85851'}}>
                            5 Filmes nostálgicos para maratonar no Halloween
                        </Typography>
                        <Typography flexDirection={'column'} gutterBottom>
                            <p>1 - O Estranho Mundo de Jack</p>
                            <p>2 - Abracadabra</p>
                            <p>3 - A Família Addams</p>
                            <p>4 - Os Fantasmas se Divertem</p>
                            <p>5 - Convenção das Bruxas</p>
                        </Typography>
                        <Typography variant="body1" component="p" color="textSecondary">
                            Tema: Entretenimento
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link className="text-decorator-none" >
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size='small' style={{backgroundColor: '#C28D55'}} >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link className="text-decorator-none">
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
        </>
    )
}

export default ListaPostagem