/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { useMemo, useRef } from "react"
import { log, makePending } from "../utils/smallUtils"
import { useDispatch } from "react-redux"
import { addTypeData } from "../redux/action"
import actions from "../redux/actions"

const ResizeDiv = ({meta}) => {
  let dispatch = useDispatch()
  

  let metaObj = useMemo(e => {
    if (meta.length === 0) return { height :"", width :""}
    let {height , width } = meta[meta.length -1 ]
        return { height , width }
  } ,[meta])
 
   //log(height)
  return (
    <div className="resize_div">
        <span title="height">
            <b>H</b> 
          <input 
          value={metaObj.height} 
          onClick={ e => { 
    
            makePending(dispatch)
            
            }}  min={0}  className='hw_input'  type="number"  />
        </span>
        <span title="width">
            <b>W</b> 
          <input 
           value={metaObj.width} 
           onClick={ e => {
            makePending(dispatch) }} min={0} className='hw_input' type="number" />
        </span>
      </div>
  )
}

export default ResizeDiv






