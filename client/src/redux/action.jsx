 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import actions from "./actions";


export const addimage = (params) => {
params.type !== 'image/png' && params.type !== 'image/jpeg'
    let image = params
    
    return {
        type : actions.ADD_IMAGE,
        image
    }
}


export const addMeta = (params ) => {
    return {
        type :actions.ADD_METADATA,
        data : params
    }
}


export const addUrl = (url ) => {
    return {
        type :actions.ADD_URL,
        url
    }
    
}

export const returnTypeValue = (type , value) => {
    return {type , value}
}


export function returnTypeObj(type) {
    return {type}
}


export const addTypeData = (type , data) => {
    return {type , data}
}


