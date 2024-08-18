/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { useMemo, useRef } from "react"
import { log, makePending } from "../utils/smallUtils"
import { useDispatch } from "react-redux"

const ResizeDiv = ({meta}) => {
  let dispatch = useDispatch()
  let Hinput = useRef()
  let Winput = useRef()

  useMemo(() => {
    if (meta.length === 0) return 
    let {height , width} = meta[meta.length -1]
    Hinput.current.value = height
    Winput.current.value = height

  }, [meta])
  return (
    <div className="resize_div">
        <span>
            <b>H</b> 
          <input ref={Hinput} onChange={ e => makePending(dispatch)}  min={0}  className='hw_input'  type="number"  />
        </span>
        <span>
            <b>W</b> 
          <input ref={Winput} onChange={ e => makePending(dispatch) } min={0} className='hw_input' type="number" />
        </span>
      </div>
  )
}

export default ResizeDiv






