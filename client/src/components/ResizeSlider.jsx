/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 


import React, { useCallback } from 'react'
import WebIcon from '../icons/WebIcon'
import { useSelector,useDispatch } from 'react-redux'
import actions from '../redux/actions'
import { addTypeData, returnTypeObj } from '../redux/action'
import IconsOnly from '../icons/IconsOnly'


let style = {
    position :'absolute' ,
    top:'3.24em',
    left :'0.7em' ,
    display :'flex',
    flexDirection:'column',
    width :'27em',
    background :'#020513',
    padding:'1.3em 1em',
    borderRadius :'1em',
    rowGap :'1em' ,
    transition:'all 0.4s ease-in'
}





const ResizeSlider = () => {
    let {status ,metaObj} = useSelector(e => {
      let {status ,meta} = e
      if (meta.length !== 0) return {status,metaObj :meta[meta.length - 1 ] }
      return {status,metaObj :{height :100, width :100} }
    } )
    const dispatch =useDispatch()
    let left = useCallback(e => {
        return  (status != actions.PENDING_STATUS) ? '-30em' : '0.5em'

    } ,[status])
  return (
    <div id='resize_slider'  
    style={{...style ,left :left() 
    }}
    >

    <div className="img_size row ai_center js_spb">
        Size
        <div >
          <IconsOnly name={'fit_screen'} />
          <IconsOnly name={'width_full'} />
          </div>
    </div>
      <div className="row ai_center js_spb">
        Alignment 

        <div className="row">
        <IconsOnly name={'align_left'} />
        <IconsOnly name={'align_center'} />

        <IconsOnly name={'align_right'} />

        </div>

        </div>
        <div className="column">
        <label htmlFor="resize_height_input">
            Height
        </label>
        <input type="range"
        value={metaObj.height}
        min={0} max={6000}
        onChange={e => dispatch(addTypeData(actions.ADD_METADATA_HEIGHT, { height : e.target.value }))}
        name="" id="resize_height_input" 
        />
        </div>
        <div className="column">
        <label htmlFor="resize_height_input">
        Width
        </label>
        <input 
        value={metaObj.width}
        max={6000} min={0}
        onChange={e => dispatch(addTypeData(actions.ADD_METADATA_WIDTH, { width : e.target.value })) }
        type="range" name="" id="resize_Width_input" 
        />

        </div>
        <span className='row ai_center cgp_1'>
        <button className='row ai_center pl_20px' style={{background:'inherit' ,
            border :'2px solid #ffffff20' ,width :'13em'
        }} >
        <IconsOnly name={'reset_image2'} />
            Save Change 
        </button>
        <button 
        onClick={e => {
          dispatch(returnTypeObj(actions.SUCCESS_STATUS))
        }}
        className='row ai_center pl_20px'
         style={{background:'inherit' ,
          border :'2px solid #ffffff20' ,width :'13em'
      }}
        >
         <IconsOnly name={'cencel_hand'} />
         Don't Change
        </button>
        </span>
      
    </div>

  )
}

export default ResizeSlider




















