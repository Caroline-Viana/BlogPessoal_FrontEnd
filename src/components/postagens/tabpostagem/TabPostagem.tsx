import { TabContext, TabPanel } from '@material-ui/lab'
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListaPostagem from '../listapostagem/ListaPostagem'

function TabPostagem() {

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered onChange={handleChange} style={{ backgroundColor: '#D29642' }}>
                        <Tab style={{ color: 'white' }} label="Todas as postagens" value="1" />
                        <Tab style={{ color: 'white' }} label="Sobre-mim" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography align="center" variant="h4" gutterBottom className="titulo" style={{ fontWeight: 'bold', color: '#B85851' }}>Sobre-mim</Typography>
                    <Typography variant="body1" margin={3} color="textPrimary" align="left">
                        😊 Olá, meu   nome é Caroline Viana de Medeiros e tenho 22 anos.
                    </Typography>
                    <Typography variant="body1" margin={3} color="textPrimary" align="left">
                        Sou formada em Gestão de Turismo, pelo Instituto Federal de São Paulo e, apesar de ter adorado a área, sempre tive um grande amor pela tecnologia. Por isso, decidi fazer uma transição de carreira para a programação e hoje estou me qualificando com o objetivo de trabalhar nesse campo!
                    </Typography>
                    <Typography variant="body1" margin={3} color="textPrimary" align="left">
                        Eu tenho um grande interesse em aprender novas linguagens de programação e, atualmente, conheço bem as ferramentas de programação Java, JavaScript, HTML, CSS, Bootstrap, MySQL, Spring Boot, Sass, React, TypeScript, Git e GitHub. Além disso, possuo habilidades em liderança, trabalho em equipe, métodos ágeis (Scrum), orientação para o futuro, e sou muito persistente em busca de soluções.
                    </Typography>
                    <Typography variant="body1" margin={3} color="textPrimary" align="left">
                        Fora isso, gosto de ler livros, assistir a documentários, e me exercitar ao ar livre. No geral, sou uma pessoa curiosa, dedicada e apaixonada pelo mundo da tecnologia, sempre procurando novas oportunidades para aprender e crescer. 💖
                        
                        Convido vocês para ver meus projetos no Github: https://github.com/Caroline-Viana
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem