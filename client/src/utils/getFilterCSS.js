/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { filter } from "../redux/filter"
import { log } from "./smallUtils";

let {NONE,BLUR,HUE,SATURATION,BRIGHTNESS,CONTRAST} = filter ;

const getFilterCSS = ({name , value}) => {
    log(name +  ' : ' + value)
    if (name === NONE ) return 'none'
    if (name === HUE) return `hue-rotate(${value}deg)`
    if (name === SATURATION) return `saturate(${value}%)`
    if (name === BLUR) return `blur(${value * 0.375}px)`
    if (name === BRIGHTNESS) return ` brightness(${value}%)`
    if (name === CONTRAST) return ` contrast(${value}%)`
    return 'none'
}

export default getFilterCSS











