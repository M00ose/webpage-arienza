import React from 'react';

import { interior, house, hotel, construction } from '../assets';
import styles from '../style';

const Projects = () => {
  return (
    <div className='grid h-screen p-12 sm:h-full xs:h-full md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
      <div className='h-[100%]'>
        <img src={interior} alt="interior" className='h-full w-full object-cover' />
      </div>

      <div className='h-[100%] md:col-span-2 sm:col-span-1 xs:col-span-1 flex flex-col'>
        <div>
          <h1 className={`${styles.heading2}`}>Interior</h1>
          <div className={`${styles.paragraph}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa animi rem officia provident ipsum enim.</div>
        </div>  
        <img src={house} alt="house" className='grow w-full object-cover'/>
        <div>
          <h1 className={`${styles.heading2}`}>Residential</h1>
          <div className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam incidunt ipsa porro alias veniam deserunt doloribus pariatur.</div>
        </div>  
      </div>

      <div className={`${styles.flexStart} relative h-[100%]`}>
        <div className='w-full h-full bg-primary absolute opacity-40 z-10'></div>
        <img src={hotel} alt="hotel" className='h-full w-full object-cover absolute z-0'/>
        <div className='z-20 p-4 h-96 w-full'>
          <h1 className={`${styles.heading2} overflow-clip`}>Hotels and Condominiums</h1>
          <p className={`${styles.paragraph}`}>This font is called Karla and this is the font that we will use for normal texts of the website.</p>
        </div>
        
      </div>

      <div className='h-[80%]'>
        <img src={construction} alt="construction" className='h-full w-full object-cover'/>
        <div className='mt-4 h-[20%]'>
          <h1 className={`${styles.heading2}`}>Construction</h1>
          <p className={`${styles.paragraph}`}>This font is called Karla and this is the font that we will use for normal texts of the website.</p>
        </div>
        
      </div>

    </div>
    
  )
}

export default Projects