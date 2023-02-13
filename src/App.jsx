import React from 'react'
import styles from './style';

import { Hero, Projects, Stats, Footer } from './components';

const App = () => (
  <div className='bg-transparent w-full overflow-hidden'>
    <div>
      <div>
        <Hero /> 
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
      </div>
    </div>
    <div className={`bg-primary h-screen ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;