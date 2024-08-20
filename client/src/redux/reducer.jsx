 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */ 



import { act } from 'react';
import { returnTypeValue } from './action.jsx';
import actions from './actions.jsx'
import { filter } from './filter.jsx';
import { BusyReason } from './BusyReason.jsx';
let emtyArr = [] ;
let initialFilter = {
    name : filter.NONE,
    value :50
}

let initialBusyObject = {
    isBusy : false,
    reason :BusyReason.NONE
}

const none = 'none'



//meta
export const  metedataReducer = (val = emtyArr , action) => {
    let { type , data } = action;
    if (type === actions.ADD_METADATA) return [...val , {...data}]
    if (type === actions.ADD_METADATA_HEIGHT) return [...val,{...val[length - 1] ,height : data.height}]
    if (type === actions.ADD_METADATA_WIDTH) return [...val,{...val[length - 1] ,width : data.width}]
    return val
}
//url reducer
export const urlReducer = (val = emtyArr , action) => {
    let { type , url } = action;
    console.log(action);
    
    if (type === actions.ADD_URL) return [...val , url]
    return val
}


//status
export const statusReducer = (value = actions.SUCCESS_STATUS, {type})=> {
    let {SUCCESS_STATUS, PENDING_STATUS} = actions
    if (type === SUCCESS_STATUS) return SUCCESS_STATUS 
    if (type === PENDING_STATUS) return PENDING_STATUS
    return value
}

//change 
export function changeArrayReducer(val = emtyArr , {type , obj}) {
    let {ADD_CHANGE_OBJECT , EMPTY_CHANGE_OBJECT} = actions
    if (type === ADD_CHANGE_OBJECT) return [...val , obj]
    if ( type === EMPTY_CHANGE_OBJECT ) return []
    return val
 }
 
//filter
export const filterReducer = (val = initialFilter , {type  ,value }  ) => {
    //taking values from filter
    let {NONE,BLUR, HUE ,SATURATION ,BRIGHTNESS, ROTATE, CONTRAST ,GRAYSCALE ,SCALE } = filter ;
    //returning values
    if (type === actions.ADD_FILTER_NONE ) return {name :NONE , value}
    if (type === actions.ADD_FILTER_BLUR ) return  {name :BLUR , value}
    if (type === actions.ADD_FILTER_HUE ) return   {name :HUE , value}
    if (type === actions.ADD_FILTER_BRIGHTNESS ) return  {name :BRIGHTNESS , value}
    if (type === actions.ADD_FILTER_SATURATION ) return  {name :SATURATION , value}
    if (type === actions.ADD_FILTER_CONTRAST ) return  {name :CONTRAST , value}
    if (type === actions.ADD_FILTER_GRAYSCALE) return {name : GRAYSCALE, value}
    if (type === actions.ADD_FILTER_ROTATE) return {name : ROTATE, value}
    if (type === actions.ADD_FILTER_SCALE) return {name :SCALE,value}
    if (type === actions.REMOVE_FILTER )  return initialFilter
    return val
}

//busy
export const busyReduser = (val =initialBusyObject , {type , value}) => {
    if (typeof value !== 'object') return val
    if (type === actions.BUSY_TRUE) return value
    if (type === actions.BUSY_FALSE) return initialBusyObject
}

//current url
export function currentUrlReducer(val = none , {type , value}) {
    if (type === actions.CHANGE_CURRENT_URL) return value
    return val
}



//previous url 

export function prevUrlReducer(val = emtyArr, {type ,value}) {
    if (type === actions.ADD_PREV_URL) return [...val,value]
    if (type === actions.REMOVE_PREV_URL && val.length > 0) return val.pop()
    return  val
}



export function forwardUrlReducer(val = emtyArr, {type ,value}) {
    if (type === actions.ADD_FORWARD_URL) return [...val,value]
    if (type === actions.REMOVE_FORWARD_URL && val.length > 0) return val.pop()
    return val
}


