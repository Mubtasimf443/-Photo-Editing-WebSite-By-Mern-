/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ */ 
/*Allah Is enough for me */ 

import { addMeta, addUrl, returnTypeValue } from '../redux/action.jsx';
import actions from '../redux/actions.jsx';
import { BusyReason } from '../redux/BusyReason.jsx';
import './jimpBrowser.js'
import { log } from './smallUtils.js';
import { errToast } from './toast.js';



// Resize
export const resizeQualityChangeImage =async ({url ,quality , width} , dispatch) => {
    dispatch(returnTypeValue(actions.BUSY_TRUE) , {isBusy : true , reason :BusyReason.RESIZE})
    try { 
    const image = await Jimp.read(url);
    await image.resize(width, Jimp.AUTO ,Jimp.RESIZE_BEZIER )
    await image.quality(quality)
    let Buff = await image.getBufferAsync(Jimp.MIME_JPEG )
    const uint8Arr =await new Uint8Array(Buff);
    let blob = await new Blob([uint8Arr]);
    let newUrl = await URL.createObjectURL(blob);
    dispatch(returnTypeValue( actions.CHANGE_CURRENT_URL,newUrl))
    dispatch(addMeta(image.bitmap))
  } catch (err) {
    log(err)
    errToast('sorry for error , but image more than 6mb are not allowed')  
  } finally {
    dispatch(returnTypeValue(actions.BUSY_FALSE) , {isBusy : false , reason :BusyReason.NONE})
  
  }
  
  }
   
  