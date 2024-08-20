/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import React ,{useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { returnTypeValue } from '../redux/action'
import { filter } from '../redux/filter'

/*
let obj = {
    main :a0acf0d2 ,
    second : 88c9ff,
    active :9dd2fd
}*/



const WebIcon = ({title ,filterName ,className ,action ,isFilterIcon , onClick , busy}) => {
    const dispatch = useDispatch()
    let {name ,value } = useSelector(state => state.filter)

   // let busy = useSelector(e => e.busy)
    let imgSRC = useCallback(e => {
        if (name === filterName && filterName === filter.CONTRAST) return '../../public/icon/contrast_2.png'
        if (name === filterName && filterName === filter.BRIGHTNESS) return '../../public/icon/brightness2.png' 
        if (name === filterName && filterName === filter.BLUR) return '../../public/icon/blur_active.png'  
        if (name === filterName && filterName === filter.HUE) return '../../public/icon/hue2.png'
        if (name === filterName && filterName === filter.SCALE) return '../../public/icon/scale2.png'
        if (name === filterName && filterName === filter.OPACITY) return '../../public/icon/opacity2.png'
        if (name === filterName && filterName === filter.GRAYSCALE) return '../../public/icon/remove_color2.png'
        if (name === filterName && filterName === filter.ROTATE) return '../../public/icon/rotate1.png'
        if (filterName === filter.GRAYSCALE) return '../../public/icon/remove_color.png'
        if (filterName === filter.BRIGHTNESS) return '../../public/icon/brightness1.png'
        if (filterName === filter.CONTRAST) return '../../public/icon/contrast_1.png'
        if (filterName === filter.BLUR) return '../../public/icon/blur_main.png'
        if (filterName === filter.HUE) return '../../public/icon/hue1.png'
        if (filterName === filter.SATURATION) return '../../public/icon/saturate2.png'
        if (filterName === filter.OPACITY) return '../../public/icon/opacity1.png'
        if (filterName === filter.SCALE) return '../../public/icon/scale_icon_1.png' 
        if (filterName === filter.ROTATE) return '../../public/icon/rotate.png' 
        if (filterName === 'REFRESH') return '../../public/icon/refresh_file_1.png'
        if (filterName === 'REDO') return '../../public/icon/redo1.png'
        if (filterName === 'UNDO') return '../../public/icon/undo1.png'
        if (filterName === 'SAVE_CHANGE') return '../../public/icon/save_change1.png'
        if (filterName === 'COPY_METADATA') return '../../public/icon/copy_icon.png'

    },[name])

    function onclickFunction(e) {
        if (busy.isBusy === true) return
        if ( typeof onClick === 'function' ) return onClick(e)
    }
  return (
    <button title={title ? title : ''} 
    onClick={e => {
        e.stopPropagation()
        if (busy.isBusy === true) return
        if (isFilterIcon === true)  dispatch(returnTypeValue(action ,value))}}

    >
    <img onClick={onclickFunction} className={className ? className :'img_icons' } src={imgSRC()} alt="" />
   </button>
 
  )
}

export default WebIcon









