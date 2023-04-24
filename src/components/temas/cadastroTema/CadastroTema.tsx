import { Button, Container, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id:string}>()
    const [token, setToken] = useLocalStorage('token')
    const [temas, setTemas] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id:string) {
        buscaId(`/temas/${id}`, setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(evento: ChangeEvent<HTMLInputElement>){
        setTemas({
            ...temas,
            [evento.target.name]: evento.target.value
        })
    }

    async function onSubmit(evento: ChangeEvent<HTMLFormElement>) {
        evento.preventDefault()
        console.log("tema " + JSON.stringify(temas))

        if (id !== undefined) {
            console.log(temas)
            put(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo" style={{marginTop: '6rem'}} >
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" style={{color: '#B85851'}}>
                    Cadastro de Tema
                </Typography>
                <TextField value={temas.descricao} onChange={(evento: ChangeEvent<HTMLInputElement>) => updatedTema(evento)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth/>
                <Button type="submit" variant="contained" style={{backgroundColor: '#B85851'}} >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema