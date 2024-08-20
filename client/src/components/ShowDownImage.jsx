/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */


import WebIcon from '../icons/WebIcon'

const ShowDownImage = ({current}) => {
 
    if ( current === 'none') return <></>

  return (
 
   <WebIcon 
   title={'Download Image'}
   filterName={'SAVE_CHANGE'}
  
   />

  )
}

export default ShowDownImage


















