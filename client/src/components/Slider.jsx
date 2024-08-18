/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 





import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { log } from '../utils/smallUtils'
import { filter } from '../redux/filter.jsx'
import { useState } from 'react'
import actions from '../redux/actions'
import { returnTypeValue } from '../redux/action'
const { NONE,BRIGHTNESS, SATURATION,HUE} = filter
const Slider = () => {

    let {filter} = useSelector(e => e)
    let {name , value} = filter ;
    const [newVal,setNewVal] = useState(value)
    const top = useCallback(() => { return name !== NONE ? '4em' :'-5em' },[name] )
    const zIndex = useCallback(e => {return name !== NONE ? '100' :'-1000' },[name])
    const dispatch = useDispatch()
    const actionType = useCallback(e => {
        if (name === BRIGHTNESS) return actions.ADD_FILTER_BRIGHTNESS
        if (name === HUE) return actions.ADD_FILTER_HUE
        if (name === SATURATION) return actions.ADD_FILTER_SATURATION
        return actions.ADD_FILTER_NONE
    }, [name])


    return (
        <div id='slider_' style={{top :top() , zIndex:zIndex()}}>
       

        <p>
          {name}: {newVal}
               
        </p> 
       
    
        <input type="range"  min={0} max={name === SATURATION ? 200 : 100} value={newVal} onChange={e => { 
            dispatch(returnTypeValue(actionType(), e.target.valueAsNumber));
            setNewVal(e.target.valueAsNumber);
            }} name="" id="" />
        <button>
            Save
        </button>
        </div>
    )
 
}

export default Slider













