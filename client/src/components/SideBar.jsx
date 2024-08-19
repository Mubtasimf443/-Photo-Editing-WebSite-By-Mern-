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

import { filter as filterNames} from '../redux/filter'
import { AddFilter } from '../utils/AddFilterInImage'
import Upload_img_icon from '../icons/Upload_img_icon'
import WebIcon from '../icons/WebIcon'

let {OPACITY ,BLUR} = filterNames


const SideBar = () => {
  let dispatch = useDispatch()
  let {url , meta ,  status ,filter} = useSelector(e => e)

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
    <div id='sidebar'  >
     <div className="upload_div">
      <input type="file" onChange={inputChange} style={{ display:'none'}} id='main_image_input'/>
      <label title='upload image' htmlFor="main_image_input">
     <Upload_img_icon status={url.length === 0 ? 'main' :'active'} className={'img_icons'} />
    
      </label>
  
      </div>
      
     <ResizeDiv meta={meta}/>
      <div className="sidebar_btn_div">
       
        <WebIcon 
        title={'brightness'}
        action={actions.ADD_FILTER_BRIGHTNESS}
        filterName={filterNames.BRIGHTNESS}
        isFilterIcon={true}
        />

        <WebIcon 
        title={'Seturation'}
        action={actions.ADD_FILTER_SATURATION}
        filterName={filterNames.SATURATION}
        isFilterIcon={true}
        />
       
        <WebIcon 
        filterName={filterNames.BLUR} 
        action={actions.ADD_FILTER_BLUR} 
        title={'Blur'}
        isFilterIcon={true}
         />
        
       <WebIcon 
        filterName={filterNames.CONTRAST} 
        action={actions.ADD_FILTER_CONTRAST} 
        title={'contrast'}
        isFilterIcon={true}
        />



        <WebIcon 
        filterName={filterNames.SCALE}
        action={actions.ADD_FILTER_SCALE}
        isFilterIcon={true}
        title={'scale'}
        />


        <WebIcon 
        filterName={filterNames.OPACITY} 
        action={actions.ADD_FILTER_OPACITY} 
        title={'Opacity'}
        isFilterIcon={true}
         /> 
        
        
        <WebIcon 
          title={'HUE'}
          filterName={filterNames.HUE}
          action={actions.ADD_FILTER_HUE}
          isFilterIcon={true}
        />
        
       <WebIcon 
       title={'Remove Color'}
       action={actions.ADD_FILTER_GRAYSCALE}
       filterName={filterNames.GRAYSCALE}
       isFilterIcon={true}
       />

        <WebIcon 
          title={'Move to begining file'}
          filterName={'REFRESH' }
        />
         
         <WebIcon 
          title={'undo'}
          filterName={'UNDO' }
        />


        <WebIcon 
          title={'redu'}
          filterName={'REDO' }
        />

        <WebIcon 
        title={'save change'}
        filterName={'SAVE_CHANGE'}
        />
        
               
        <WebIcon 
        title={'copy Image as uint8Array'}
        filterName={'COPY_METADATA'}
        />
           
             <ShowDownImage arr={url} />
      </div>
      
  </div>
  
  )
}

export default SideBar











