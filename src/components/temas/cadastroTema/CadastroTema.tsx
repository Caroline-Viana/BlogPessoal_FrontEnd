import { Button, Container, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id:string}>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [temas, setTemas] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
             })
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
            toast.success('Tema atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
             })
        } else {
            post(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
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