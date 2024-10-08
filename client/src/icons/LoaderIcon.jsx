/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */ 

import  { useState } from 'react'
import { log } from '../utils/smallUtils'


const load10 = '/icon/load10.png'
const load25 = '/icon/load25.png'
const load40 = '/icon/load40.png'
const load60 = '/icon/load60.png'
const load75 = '/icon/load75.png'
const load90 = '/icon/load90.png'



const LoaderIcon = ({className }) => {
    let [src , setSRC] = useState(load10);

    function load(time) {
       return setTimeout(() => {
          if (src === load10) {
            setSRC(load90)
            return load(2505)
          }

         if (src === load25) {
            setSRC(load90)
            return load(3005)
          }

          
          if (src === load40) {
            setSRC(load60)
            return load(2505)
          }

               
          if (src === load60) {
            setSRC(load10)
            return load(2505)
          }
               
          if (src === load75) {
            setSRC(load40)
            return load(2505)
          }


               
          if (src === load90) {
            setSRC(load60)
            return load(2505)
          }

        }, time);
    }

    load(400)
  return (
    <div>
      <img 
      className={className ? className : 'img_icons'}
      src={src} alt="" />
    </div>
  )
}

export default LoaderIcon








