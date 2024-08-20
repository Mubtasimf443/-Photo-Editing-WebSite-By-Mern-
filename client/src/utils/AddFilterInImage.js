/*بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  */ 
/* I trust Allah,And he is Enough For Me */
import { addMeta, addUrl, returnTypeObj, returnTypeValue } from "../redux/action";
import actions from "../redux/actions";
import { BusyReason } from "../redux/BusyReason";
import { filter } from "../redux/filter";
import { log } from "./smallUtils";
import { errToast, successToast } from "./toast";

 



export const AddFilter =async ({name, value, url},dispatch) => {
  if (value === 0 && name !== filter.SATURATION) return errToast('0 value is not allowed')

   dispatch(returnTypeValue(actions.BUSY_TRUE,  {isBusy : true , reason :BusyReason.SLIDER}))
  try {
  if (name === "NONE") return dispatch(returnTypeValue(actions.BUSY_TRUE,  {isBusy : false , reason :BusyReason.NONE})) ;

  let img = await Jimp.read(url)
  if (name === 'BLUR') {
    await img.blur(value);
  } 
  else if (name === filter.SCALE) {
  await  img.scale(value / 100 )
  await dispatch(addMeta(img.bitmap))
  } else if (name === filter.GRAYSCALE) {
    await img.grayscale()
  }
  else if ( name === 'OPACITY') {
      await img.opacity(value)
  } 
  else if (name === filter.ROTATE) {
    await img.rotate(value)
  }
 else if ( name === filter.BRIGHTNESS && value < 100) { 
    await   img.color([{apply :'darken', params:[value]}])
  }   else if ( name === filter.BRIGHTNESS && value >= 100) { 
    await   img.color([{apply :'brighten', params:[value-100]}])
  }  else if (name === filter.SATURATION && value >= 100 ) {

    await img.color([{apply : 'saturate', params:[ value - 100]}])
  }  else if (name === filter.SATURATION && 100 > value ) {
   
      await img.color([{apply : 'desaturate', params:[100 -value]}])
    
  }  else if (name === filter.HUE) {
    await img.color([{ apply: 'spin', params: [value /0.77 ] }])
  }
    
      
  let Buff = await img.getBufferAsync(Jimp.MIME_JPEG )
  const uint8Arr =await new Uint8Array(Buff);
  let blob = await new Blob([uint8Arr]);
  let newUrl = await URL.createObjectURL(blob);
  dispatch(returnTypeValue(actions.ADD_PREV_URL ,url))
  dispatch(returnTypeValue(actions.CHANGE_CURRENT_URL, newUrl));
  dispatch(returnTypeValue(actions.REMOVE_FILTER, 0))
    } catch (err) {
log(err)
    errToast(  err)
    
    } finally {
      dispatch(returnTypeValue(actions.BUSY_TRUE,  {isBusy : false , reason :BusyReason.NONE}))

    }

    
}





