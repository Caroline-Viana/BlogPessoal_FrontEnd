import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    var footerComponent

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box padding={1} style={{ backgroundColor: "#D29642", height: "80px" }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/caroline.viana.908" target="_blank">
                        <FacebookIcon style={{ fontSize: 30, color: "white" }} /></a>
                    <a href="https://instagram.com/caroline_viana_s2?igshid=OTJhZDVkZWE=" target="_blank">
                        <InstagramIcon style={{ fontSize: 30, color: "white" }} /></a>
                    <a href="https://www.linkedin.com/in/caroline-viana-de-medeiros/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 30, color: "white" }} /></a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#D99939", height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://www.linkedin.com/in/caroline-viana-de-medeiros/">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Caroline Viana</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
    <>
        {footerComponent}
    </>
    )
}

export default Footer