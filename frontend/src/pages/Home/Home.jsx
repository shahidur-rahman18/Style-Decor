import { useState } from 'react';
import Plants from '../../components/Home/Plants'
import Hero from './Hero'

const Home = () => {
   const [services, setServices] = useState([]);
   
    const featuredServices = services.slice(0, 3);
  return (
    <div>
      <Hero></Hero>
      <Plants />
      {/* More components */}
    </div>
  )
}

export default Home
