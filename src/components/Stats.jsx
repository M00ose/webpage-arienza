import React, { useEffect, useRef, useState } from 'react';
import styles from '../style';

import { dots } from '../assets';


const Stats = () => {
  return (
    <div className={`bg-primary h-[70%] flex justify-between items-center gap-10`}>
      <div className={`grid grid-cols-3 grid-rows-3 grid-flow-rows gap-10 p-4 text-offWhite text-3xl font-karla`}>
        <div className='col-start-3'>
          <h1>451</h1>
          <p>Units Built</p>
        </div>
        <div className='col-start-2'>
        <h1>60</h1>
          <p>Employees</p>
        </div>
        <div className='col-start-1'>
        <h1>60</h1>
          <p>Projects</p>
        </div>
      </div>
      <div className='relative w-[40%]'>
        <img src={dots} alt="dots" />
        <div className='absolute z-[0] h-48 w-48 top-0 right-20 rounded-full medium__gradient'/>
        <div className='absolute z-[1] h-72 w-72 bottom-40 right-10 rounded-full white__gradient'/>
        <div className='absolute z-[0] h-48 w-48 bottom-20 right-20 rounded-full light__gradient'/>
        <button type="button" className={`${styles.button}`}>Learn More</button>
      </div>
    </div>
  )
}

export default Stats