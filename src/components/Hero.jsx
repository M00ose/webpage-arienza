import React from 'react'
import styles from '../style';

import { logo, hero } from '../assets';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <section className=' h-screen w-full flex flex-col justify-between items-start relative'>
      <div className='w-full h-full bg-primary absolute opacity-20 z-10'></div>
      <img src={logo} alt="arienza" className='w-[162px] h-[48px] m-12' />
      <img src={hero} alt="house" className='h-full w-full object-cover absolute mix-blend-overlay z-0'/>
      <div className='text-white text-5xl font-karla mx-12 my-24 w-90 z-20'>
        <HeroText />
        <div className='flex gap-10'>
          <button type="button" className={`${styles.button}`}>Meet Us</button>
        <button type="button" className={`${styles.buttonFilled}`}>Learn More</button>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;