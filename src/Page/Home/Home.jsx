import './Home.css'
import { CarouselRatio } from './Carroussel'
import { UserContext } from '../../context/user'
import { getProfile } from '../../services/userService'
import { useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const Home = () => {

  const { user, setUser } = useContext(UserContext)

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async()=>{
    const result = await getProfile()
    setUser(result)
  }

  return (
    <div className="home" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '800px',
                innerHeight: '100%',
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Typography
                component="div"
                sx={{ fontFamily: 'roboto', color: 'inherit', marginLeft: 5, marginRight: 5 }}
              >
                <div>
                  <h1>DogTraining {user.name}</h1>
                  <p>
                    ¡Bienvenidos a la mejor escuela de adiestramiento de perros
                    de Canarias!<br></br>
                    <br></br> En Dogtraining, nos dedicamos a ofrecer el mejor
                    entrenamiento para perros de todos los tamaños y razas. Ya
                    sea que estés buscando enseñarle a tu cachorro algunos
                    trucos básicos o necesites ayuda con problemas de
                    comportamiento más complejos, ¡estamos aquí para ayudarte!
                    <br></br>
                    <br></br>
                    En nuestra escuela, creemos que cada perro es único y
                    necesita un enfoque personalizado para su entrenamiento. Por
                    eso, trabajamos con cada dueño y su mascota de manera
                    individual para desarrollar un plan de entrenamiento
                    adaptado a sus necesidades específicas.<br></br>
                    <br></br> Nuestros adiestradores están altamente capacitados
                    y tienen años de experiencia en el manejo de todo tipo de
                    perros. Además, nuestra escuela está equipada con las
                    últimas tecnologías de entrenamiento y los mejores
                    materiales para garantizar la comodidad y la seguridad de tu
                    mascota. Nos enorgullece brindar un ambiente seguro y
                    acogedor para que tu perro pueda aprender y crecer en un
                    ambiente positivo. Nos apasiona ayudar a los dueños de
                    perros a desarrollar una relación sólida y duradera con sus
                    perros, por eso, estamos comprometidos a brindar el mejor
                    entrenamiento y soporte para ti y tu mascota.<br></br>
                    <br></br>
                    Si estás buscando una escuela de adiestramiento de perros
                    con un enfoque personalizado y altamente efectivo, ¡no
                    busques más! Contáctanos hoy mismo para conocer nuestros
                    programas y comenzar el camino hacia un perro bien entrenado
                    y feliz. ¡Te esperamos!
                  </p>
                </div>
              </Typography>
            </Box>
            <CarouselRatio />
        
      </div>
  )
}


export default Home