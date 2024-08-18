 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */ 



import actions from './actions.jsx'
import { filter } from './filter.jsx';
let emtyArr = [] ;
let initialFilter = {
    name : filter.NONE,
    value :0
}



export const ImageReducer = (state = emtyArr, action ) => {
   let { type , image } = action;
   if (typeof image !== 'object' || image === undefined ) return state
   if (type === actions.ADD_IMAGE ) return [...state , image]
   return state 
}


export const  metedataReducer = (val = emtyArr , action) => {
    let { type , data } = action;
    if (type === actions.ADD_METADATA) return [...val , {...data}]
    return val
}

export const urlReducer = (val = emtyArr , action) => {
    let { type , url } = action;
    if (type === actions.ADD_URL) return [...val , url]
    return val
}



export const statusReducer = (value = actions.SUCCESS_STATUS, {type})=> {
    let {SUCCESS_STATUS, PENDING_STATUS} = actions
    if (type === SUCCESS_STATUS) return SUCCESS_STATUS 
    if (type === PENDING_STATUS) return PENDING_STATUS
    return value
}


 export function changeArrayReducer(val = emtyArr , {type , obj}) {
    let {ADD_CHANGE_OBJECT , EMPTY_CHANGE_OBJECT} = actions
    if (type === ADD_CHANGE_OBJECT) return [...val , obj]
    if ( type === EMPTY_CHANGE_OBJECT ) return []
    return val
 }
 

export const filterReducer = (val = initialFilter , {type  ,value }  ) => {
    let {NONE,BLUR, HUE ,SATURATION ,BRIGHTNESS } = filter ;
    if (type === actions.ADD_FILTER_NONE ) return {name :NONE , value}
    if (type === actions.ADD_FILTER_BLUR ) return  {name :BLUR , value}
    if (type === actions.ADD_FILTER_HUE ) return   {name :HUE , value}
    if (type === actions.ADD_FILTER_BRIGHTNESS ) return  {name :BRIGHTNESS , value}
    if (type === actions.ADD_FILTER_SATURATION ) return  {name :SATURATION , value}
    return val
}

