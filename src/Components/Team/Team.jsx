import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Grid, Container, Typography, Button, CardMedia, CardContent,CardActions, Card} from '@mui/material';  


function Team(){

  return (
    <>
     <Container item xs={12} md={12} lg={12} sx={{marginBottom:5,marginTop:2 }}>
     <Typography variant="h2">Wellcome Dogtraining</Typography>
     <Typography item xs={12} md={12} lg={12} variant="body2" color="text.secondary" sx={{marginBottom:8, marginTop:2 }}>
       Dogtraining surge del entusiasmo por la tecnología y el amor por los animales de nuestro equipo de 3 programadores, quienes se han unido a un adiestrador y formador de guías caninos 
       ara crear una herramienta revolucionaria que te ayudará a superar los desafíos de conciliar tu vida profesional con el cuidado y adiestramiento de tu mascota. Con Dogtraining,
      podrás convertirte en un referente en la formación y adiestramiento canino. 
     <br />
     <br />
     El ritmo de vida actual y las responsabilidades profesionales de los propietarios de mascotas dificultan la conciliación de la vida personal. Entre múltiples compromisos 
     y escasas zonas verdes en entornos urbanos, cada vez tenemos menos tiempo para dedicar a nuestras mascotas, lo que puede provocar problemas de comportamiento y obediencia.

     <br />
     <br/>
     Simplifica tu vida y disfruta de una relación equilibrada y armoniosa con tu compañero peludo. </Typography>
     
     
   </Container>

      <Grid
        spacing={0}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          
          marginBottom: '100px',
          justifyContent: 'space-around', 
         
        }}
      >
        <Grid item xs={12} md={4} lg={4}>
          <Card item xs={12} md={4} lg={4}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              height: '100%',
              
            }}
          >
            <Card item xs={12} md={4} lg={4} sx={{ maxWidth: 450, marginBottom: 10, boxShadow: 0, marginLeft:'10px' }}>
              <CardMedia
                sx={{ height: 250, width: 250 , }}
                image="src/assets/Images/tino.png"
                title="Tino Míguez"
              />
              <CardContent  sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Tino Míguez
                </Typography>
                <Typography item xs={12} md={4} lg={4} variant="body2" color="text.secondary">
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
              <CardActions sx={{marginTop:2}}>
             
                <Link to="https://www.linkedin.com/in/constantinomiguezmartel">
                  <Button size="small">
                    <LinkedInIcon fontSize="large" ></LinkedInIcon>
                  </Button>
                </Link>
                <Link to="http://www.github.com/TinoMiguez">
                  <Button size="small">
                    <GitHubIcon
                      fontSize="large"
                      sx={{ color: 'black', }}
                    ></GitHubIcon>
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Card item xs={12} md={4} lg={4}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Card item xs={12} md={4} lg={4} sx={{ maxWidth: 450, marginBottom: 10, boxShadow: 0, marginLeft:'10px' }}>
              <CardMedia
                sx={{ height: 250, width: 250 ,  }}
                image="src/assets/Images/aday.png"
                title="Aday Ortega"
              />
              <CardContent sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Aday Ortega
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Entusiasta de la tecnología, enamorado de los caballos y apasionado del marketing y los proyectos digitales. 
                  <br></br>
                  <br></br>
                  Estudié Marketing y Dirección Comercial en la UCAM Murcia, Master en Dirección Comercial, Marketing y Ventas en la Escuela Canaria de Negocios MBA, 
                  Digital Product & Project Manager en la Escuela de Organización Industrial, Certificado en Scrum Avanzado por el Project Management Institute y 
                  Experto en Transformación Digital y Emprendimiento Digital en la Industria 4.0 por la Fundación Incyde. En 2023 durante 6 meses realicé el Bootcamp Full Stack Desarrollo Web & Apps 
                  de Reboot Academy, 
                  <br></br>
                  <br></br>
                  Desde muy joven he encontrado conexión especial con los animales, practico equitación desde joven, en los caballos he encontrado una fuente de inspiración y equilibrio en mi vida. 
                  
                  Esta pasión me ha enseñado la importancia de la disciplina, la perseverancia y el trabajo en equipo, cualidades que aplico en todos los aspectos de mi carrera profesional.
                  <br></br>
                  <br></br>
                   Con más de 20 años de trayectoria profesional, casi siempre ligado al sector
                  tecnológico, he tenido el privilegio de trabajar en multinacionales como Telefónica, Canon, Pacha, y administraciones públicas,
                   donde he desempeñado roles estratégicos en el ámbito tecnológico, marketing y ventas. En mi carrera he liderado proyectos de gran envergadura, gestionando equipos 
                   multidisciplinarios y conseguido resultados exitosos. Mi enfoque siempre ha estado orientado hacia la innovación, buscando aprovechar al 
                   máximo las oportunidades que la tecnología ofrece para impulsar el crecimiento y la transformación empresarial.
                  
                  
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions sx={{marginTop:2}}>
        
                <Link to="https://www.linkedin.com/in/adayortegarodríguez">
                  <Button size="small">
                    <LinkedInIcon fontSize="large"  ></LinkedInIcon>
                  </Button>
                </Link>
                <Link to="http://www.github.com/AdayOrtega">
                  <Button size="small">
                    <GitHubIcon
                      fontSize="large"
                      sx={{ color: 'black',}}
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
          <Card sx={{ maxWidth: 450, marginBottom: 10, boxShadow: 0, marginLeft:'10px' }}>
            <CardMedia
              sx={{ height: 250, width: 250 , }}
              image="src/assets/Images/cesar.png"
              title="César García"
            />
            <CardContent sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
              <Typography gutterBottom variant="h5" component="div">
              César García
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
            <CardActions  sx={{marginTop:2}}>
              <Link to="https://www.linkedin.com/in/djcesargarcia">
                <Button size="small">
                  <LinkedInIcon fontSize="large" ></LinkedInIcon>
                </Button>
              </Link>
              <Link to="https://www.github.com/djcesargarcia">
                <Button size="small">
                  <GitHubIcon
                    fontSize="large"
                    sx={{ color: 'black', }}
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