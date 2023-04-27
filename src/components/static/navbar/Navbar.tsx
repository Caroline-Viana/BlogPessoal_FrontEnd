import React, { useEffect } from "react"
import "./Navbar.css"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { TokenState } from "../../../store/tokens/tokensReducer"
import { addToken } from "../../../store/tokens/actions"
import { toast } from "react-toastify"


function Navbar() {
   let navigate = useNavigate()
   const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
   );

   const dispatch = useDispatch()

   function goLogout() {
      dispatch(addToken(''))
      toast.info('Usuário deslogado', {
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

   var navbarComponent

   if (token != "") {
      navbarComponent = <AppBar position="static" style={{ backgroundColor: '#D29642' }} className="bar">
         <Toolbar className="navbar_toolbar">
            <Box display="flex" gap={2} style={{ cursor: "pointer" }}>
               <AutoAwesomeIcon style={{ fontSize: 30, color: "white" }}></AutoAwesomeIcon>
               <Typography variant="h5" color="#fff">
                  Blog Pessoal
               </Typography>
            </Box>
            <Box className="navbar_toolbar-opcoes">
               <Link to='/home'>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Home
                     </Typography>
                  </Box>
               </Link>
               <Link to='/postagens'>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Postagens
                     </Typography>
                  </Box>
               </Link>
               <Link to='/temas'>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Temas
                     </Typography>
                  </Box>
               </Link>
               <Link to='/formularioTema'>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Cadastrar tema
                     </Typography>
                  </Box>
               </Link>
            </Box>

            <Box style={{ cursor: "pointer" }} onClick={goLogout}>
               <Typography variant="h6" className="toolbar-item">
                  Logout
               </Typography>
            </Box>

         </Toolbar>
      </AppBar>
   }

   return (
      <>
         {navbarComponent}
      </>
   )
}

export default Navbar
