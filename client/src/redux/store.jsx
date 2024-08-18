/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */



import { combineReducers, createStore } from "redux";
 import {composeWithDevTools} from 'redux-devtools-extension'
import { changeArrayReducer, filterReducer, metedataReducer, statusReducer, urlReducer } from "./reducer";

const rootReducer = combineReducers({
    url : urlReducer ,
    meta : metedataReducer,
    status : statusReducer ,
    changeArray :changeArrayReducer ,
    filter :filterReducer 
})

export const store = createStore(rootReducer )
































