/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */


import React from 'react'
import { copyMetaData } from '../utils/smallUtils'
import { useSelector } from 'react-redux'
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


















