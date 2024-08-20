/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { useCallback } from 'react'
import { useSelector } from 'react-redux';
import getFilterCSS from '../utils/getFilterCSS';
import { useState } from 'react';
import { filter  as filterNames} from '../redux/filter';

const Img = () => {
    const {meta,current , filter} = useSelector(store => store)

    let {name,value} = filter
    let filterCall = useCallback(e => getFilterCSS({name , value}),  [value , name])

    let [zoomCSS,setZoomCSS] = useState(100 / 100)

    const heigth = useCallback(e => {
      if (meta.length === 0 ) return '50em'
      return  (meta[meta.length -1].height / 10).toString() + 'mm' 
    },[meta])

    const width = useCallback(e => {
      if (meta.length === 0 ) return '100em'
      return  (meta[meta.length -1].width / 10).toString() + 'mm' 
    },[ meta])
    if (current === 'none') return (<div><h2>please add an Image</h2> </div>)
   
   
  //   let nameCall = useCallback(e => name  ,  [name])
    return (
        <div id='ab' onDoubleClick={e => setZoomCSS(1)} onClick={e => setZoomCSS(e => e + 0.6) } style={{
        width:width(),
      minHeight:heigth(),
       maxHeight :'500vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundImage:'url("' + current + '")',
        filter:filterCall(),
        cursor:'zoom-in',
        zoom :zoomCSS ,
        scale :name === filterNames.SCALE ? value + '%':'none',
        rotate : name === filterNames.ROTATE ? value + 'deg' : 'none'
         }} >

        </div>

    )
  }

export default Img
