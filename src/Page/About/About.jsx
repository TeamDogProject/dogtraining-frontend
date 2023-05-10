import React from 'react'
import ResponsiveAppBar from '../../Components/AppBar/AppBar'
import { Box, Container, Grid, Typography } from '@mui/material'

function About() {
  return (
    <div className="about">
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '900px',
                height: '100%',
                paddingTop: 5,
                paddingBottom: 5,
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontFamily: 'roboto',
                  color: 'inherit',
                  fontWeight: 'bold',
                }}
              >
                Dogtrainig
              </Typography>
              <Typography
                component="p"
                variant="body1"
                width={'100%'}
                sx={{
                  width: '100%',
                  maxWidth: '900px',
                  fontFamily: 'roboto',
                  color: 'inherit',
                  textAlign: 'justify',
                }}
              >
                Dog Training es una plataforma de entrenamiento para perros,
                queremos convertirnos en un referente nacional en la formación y
                entrenamiento canino de personas que quieran convertirse en
                entrenadores profesionales y ayudar a usuarios con problemas de
                conducta en sus mascotas.
              </Typography>
              <br />
              <Typography
                sx={{
                  width: '100%',
                  maxWidth: '900px',
                  fontFamily: 'roboto',
                  color: 'inherit',
                  textAlign: 'justify',
                }}
              >
                Nuestro proyecto nace por el incremento de mascotas en los
                hogares españoles. El ritmo de vida de muchos propietarios
                termina afectando, en muchos casos, a la conducta de los perros
                y la relación con ellos.
              </Typography>
              <br />
              <Typography>
                En 2023 ha habido un cambio legislativo en España, que requerirá
                a los propietarios de perros la realización de cursos
                obligatorios para la tenencia y manejo de esto. Hemos diseñado
                un programa de formación adaptado tanto en modalidad de
                formación online, como presencial.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About
