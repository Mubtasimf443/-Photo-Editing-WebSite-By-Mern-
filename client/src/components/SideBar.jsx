/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 



import  { useCallback,  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'
import ResizeDiv from './ResizeDiv'
import { errToast } from '../utils/toast'
import UploadImageAsUrl from '../utils/UploadImageAsUrl'
import ShowDownImage from './ShowDownImage'

import { filter as filterNames} from '../redux/filter'
import Upload_img_icon from '../icons/Upload_img_icon'
import WebIcon from '../icons/WebIcon'
import undoRedoFuction  from '../utils/undoFuction'
import { FlipButton } from './FlipButton'



const SideBar = () => {
  let dispatch = useDispatch()
  let { prev,forward, meta , busy, status ,current} = useSelector(e => e)

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
     <Upload_img_icon status={current === 'none' ? 'main' :'active'} className={'img_icons'} />
    
      </label>
  
      </div>
      
     <ResizeDiv meta={meta}/>
      <div className="sidebar_btn_div">
       <FlipButton />
       <WebIcon 
       title={'Rotate Image'}
       filterName={filterNames.ROTATE}
       busy={busy}
       action={actions.ADD_FILTER_ROTATE}
       isFilterIcon={true}
       />


        <WebIcon 
        title={'brightness'}
        action={actions.ADD_FILTER_BRIGHTNESS}
        filterName={filterNames.BRIGHTNESS}
        isFilterIcon={true}
        busy={busy}
        />

        <WebIcon 
        title={'Seturation'}
        action={actions.ADD_FILTER_SATURATION}
        filterName={filterNames.SATURATION}
        isFilterIcon={true}
        busy={busy}

        />
       
        <WebIcon 
        filterName={filterNames.BLUR} 
        action={actions.ADD_FILTER_BLUR} 
        title={'Blur'}
        isFilterIcon={true}
        busy={busy}

         />
        
       <WebIcon 
        filterName={filterNames.CONTRAST} 
        action={actions.ADD_FILTER_CONTRAST} 
        title={'contrast'}
        isFilterIcon={true}
        busy={busy}
        />



        <WebIcon 
        filterName={filterNames.SCALE}
        action={actions.ADD_FILTER_SCALE}
        isFilterIcon={true}
        title={'scale'}
        busy={busy}

        />


        <WebIcon 
        filterName={filterNames.OPACITY} 
        action={actions.ADD_FILTER_OPACITY} 
        title={'Opacity'}
        isFilterIcon={true}
        busy={busy}
         /> 
        
        
        <WebIcon 
          title={'HUE'}
          filterName={filterNames.HUE}
          action={actions.ADD_FILTER_HUE}
          isFilterIcon={true}
          busy={busy}
          />
        
       <WebIcon 
       title={'Remove Color'}
       action={actions.ADD_FILTER_GRAYSCALE}
       filterName={filterNames.GRAYSCALE}
       isFilterIcon={true}
       busy={busy}
       />
      

 
         <WebIcon 
          title={'undo'}
          filterName={'UNDO' }
          busy={busy}
          onClick={ e => {
            if (busy.isBusy) return alert('await')
            undoRedoFuction({prev :prev ,forward :forward,current :dispatch},dispatch,true)
          }}
          />


        <WebIcon 
          title={'redu'}
          filterName={'REDO' }
          busy={busy}
          

          onClick={e =>{ 
            if (busy.isBusy) return alert('await')
            undoRedoFuction({prev : prev,forward :forward,current :current},dispatch,false)
          }}

          />

    
               
        <WebIcon 
        title={'copy Image as uint8Array'}
        filterName={'COPY_METADATA'}
        busy={busy}
        
        />
           
      <ShowDownImage 
      current={current}
              />
      </div>
      
  </div>
  
  )
}

export default SideBar











