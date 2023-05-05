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
  <Card sx={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between" }} />

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
      ¿Qué es la reactividad? 
La reactividad es un problema de aprovechamiento emocional, relacionado con la aparición de respuestas reactivas e involuntarias más allá de su rango de utilidad, impidiendo la conversión de emoción en motivación y la activación del sistema cognitivo, que permitiría elegir alternativas más adecuadas y que implicasen voluntariedad y, en consecuencia, autocontrol.
En este programa veremos como tratar, mejorar, solucionar los problemas típicos como cuando perro tira de la correa por querer agredir a otro perro, (valencia negativa) o cuando tira por querer jugar o saludar a otro perro ( valencia positiva). Este programa esta diseñado en 6 sesiones presenciales virtualmente, donde veremos una serie de dinámicas como; trabajos de sin impulsividad (autocontrol y control),  paseos sintonizados, 5 intensidades de la emoción, como recuperar e inducir a un perro emocionalmente mas tranquilo. 
Sesiones: 1 por semana, 1 hora aprox. Precio del paquete 195 euros en formato individualizado. Posibilidad de hacerla grupal presencial online 4 personas.
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
      ¿Qué es el miedo? 
El miedo es una emoción de valencia negativa y genera una sobreactivación que prepara al perro para reaccionar de manera rápida, primeramente huyendo de aquello que lo provoca, aunque ante la posibilidad de huir es fácil que muestre agresividad o incluso indefensión. 
En este programa identificaremos primero si son miedos generalizados o miedos específicos, que trabajaremos personalizadamente con cada perro, creando unas capacidades fuera de la problemática, para que posteriormente pueda superar exitosamente. 
El enfoque de trabajo se hará en cuatro niveles, más uno especial en algunos casos. Iremos superando nivel a nivel y trabajaremos todos los sentidos (tacto, equilibrio oído, vista y olfato) o solo algunos, según el caso, con una serie de niveles progresivos paso a paso.
Primer nivel (pantalla de recuperación, alivio y satisfacción) tacto, equilibrio, moldeados, oído, vista, olfato.
Niveles 2, 3, 4 serán desafíos montados en domicilio para que el perro afronte y aprenda progresivamente unas habilidades necesarias para desarrollar sus capacidades cognitivas, mejorar su gestión emocional y gestión relacional según el desafío seleccionado.
Este programa puede tener meses de trabajo, según el perro, por lo tanto Grancanino ha reducido en 10 sesiones (1 por semana) todo el trabajo pero puede que requiera una continuidad por parte de los tutores en cuanto al trabajo. Precio del paquete, 295 euros en formato individualizado.
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
      El programa para gestionar la frustración de un perro incluye los siguientes contenidos:

Identificación de las situaciones que provocan la frustración del perro, como la falta de atención, la ausencia del dueño, la imposibilidad de acceder a un objeto deseado, etc.

Entrenamiento en habilidades básicas para reducir la frustración, como la paciencia, la autocontrol y la tolerancia a la frustración.

Entrenamiento en obediencia básica para mejorar la comunicación y la relación entre el perro y el dueño, y así evitar situaciones que generen frustración.

Ejercicios de desensibilización y contracondicionamiento para reducir la respuesta emocional del perro ante estímulos que le generen frustración.

Ejercicios de enriquecimiento ambiental para aumentar la estimulación y reducir el aburrimiento, lo que a su vez reduce la probabilidad de que el perro se frustre.

Consejos prácticos para los dueños sobre cómo manejar las situaciones que generan frustración en el perro, como por ejemplo evitar los castigos o recompensar los comportamientos deseables.

Seguimiento y evaluación continua para medir el progreso del perro y ajustar el programa según sea necesario.

En resumen, un programa para gestionar la frustración de un perro que aborda tanto los aspectos conductuales como emocionales del animal, y debe centrarse en el entrenamiento y la educación del dueño para mejorar la relación y la comunicación entre ambos.
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
      El programa para gestionar la obediencia básica del perro incluye los siguientes contenidos:

Enseñanza de órdenes básicas como sentarse, echarse, quedarse quieto, acudir al llamado y caminar con correa sin tirar.

Entrenamiento en el uso correcto de los refuerzos positivos, como las golosinas y los elogios, para motivar al perro a realizar las órdenes correctamente.

Identificación de las señales de comunicación no verbal del perro, como el lenguaje corporal y las expresiones faciales, para mejorar la comunicación entre el perro y el dueño.

Entrenamiento en habilidades sociales, como la interacción con otros perros y personas, y la gestión de la agresividad y el miedo.

Consejos prácticos para el manejo de situaciones específicas, como la socialización de cachorros, la corrección de malos hábitos y la prevención de problemas de comportamiento.

Seguimiento y evaluación continua para medir el progreso del perro y ajustar el programa según sea necesario.

En resumen, el programa para gestionar la obediencia básica se centra en el entrenamiento de las órdenes básicas y en la educación del dueño para mejorar la comunicación y la relación con el perro. También debe abordar la gestión de las habilidades sociales y proporcionar consejos prácticos para el manejo de situaciones específicas.
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
      El programa para gestionar la obediencia avanzada del perro podría incluir los siguientes contenidos:

Enseñanza de órdenes avanzadas, como el salto, el volteo, el traer objetos específicos y la identificación de objetos mediante el olfato.

Entrenamiento en el uso de refuerzos positivos de mayor nivel, como el juego y las actividades recreativas, para motivar al perro a realizar tareas más complejas.

Identificación de las señales de comunicación no verbal del perro a un nivel más avanzado, incluyendo la lectura de las expresiones faciales y las posturas corporales más sutiles.

Entrenamiento en habilidades específicas para actividades deportivas, como el agility, el flyball y el rastreo.

Consejos prácticos para el manejo de situaciones específicas en el contexto de las actividades deportivas, como la corrección de malos hábitos específicos a cada deporte y la prevención de lesiones.

Seguimiento y evaluación continua para medir el progreso del perro y ajustar el programa según sea necesario.

En resumen, un programa para gestionar la obediencia avanzada de un perro debe centrarse en la enseñanza de órdenes más complejas, en el uso de refuerzos positivos de mayor nivel y en la mejora de la comunicación entre el perro y el dueño. También debe abordar habilidades específicas para actividades deportivas y proporcionar consejos prácticos para el manejo de situaciones específicas en el contexto de cada actividad.
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
      El club Cachorro ofrece las siguientes actividades y contenidos.
Socialización: El club puede ofrecer oportunidades de socialización para los cachorros, como jugar juntos en un área segura y supervisada, lo que les permite interactuar con otros cachorros y personas de manera positiva.

Ejercicio y juego: Los cachorros necesitan mucho ejercicio y juego para mantenerse saludables y felices. El club puede ofrecer actividades que involucren el juego y el ejercicio, como el lanzamiento de pelotas o juegos de persecución, para mantener a los cachorros activos y ocupados.

Entrenamiento de obediencia básica: El club puede ofrecer entrenamiento básico de obediencia para ayudar a los dueños a enseñar a sus cachorros órdenes básicas como sentarse, quedarse quieto, acudir al llamado y caminar con correa sin tirar.

Educación sobre la salud y la nutrición: El club puede ofrecer información y consejos sobre la salud y la nutrición de los cachorros, como la importancia de la vacunación y la dieta adecuada.

Consejos para el cuidado del cachorro: El club puede proporcionar consejos prácticos para el cuidado del cachorro, como la higiene y la preparación para las visitas al veterinario.

Actividades sociales para dueños de cachorros: El club puede ofrecer actividades sociales para los dueños de cachorros, como charlas y reuniones, lo que les permite compartir experiencias y consejos.

Actividades especiales: El club puede organizar actividades especiales, como fiestas de cumpleaños para cachorros, sesiones de fotos y otras actividades para celebrar los logros y los hitos de los cachorros.

En resumen, el club de cachorros ofrece actividades y contenidos que promuevan la socialización, el ejercicio, la educación y el cuidado de los cachorros, y brindar un espacio seguro y supervisado para que los cachorros interactúen con otros cachorros y personas de manera positiva. Además, también puede ofrecer oportunidades para que los dueños de cachorros compartan experiencias y consejos.
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
      Las olimpiadas caninas son un conjunto de actividades que se realizan en competiciones entre perros y sus dueños. Las actividades y contenidos que pueden tener unas olimpiadas caninas son:

Pruebas de agilidad: Esta actividad se enfoca en la capacidad del perro para superar obstáculos en un circuito establecido. Se miden la velocidad, la habilidad y la agilidad del perro.

Pruebas de obediencia: Esta actividad se enfoca en la capacidad del perro para responder a órdenes básicas y avanzadas. Se miden la obediencia y la capacidad de los perros para realizar tareas precisas y complejas.

Carreras: Esta actividad se enfoca en la velocidad y la resistencia del perro. Se miden la velocidad, la capacidad de correr durante largas distancias y la resistencia del perro.

Juegos y actividades recreativas: Esta actividad se enfoca en la capacidad del perro para jugar y divertirse. Incluye actividades como lanzamiento de pelotas, juegos de buscar y otros juegos interactivos entre el perro y su dueño.

Actividades de búsqueda y rastreo: Esta actividad se enfoca en la capacidad del perro para buscar y rastrear objetos y personas. Incluye actividades como la búsqueda de objetos y la identificación de olores específicos.

Concursos de belleza: Esta actividad se enfoca en la apariencia del perro y su capacidad para cumplir con los estándares de raza. Los perros son juzgados en función de su apariencia, su conformación y su elegancia.

En resumen, las olimpiadas caninas pueden incluir una variedad de actividades para evaluar la capacidad y habilidades de los perros, así como la relación entre el perro y su dueño. Estas actividades pueden incluir pruebas de agilidad, obediencia y carreras, así como juegos y actividades recreativas y de búsqueda y rastreo. También pueden incluir concursos de belleza para juzgar la apariencia del perro y su conformación.
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
      ¿Qué es la salud comportamental? 
Es un análisis completo y exhaustivo que abarca cuatro dimensiones; (emocional, cognitiva, social y física) medido por el profesional (cuando el curso se imparta online, la medición se hará a través un cuestionario), donde quedará reflejado con claridad qué dimensiones y bases son necesarias trabajar y mejorar. 
Este programa está diseñado para mejorar conductas o tener un perro mas feliz independientemente de la problemática que exista. Este paquete se realiza en 6 semanas (sesiones) de 1 hora aproximadamente. El precio del paquete son 195 euros en formato individualizado. Existe la posibilidad de hacer sesiones presenciales u online de hasta 4 personas. Se medirá la salud comportamental al inicio y al final para analizar las mejoras de cada perro.
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