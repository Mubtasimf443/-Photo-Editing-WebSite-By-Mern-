/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { useMemo } from "react"
import { log, makePending } from "../utils/smallUtils"
import { useDispatch, useSelector } from "react-redux"
import { errToast } from "../utils/toast"

const ResizeDiv = ({meta }) => {
  let dispatch = useDispatch()
  let { current}= useSelector(state => state)

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
            if (busy.isBusy === true ) return log('busy')
            if (current === 'none') return errToast('Please upload an Image ')
            makePending(dispatch)
            }}  min={0}  className='hw_input'  type="number"  />
        </span>
        <span title="width">
            <b>W</b> 
          <input 
           value={metaObj.width} 
           onClick={ e => {
            if (busy.isBusy === true ) return log('busy')
           if (current === 'none') return errToast('Please upload an Image ')
             makePending(dispatch) }} min={0} className='hw_input' type="number" />
        </span>
      </div>
  )
}

export default ResizeDiv






