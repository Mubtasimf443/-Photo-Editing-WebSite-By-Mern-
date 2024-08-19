/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { log } from '../utils/smallUtils';
import getFilterCSS from '../utils/getFilterCSS';
import { useState } from 'react';

const Img = ({url}) => {
    const meta = useSelector(store => store.meta)
    let {name,value} = useSelector(e => e.filter)
    let filterCall = useCallback(e => getFilterCSS({name , value}),  [value,name])
    let [zoomCSS,setZoomCSS] = useState(100 / 100)
    const heigth = useCallback(e => {
      if (meta.length === 0 ) return '50em'
      return  (meta[meta.length -1].height / 10).toString() + 'mm' 
    },[ meta])

    const width = useCallback(e => {
      if (meta.length === 0 ) return '100em'
      return  (meta[meta.length -1].width / 10).toString() + 'mm' 
    },[ meta])
    if (url.length === 0) return (<div><h2>please add an Image</h2> </div>)
   
   
  //   let nameCall = useCallback(e => name  ,  [name])
    return (
        <div id='ab' onDoubleClick={e => setZoomCSS(1)} onClick={e => setZoomCSS(e => e + 0.6) } style={{
        width:width(),
        minHeight : heigth() ,
        maxHeight :'500vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundImage:'url("' + url[url.length - 1] + '")',
        filter:filterCall(),
        cursor:'zoom-in',
        zoom :zoomCSS ,
    

         }} >

        </div>

    )
  }

export default Img
