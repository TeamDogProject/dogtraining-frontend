import React from 'react'
import ResponsiveAppBar from '../../Components/AppBar/AppBar'
import { Box, Container, Grid, Typography } from '@mui/material'

function About() {
  return (
    <div className="about">
      <Container maxWidth="xl">
        <Grid item xs={12} md={4}>
          <Box sx={{marginTop: 10, width: '80vw', marginLeft: 10 }}>
            <Typography
              component="div"
              variant="h2"
              sx={{ fontFamily: 'roboto', color: 'inherit' }}
            >
              Dogtrainig
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{ fontFamily: 'roboto', color: 'inherit', marginTop: 3 }}
            >
              Dog Training es una plataforma de entrenamiento para perros, queremos convertirnos
              en un referente nacional en la formación y entrenamiento canino de personas que
              quieran convertirse en entrenadores profesionales y ayudar a usuarios con problemas
              de conducta en sus mascotas.
              <br />
              <br /> Nuestro proyecto nace por el incremento de mascotas en los
              hogares españoles. El ritmo de vida de muchos propietarios termina
              afectando, en muchos casos, a la conducta de los perros y la
              relación con ellos. 
              <br />
              <br />
              En 2023 ha habido un cambio legislativo en España, que requerirá a
              los propietarios de perros la realización de cursos obligatorios
              para la tenencia y manejo de esto. Hemos diseñado un programa de
              formación adaptado tanto en modalidad de formación online, como
              presencial.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </div>
  )
}

export default About
