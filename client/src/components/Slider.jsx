/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { log } from '../utils/smallUtils'
import { filter } from '../redux/filter.jsx'
import { useState } from 'react'
import actions from '../redux/actions'
import { returnTypeValue } from '../redux/action'
import { AddFilter } from '../utils/AddFilterInImage.js'
import { BusyReason } from '../redux/BusyReason.jsx'
import LoaderIcon from '../icons/LoaderIcon.jsx'
const { NONE,BRIGHTNESS,BLUR , SATURATION,HUE,SCALE,CONTRAST , GRAYSCALE ,ROTATE} = filter



const Slider = () => {
    let {current, busy ,filter  }= useSelector(store => store)
    let {name , value} = filter ;
    const [newVal,setNewVal] = useState(value)
    const dispatch = useDispatch()
    const top = useCallback(() => { return name !== NONE ? '4em' :'-5em' },[name] )
    const zIndex = useCallback(e => {return name !== NONE ? '100' :'-1000' },[name])
    const max = useCallback(e => {
        if (name === SATURATION) return 200
        if (name === BRIGHTNESS) return 200
        if (name === SCALE) return 200
        if (name === BLUR) return 20
        if (name ===ROTATE ) return 360
        return 100

    } , [name])


    const actionType = useCallback(e => {
        if (name === BRIGHTNESS) return actions.ADD_FILTER_BRIGHTNESS
        if (name === HUE) return actions.ADD_FILTER_HUE
        if (name === SATURATION) return actions.ADD_FILTER_SATURATION
        if (name === GRAYSCALE) return actions.ADD_FILTER_GRAYSCALE
        if (name === SCALE) return actions.ADD_FILTER_SCALE
        if (name === CONTRAST) return actions.ADD_FILTER_CONTRAST  
        if (name === BLUR) return actions.ADD_FILTER_BLUR  
        if (name === ROTATE) return actions.ADD_FILTER_ROTATE
        return actions.ADD_FILTER_NONE
    }, [name])

    let saveChange = useCallback(e =>{
        if (busy.reason === BusyReason.SLIDER) return <LoaderIcon />
        return ''
    }, [busy])


    return (
        <div id='slider_' style={{top :top() , zIndex:zIndex()}}>
       

        <p>
          {name === GRAYSCALE ? 'This action will remove all the color' : name + " :"} 
          
          {name === GRAYSCALE ? '' :  newVal}
               
        </p> 
       
    
        <input type="range"  
        min={1} 
        max={max()} 
        value={(name === BLUR && newVal > 20 ) ? 3 : newVal} 
        onChange={
            e => { 
                if (busy.isBusy === true ) return log('busy')
            dispatch(returnTypeValue(actionType(), e.target.valueAsNumber));
            setNewVal(e.target.valueAsNumber);
            }}
             name="" 
             id=""
            />
    <span className='row cgp_05 ai_center'>
        <button onClick={e => { 
      if (busy.isBusy === true ) return log('busy')
      AddFilter({  name ,value,url: current} , dispatch)}}>
        save
        </button>
        <button onClick={e =>{ 
            if (busy.isBusy === true ) return log('busy')
            dispatch(returnTypeValue(actions.REMOVE_FILTER, 70))}}>
            Cancel
        </button>
        {saveChange()}

        </span>
        </div>
    )
 
}

export default Slider













