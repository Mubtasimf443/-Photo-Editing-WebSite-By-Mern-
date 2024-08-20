/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 


import React, { useCallback, useState } from 'react'
import WebIcon from '../icons/WebIcon'
import { useSelector,useDispatch } from 'react-redux'
import actions from '../redux/actions'
import { addTypeData, returnTypeObj } from '../redux/action'
import IconsOnly from '../icons/IconsOnly'
import { resizeQualityChangeImage } from '../utils/resizeQualityChangeImage'
import { errToast } from '../utils/toast'
import { log } from '../utils/smallUtils'
import { BusyReason } from '../redux/BusyReason'
import LoaderIcon from '../icons/LoaderIcon'


let style = {
    position :'absolute' ,
    top:'3.24em',
    left :'0.7em' ,
    display :'flex',
    flexDirection:'column',
    width :'27em',
    background :'#020513',
    padding:'1.3em 1em',
    borderRadius :'1em',
    rowGap :'1em' ,
    transition:'all 0.4s ease-in'
}





const ResizeSlider = () => {
  let [quality,setQuality] = useState(100)

  const dispatch =useDispatch()

    let {status ,metaObj ,current ,busy} = useSelector(e => {
      let {status ,meta , current ,busy} = e;
     
      if (meta.length !== 0 ) return {status,metaObj :meta[meta.length - 1 ]  , current ,busy}
      return {status,metaObj :{height :100, width :100} ,current ,busy }
    } )


    let left = useCallback(e => {
        return  (status != actions.PENDING_STATUS) ? '-30em' : '0.5em'

    } ,[status])

    let Loader = useCallback(e => { return busy.reason === BusyReason.RESIZE ? <LoaderIcon /> : '' },[busy])





  return (
    <div id='resize_slider'  
    style={{...style ,left :left() 
    }}
    >
        <div className="column">
        <label htmlFor="resize_height_input">
            Quality : {quality}%
        </label>
        <input 
        type="range"
        value={quality}
        min={1} max={100}
        onChange={
          e => {
          if (busy.isBusy === true) return     
          setQuality(e.target.valueAsNumber)
        }}
        id="resize_height_input" 
       
        />
        </div>
        <div className="column">
        <label htmlFor="resize_height_input">
        Width:{metaObj.width}
        </label>
        <input 
        value={metaObj.width}
        max={6000} 
        min={1}
        onChange={e => { 
          if (busy.isBusy === true) return     
          dispatch(addTypeData(actions.ADD_METADATA_WIDTH, { width : e.target.valueAsNumber }))
        }}
        type="range"
        id="resize_Width_input" 
        />

        </div>
        <span className='row ai_center cgp_1'>
        <button 
        onClick={e => {
          if (current === 'none' ) return errToast('please upload an image')
            if (busy.isBusy === true) return log('busy')  
            resizeQualityChangeImage({url : current , width :metaObj.width ,quality :quality}, dispatch)
      }}
        className='row ai_center pl_20px' 
        style={{background:'inherit' ,
            border :'2px solid #ffffff20' ,width :'13em'
        }} >
        <IconsOnly name={'reset_image2'} />
            Save Change 
        </button>
        <button 
        onClick={e => {
          if (busy.isBusy === true) return log('busy')  
          dispatch(returnTypeObj(actions.SUCCESS_STATUS))
        }}
        className='row ai_center pl_20px'
         style={{background:'inherit' ,
          border :'2px solid #ffffff20' ,width :'13em'
      }}
        >
         <IconsOnly name={'cencel_hand'} />
         Don't Change
        </button>
        {Loader()}

        </span>
      
    </div>

  )
}

export default ResizeSlider




















