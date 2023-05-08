import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom';


function CarouselRatio() {

    var items = [
        {
            src: "https://los40es00.epimg.net/los40/imagenes/2021/05/26/actualidad/1622021442_567221_1622021709_gigante_normal.jpg",
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
            src: "https://images.prismic.io/wisdom/2fabb777-59dc-4963-a38f-8bd8132c7e10_shutterstock_1048123303_cropped.jpg?auto=compress%2Cformat&rect=241%2C0%2C1440%2C1080&w=1020&h=615",
            name: "Club Cachorro",
            description: "Diviértete con tu cachorro mientras socializa",
        },
        {
            src: "https://cdn.stocksnap.io/img-thumbs/280h/animals-dogs_HBPNY9BJPY.jpg",
            name: "Olimpiadas Caninas",
            description: "Disfruta y compite con otros perros",
        },
        {
            src: "https://www.prensalibre.com/wp-content/uploads/2020/03/Fotos-Arca-de-No%C3%A9-MARZO2020_0002_Layer-21.jpg?resize=1024,671",
            name: "Salud Comportamental",
            description: "Enseña comportamientos saludables a tu perro",
        },
    ]

    return (
        <Carousel
            sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto', fontFamily: 'roboto', width: 500, marginTop: 5.5}}
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
                sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto', maxWidth: 500, height: 500, border: 0, marginLeft: 5, marginRight: 5}}>
                <h1>{props.item.name}</h1>

                <p><h2>{props.item.description}</h2></p>

                <img src={props.item.src}></img>

            </Paper>

            <Box
                sx={{ display: 'flex', flexDirection: 'column', margin: ' 0 auto', maxWidth: 500, alignItems: 'center' }}>
                <Link to={'/Courses'}>
                    <Button
                        className="CheckButton"
                        sx={{ marginTop: 3}}
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