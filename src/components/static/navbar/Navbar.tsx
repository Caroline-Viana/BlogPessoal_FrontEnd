import React from "react"
import "./Navbar.css"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: '#D29642',
    },
    secondary: {
      main : '#B85851',
    },
  }
});

function Navbar() {
   return (
      <>
      <ThemeProvider theme={theme}>
         <AppBar position="static" color="primary">
            <Toolbar className="navbar_toolbar">
               <Box display="flex" gap={2} style={{ cursor: "pointer" }}>
                  <AutoAwesomeIcon style={{ fontSize: 30, color: "white" }}></AutoAwesomeIcon>
                  <Typography variant="h5" color="#fff">
                     Blog Pessoal
                  </Typography>
               </Box>
               <Box className="navbar_toolbar-opcoes">
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Home
                     </Typography>
                  </Box>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Postagens
                     </Typography>
                  </Box>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Temas
                     </Typography>
                  </Box>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                     <Typography variant="h6" className="toolbar-item">
                        Cadastrar tema
                     </Typography>
                  </Box>
               </Box>
               <Box style={{ cursor: "pointer" }}>
                  <Typography variant="h6" className="toolbar-item">
                     Logout
                  </Typography>
               </Box>
            </Toolbar>
         </AppBar>
         </ThemeProvider>
      </>
   )
}

export default Navbar
