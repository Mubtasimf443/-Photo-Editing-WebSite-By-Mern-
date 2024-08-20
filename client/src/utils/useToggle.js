/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */


import {useState} from 'react'

function useToggle(bollean) {
  let [state , setState ] = useState(bollean !== undefined ? bollean : false )

  const toggle = (value) => {
    setState(prev =>{
        return  typeof value === 'boolean' ? value : !prev
   } )
  }

  return [state ,toggle]

}

export default useToggle









