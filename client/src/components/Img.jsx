/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { log } from '../utils/smallUtils';
import getFilterCSS from '../utils/getFilterCSS';

const Img = ({url}) => {
    let {name,value} = useSelector(e => e.filter)
    let filterCall = useCallback(e => { log(name); let c = getFilterCSS({name , value});log(c);return c},  [value,name])

    if (url.length === 0) { return (
    <div><h2>please add an Image</h2> </div>
  );
   }
   
  //   let nameCall = useCallback(e => name  ,  [name])
    return (
        <div style={{
        width:'100em' ,
        minHeight :'100vh'  ,
        maxHeight :'500vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundImage:'url("' + url[url.length - 1] + '")',
        filter:filterCall()
       
         }} >

        </div>

    )
  }

export default Img
