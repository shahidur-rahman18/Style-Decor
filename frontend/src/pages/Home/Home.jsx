import { useState } from 'react';
import Plants from '../../components/Home/Plants'
import Hero from './Hero'
import Reveal from '../../components/Animation/Reveal';

const Home = () => {
  const [services, setServices] = useState([]);

  const featuredServices = services.slice(0, 3);
  return (
    <div>
      <Hero></Hero>
      <Reveal>
        <div className='text-center mt-10' >
          <p className='text-primary font-bold ' >Our Services </p>
          <h1 className='mt-2 mb-4 text-3xl  lg:text-5xl font-bold' >Decoration Packages
            <span className='text-primary text-3xl  lg:text-5xl font-bold'> For Every Occasion</span> </h1>
          <p className='text-gray-400 text-sm ' > From intimate gatherings to grand celebrations, we have the perfect decoration solution for your special moments. </p>
        </div>
      </Reveal>
      <Plants />

    </div>
  )
}

export default Home
