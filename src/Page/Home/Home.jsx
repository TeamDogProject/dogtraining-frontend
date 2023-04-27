
import MediaCard from '../../Components/Cards/Cards'
import CarouselRatio from './Carroussel/Carroussel'
import './Home.css'


function Home() {
  return (
    <div className='home'>
      <CarouselRatio />
      <MediaCard />
      
    </div>
  )
}

export default Home