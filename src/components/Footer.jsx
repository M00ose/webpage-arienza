import styles from '../style';

const Footer = () => {
  return (
    <div className={`bg-primary h-[30%] mt-24 grid grid-cols-7 gap-20 ${styles.paragraph}`}>
      <div className='col-span-3 relative'>
        <div className='text-offWhite text-3xl font-karla w-[60%]'>Want to find out how we can help?</div>
        <div className='absolute z-[0] h-24 w-24 top-0 left-20 rounded-full medium__gradient'/>
        <div className='absolute z-[1] h-48 w-48 bottom-40 left-10 rounded-full white__gradient'/>
        <div className='absolute z-[0] h-24 w-24 bottom-20 left-20 rounded-full light__gradient'/>
        <button type="button" className={`${styles.button} mb-12`}>Book A Meeting</button>
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <div>Call</div>
          <div className='grow h-px w-full bg-offWhite'></div>
        </div>
        <div>092008688</div>
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <div>Email</div>
          <div className='grow h-px w-full bg-offWhite'></div>
        </div>
        <div>arienza@gmail.com</div>
      </div>
      <div className='col-span-2'>
        <div className='flex items-center gap-2'>
          <div>Visit</div>
          <div className='grow h-px w-full bg-offWhite'></div>
        </div>
        <div>
          2 Torre Lorenzo, 2426 Taft Avenue, Malate, Manila
        </div>
      </div>
    </div>
  )
}

export default Footer