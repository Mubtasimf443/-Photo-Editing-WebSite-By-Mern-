/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 



import React, { useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'
import { addimage, addUrl, returnTypeObj, returnTypeValue } from '../redux/action'
import ResizeDiv from './ResizeDiv'
import { copyMetaData, log } from '../utils/smallUtils'
import { errToast } from '../utils/toast'
import UploadImageAsUrl from '../utils/UploadImageAsUrl'
import ShowDownImage from './ShowDownImage'



const SideBar = () => {
  let dispatch = useDispatch()
  let {url , meta , status} = useSelector(e => e)

  function inputChange(e) {
    let img = e.target.files[0]
    if (img.type === 'image/png' || img.type === 'image/jpeg')  return UploadImageAsUrl(img , dispatch)
    errToast('Only accept png and jpeg')
  }


  let saveChangeIconClass = useCallback(() => {
    if (status === actions.SUCCESS_STATUS) return 'fa-regular fa-floppy-disk sidebar_icon'
    if (status === actions.PENDING_STATUS) return "fa-solid fa-floppy-disk active_icon"
  } , [status])
  return (
    <div id='sidebar' >
     <div className="upload_div">
      <input type="file" onChange={inputChange} style={{ display:'none'}} id='main_image_input'/>
      <label htmlFor="main_image_input">
      <i className='fa-solid fa-image sidebar_icon '>
      </i>
      </label>
  
      </div>
      
     <ResizeDiv  meta={meta}/>
      <div className="sidebar_btn_div">
        <button onClick={e => dispatch(returnTypeValue(actions.ADD_FILTER_BRIGHTNESS ,0))} >
     {/* brightness */}
         <i  className="fa-regular fa-sun sidebar_icon "></i>
        </button>
        <button  onClick={e =>{ dispatch(returnTypeValue(actions.ADD_FILTER_SATURATION ,0))} } >
              {/* Seturation*/}
        <i className="fa-solid fa-fill-drip sidebar_icon"></i>
        </button>

         { /*  <button onClick={e => dispatch(returnTypeObj(actions.ADD_FILTER_BRIGHTNESS))} >
                {/* contrast*/}{ /*</div>
              <i className='fa-solid fa-paint-roller sidebar_icon'></i>
            </button> */}
            <button  onClick={e =>{ 
              if (url.length === 0) return errToast('Please Setup an Image First')
              dispatch(returnTypeValue(actions.ADD_FILTER_HUE ,0))}}  >
                {/* hue */}
              <i className='fa-solid fa-droplet sidebar_icon'></i>
            </button>
           
             <button  > {/*previuse  */}
               <i className='fa-solid fa-angles-left sidebar_icon'>

               </i>
             </button>
             <button> {/*forwrd  */}
               <i className='fa-solid fa-angles-right sidebar_icon'>

               </i>
             </button>

             <button>
              <i className={saveChangeIconClass()} >

              </i>
             </button>
             <button onClick={e => copyMetaData(meta)}>
               {/* copy to clipboard  */}
              <i className="fa-regular fa-copy sidebar_icon"></i>
             </button>
             <ShowDownImage arr={url} />
      </div>
      
  </div>
  
  )
}

export default SideBar











