import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function CarouselComponent() {
  var items = [
    {
      name: 'Cursos #1',
      description: 'The best dog course in the market for train dog obedience!',
    },
    {
      name: 'Cursos #2',
      description: 'The best dog course in the market for train dog dominance!',
    },
  ]
  return (
    <Carousel sx={{ width: 800, height: 800 }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it Out!</Button>
    </Paper>
  )
}
export default CarouselComponent
