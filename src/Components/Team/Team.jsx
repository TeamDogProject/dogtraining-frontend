import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Grid } from '@mui/material';  

function Team(){

  return (
    <>
      <Grid
        spacing={2}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100%',
        }}
      >
        <Grid item xs={12} md={4} lg={4}>
          <Card
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Card sx={{ maxWidth: 500, marginBottom: 10, boxShadow: 0 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="src/assets/Images/tino.png"
                title="Tino Míguez"
              />
              <CardContent sx={{ maxHeight: 500, textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Sin Ansiedad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nuestro plan de trabajo y objetivo es que el perro desarrolle
                  unas capacidades de afrontamiento activo, que son habilidades
                  para el afrontamiento necesarias para que el perro elija
                  voluntariamente, de manera proactiva y con emocionalidad de
                  valencia positiva, entrar y/o permanecer en la situación
                  activadora de la ansiedad.
                  <br></br>
                  <br></br> Que desarrolle también capacidades de afrontamiento
                  pasivo, que son habilidades para el afrontamiento de la
                  situación aquellas necesarias para que el perro permanezca y
                  acepte la situación activadora de la ansiedad, aunque no desee
                  permanecer en ella. <br></br>
                  <br></br>Estas situaciones serán fuera de la situación
                  generadora de ansiedad para ir progresivamente aumentando
                  intensidad hasta llegar a la situación real de ansiedad. El
                  programa de ansiedad es un programa cerrado de 10
                  sesiones-semanas que nos permite solucionar el problema de
                  ansiedad virtualmente, con sesiones semanales tuteladas y con
                  contenido en video, que explica paso a paso y de manera
                  personalizada, las pautas a seguir por el educador canino, con
                  una duración de 60 min. Aprox. con un trabajo autónomo que
                  realizaran los tutores en su domicilio semanalmente siguiendo
                  las pautas y trabajos del educador. <br></br>
                  <br></br>El coste del programa de tutor individual es de 295
                  euros, existiendo también la posibilidad de realizar el
                  programa online grupal 4 personas.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="https://www.linkedin.com/in/constantinomiguezmartel">
                  <Button size="small">
                    <LinkedInIcon fontSize="large"></LinkedInIcon>
                  </Button>
                </Link>
                <Link to="http://www.github.com/TinoMiguez">
                  <Button size="small">
                    <GitHubIcon
                      fontSize="large"
                      sx={{ color: 'black' }}
                    ></GitHubIcon>
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Card
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Card sx={{ maxWidth: 500, marginBottom: 10, boxShadow: 0 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="src/assets/Images/tino.png"
                title="Tino Míguez"
              />
              <CardContent sx={{ maxHeight: 500, textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Sin Ansiedad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nuestro plan de trabajo y objetivo es que el perro desarrolle
                  unas capacidades de afrontamiento activo, que son habilidades
                  para el afrontamiento necesarias para que el perro elija
                  voluntariamente, de manera proactiva y con emocionalidad de
                  valencia positiva, entrar y/o permanecer en la situación
                  activadora de la ansiedad.
                  <br></br>
                  <br></br> Que desarrolle también capacidades de afrontamiento
                  pasivo, que son habilidades para el afrontamiento de la
                  situación aquellas necesarias para que el perro permanezca y
                  acepte la situación activadora de la ansiedad, aunque no desee
                  permanecer en ella. <br></br>
                  <br></br>Estas situaciones serán fuera de la situación
                  generadora de ansiedad para ir progresivamente aumentando
                  intensidad hasta llegar a la situación real de ansiedad. El
                  programa de ansiedad es un programa cerrado de 10
                  sesiones-semanas que nos permite solucionar el problema de
                  ansiedad virtualmente, con sesiones semanales tuteladas y con
                  contenido en video, que explica paso a paso y de manera
                  personalizada, las pautas a seguir por el educador canino, con
                  una duración de 60 min. Aprox. con un trabajo autónomo que
                  realizaran los tutores en su domicilio semanalmente siguiendo
                  las pautas y trabajos del educador. <br></br>
                  <br></br>El coste del programa de tutor individual es de 295
                  euros, existiendo también la posibilidad de realizar el
                  programa online grupal 4 personas.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="https://www.linkedin.com/in/constantinomiguezmartel">
                  <Button size="small">
                    <LinkedInIcon fontSize="large"></LinkedInIcon>
                  </Button>
                </Link>
                <Link to="http://www.github.com/TinoMiguez">
                  <Button size="small">
                    <GitHubIcon
                      fontSize="large"
                      sx={{ color: 'black' }}
                    ></GitHubIcon>
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </>
  )
    }


    export default Team 