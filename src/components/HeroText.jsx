import { useEffect } from 'react';
import gsap from 'gsap';
import ReactRotatingText from 'react-rotating-text';

const HeroText = () => {
    useEffect(() => {
        gsap.to('.heroText', {
            y: 0,
            x: 0,
            stagger: 0.05,
            delay: 0.5,
            duration: 1,
            opacity: 1,
            ease: 'power1.inOut',
        });
    },[]);

    return (
    <div>
        <div className='line1 heroText'>The
        <span className='line1 heroText'> pathway </span>
        </div>
        <div className='line1 heroText'>to 
        <span className='line1 heroText'> your </span>
        <span className='line1 heroText'>new </span>
        <span className='line1 heroText'><ReactRotatingText items={['home.', 'building.','condominium.', 'hotel.']} />
</span>
        </div>
    </div>
  )
}  

export default HeroText;