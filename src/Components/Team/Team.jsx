import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Grid, Container, Typography, Button, CardMedia, CardContent,CardActions, Card} from '@mui/material';  
import Tino from '../../assets/Images/tino.png'
import Aday from '../../assets/Images/aday.png'
import Cesar from '../../assets/Images/cesar.png'

function Team(){

  return (
    <>
     <Container item xs={12} md={12} lg={12} sx={{marginBottom:5,marginTop:2 }}>
     <Typography variant="h3" component="h3" textAlign={"center"}>Conoce al equipo de desarrolladores de DogTraining</Typography>
     <Typography item xs={12} md={12} lg={12} variant="body2" color="text.secondary" sx={{marginBottom:8, marginTop:2 }}>
       Dogtraining surge del entusiasmo por la tecnología y el amor por los animales de nuestro equipo de 3 programadores, quienes se han unido a un adiestrador y formador de guías caninos 
       para crear una herramienta revolucionaria que te ayudará a superar los desafíos de conciliar tu vida profesional con el cuidado y adiestramiento de tu mascota. Con Dogtraining,
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
                sx={{ height: 250, width: 250 , margin:'0 auto' }}
                image={Tino}
                title="Tino Míguez"
              />
              <CardContent  sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  Tino Míguez
                </Typography>
                <Typography item xs={12} md={4} lg={4} variant="body2" color="text.secondary">
                Soy un profesional que ha tenido la oportunidad de aprender y desarrollarme en entornos laborales muy diversos, tanto en España como en el extranjero. Mi trayectoria me ha llevado a trabajar en empresas muy dispares, como Endesa, Canarias7 y France Telecom.<br></br>
                <br></br>Soy Licenciado en Historia y Máster en Estudios Estratégicos y Seguridad Internacional, lo que me ha permitido tener una visión amplia y crítica de los procesos históricos, políticos y económicos que influyen en el mundo empresarial actual.
                Recientemente he estudiado programación para convertirme en desarrollador web full stack.<br></br>
                <br></br>Mi trayectoria profesional ha estado marcada por la diversidad.Trabajar en diferentes sectores, con equipos multidisciplinares y multiculturales en contextos internacionales, me ha enseñado a valorar la importancia de la adaptabilidad y la flexibilidad, habilidades esenciales en un mundo globalizado y en constante cambio.
                En cada una de estas experiencias laborales, he aprendido de los diferentes enfoques y filosofías que  utilizan en distintas empresas y sectores, obteniendo una visión amplia y diversa, capaz de integrar perspectivas diversas para la toma de decisiones estratégicas.  
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
                sx={{ height: 250, width: 250 , margin:'0 auto'}}
                image={Aday}
                title="Aday Ortega"
              />
              <CardContent sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
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
              sx={{ height: 250, width: 250, margin:'0 auto' }}
              image={Cesar}
              title="César García"
            />
            <CardContent sx={{ maxHeight: 'auto', textAlign: 'justify' }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:'center' }}>
              César García
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Apasionado por la tecnologia y el desarrollo web con experiencia gracias 
                a que ha sido participante en diferentes programas, como el programa
                Diginnova - Becas África ,Grupo Galaco, Betanzos - Cabo Verde y ha obtenido diferentes becas gracias a la Fundación Universitaria
                de Las Palmas.
                <br></br>
                <br></br> En cuanto a la formación, estoy Graduado en Seguridad y Control de Riesgos 
                por la Universidad de Las Palmas, destacando en su título final de proyecto, un proyecto que 
                en el mundo de la seguridad y de las emergencias tuvo repercusión en Canarias, ya que hace uso de drones RPAS.
                Mis prácticas fueron realizadas en la Jefatura de la Policía Local de Las Palmas de GC, pasando
                por las distintas unidades del cuerpo policial, desde las unidades caninas hasta bomberos. Además, 
                he cursado un FP2 en el año 2010 sobre desarrollo de aplicaciones informáticas, pero mi forma autodidacta
                en cuanto al aprendizaje me ha permitido estar al día de todo.
                <br></br>
                <br></br>Actualmente, me encuentro finalizando el Bootcamp en Reboot Academy de Full Stack de Desarrollo Web y Mobile.
                <br></br>Por último, destacar que he obtenido títulos oficiales de Idiomas como son el First Certificate B1, B2 y tengo cursos 
                de competencia comunicativa de C1, siendo otro de mis principales trabajos el mundo de la música ya que compongo música 
                electrónica desde los 16 años y sigo ampliando conocimientos también en este plano profesional que día a día avanza
                de forma rápida.

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