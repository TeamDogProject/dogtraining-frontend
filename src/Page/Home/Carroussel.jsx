import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom';


function CarouselRatio() {

    var items = [
        {
            src: "https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg",
            name: "Sin Ansiedad",
            description: "Enseña a tu perro a gestionar su ansiedad",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/husky-animal_FP9GIIHY0F.jpg",
            name: "Reactividad",
            description: "Controla las reacciones de tu perro",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/VTLECU25XL.jpg",
            name: "Gestión del miedo",
            description: "Ayuda a tu perro a superar sus miedos",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/UKITL3S9TC.jpg",
            name: "Frustración",
            description: "Enseña a tu perro a gestionar su frustración",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/UT7IO1NLVQ.jpg",
            name: "Obediencia Básica",
            description: "Adiestramiento básico del perro",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/3JEC5JEU7O.jpg",
            name: "Obediencia Avanzada",
            description: "Adiestramiento avanzado del perro",
        },
        {
            src: "https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-260nw-1048123303.jpg",
            name: "Club Cachorro",
            description: "Diviértete con tu cachorro mientras socializa",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/animals-dogs_HBPNY9BJPY.jpg",
            name: "Olimpiadas Caninas",
            description: "Disfruta y compite con otros perros",
        },
        {
            src: "https://image.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
            name: "Salud Comportamental",
            description: "Enseña comportamientos saludables a tu perro",
        },
    ]

    return (
        <Carousel
            sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto' }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)

            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <>
            <Paper
                sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto', maxWidth: 500, height: 500, border: '2px' }}>
                <h2>{props.item.name}</h2>

                <p>{props.item.description}</p>

                <img src={props.item.src}></img>

            </Paper>

            <Box
                sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto', maxWidth: 500, alignItems: 'center' }}>
                <Link to={'/Courses'}>
                    <Button
                        className="CheckButton"
                    >
                        Saber Más
                    </Button>
                </Link>
            </Box>
        </>
    )

}
export {
    CarouselRatio,
    Item
}