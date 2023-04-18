import { Box, Button, Card, CardActions, CardContent, Link, Typography } from '@mui/material'
import React from 'react'

function ListaTema() {
    return (
        <>
            <Box m={2} >
                <Card variant="outlined" style={{border: '1px solid #B85851', width: '35%'}} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2" style={{color: '#B85851'}}>
                            Entretenimento
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link className="text-decorator-none">
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

export default ListaTema