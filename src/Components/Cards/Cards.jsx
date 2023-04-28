import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg"
        title="Sin Ansiedad"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sin Ansiedad
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Programa  SIN ANSIEDAD.  Presencial/Online
Nuestro plan de trabajo y objetivo es que el perro desarrolle unas capacidades de afrontamiento activo, que son habilidades para el afrontamiento necesarias para que el perro elija voluntariamente, de manera proactiva y con emocionalidad, de valencia positiva, entrar y/o permanecer en la situación activadora de la ansiedad. Que desarrolle también capacidades de afrontamiento pasivo, que son habilidades para el afrontamiento de la situación aquellas necesarias para que el perro permanezca y acepte la situación activadora de la ansiedad aunque no desee permanecer en ella. Estas situaciones serán fuera de la situación generadora de ansiedad para ir progresivamente aumentando intensidad hasta llegar a la situación real de ansiedad.
El programa de ansiedad es un programa cerrado de 10 sesiones-semanas que nos permite solucionar el problema de ansiedad virtualmente, con sesiones semanales tuteladas y con contenido en video, que explica paso a paso y de manera personalizada, las pautas a seguir por el educador canino, con una duración de 60 min. Aprox. Y con un trabajo autónomo que realizaran los tutores en su domicilio semanalmente siguiendo las pautas y trabajos del educador. El coste del programa de tutor individual es de 295 euros, existiendo también la posibilidad de realizar el programa online grupal 4 personas.
Este programa esta enfocado a los problemas de ansiedad típicos como: 
• Quedarse solos en casa.
• Llegar y permanecer en la sala de espera del veterinario.
• Llegar y permanecer en residencias caninas, estar en perreras.
• Llegar y permanecer en una casa desconocida.
• Asistir a la preparación de su baño, u otras formas de aseo, y recibirlo.
• Recibir tratamientos veterinarios largos, como inyecciones diarias, o curas reiteradas de lesiones.
• Permanecer atados.
• Asistir a mudanzas familiares y a sus preparativos.
• Encontrarse y tener que tratar sujetos, caninos o humanos, desconocidos.
• Viajar y permanecer en coches u otros medios de transporte.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">¡Inscríbete!</Button>
        <Button size="small">Saber Más</Button>
      </CardActions>
   
    </Card>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/husky-animal_FP9GIIHY0F.jpg"
      title="Reactividad"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Reactividad
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>
  
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/VTLECU25XL.jpg"
      title="Gestión del miedo"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Gestión del miedo
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/UKITL3S9TC.jpg"
      title="Frustración"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Frustración
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/UT7IO1NLVQ.jpg"
      title="Obediencia Básica"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Obediencia Básica
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/3JEC5JEU7O.jpg"
      title="Obediencia Avanzada"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Obediencia Avanzada
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg"
      title="Club Cachorro"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Club Cachorro
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://cdn.stocksnap.io/img-thumbs/280h/animals-dogs_HBPNY9BJPY.jpg"
      title="Olimpiadas Caninas"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Olimpiadas Caninas
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://image.shutterstock.com/image-photo/puppy-260nw-549575962.jpg"
      title="Salud Comportamental"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Salud Comportamental
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum magnam delectus reiciendis molestiae minus molestias dolorum porro labore repellendus! Deserunt modi libero laudantium delectus tenetur deleniti cum. Consequatur, voluptas!r
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">¡Inscríbete!</Button>
      <Button size="small">Saber Más</Button>
    </CardActions>
  </Card>
  </>
  );
}

export default MediaCard