/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */



import { combineReducers, createStore } from "redux";
 import {composeWithDevTools} from 'redux-devtools-extension'
import { busyReduser, changeArrayReducer, currentUrlReducer, filterReducer, forwardUrlReducer, metedataReducer, prevUrlReducer, statusReducer, urlReducer } from "./reducer";

const rootReducer = combineReducers({
  
    meta : metedataReducer,
    status : statusReducer ,
    changeArray :changeArrayReducer,
    filter :filterReducer ,
    busy :busyReduser,
    current : currentUrlReducer ,
    prev : prevUrlReducer,
    forward:forwardUrlReducer
}) 

export const store = createStore(rootReducer   )
































