/*بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  */ 
/* I trust Allah,And he is Enough For Me */
import { addMeta, addUrl, returnTypeObj, returnTypeValue } from "../redux/action";
import actions from "../redux/actions";
import { filter } from "../redux/filter";
import { log } from "./smallUtils";
import { errToast, successToast } from "./toast";

 



export const AddFilter =async ({name, value, url},dispatch) => {
  if (value === 0) return errToast('0 value is not allowed')

   
  try {
  if (name === "NONE") return 
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
  else if (name === 'QUALITY') {
    await image.quality(value)
  } else if ( name === filter.BRIGHTNESS && value < 100) { 
    await   img.color([{apply :'darken', params:[value]}])
  }   else if ( name === filter.BRIGHTNESS && value >= 100) { 
    await   img.color([{apply :'brighten', params:[value-100]}])
  }  else if (name === filter.SATURATION && value >= 100 ) {

    await img.color[{apply : 'saturate', params:[ value - 100]}]
  }  else if (name === filter.SATURATION && 100 > value ) {
   
      await img.color([{apply : 'desaturate', params:[90]}])
    
  }  else if (name === filter.HUE) {
    await img.color([{ apply: 'spin', params: [value /0.77 ] }])
  }
    
      
  let Buff = await img.getBufferAsync(Jimp.MIME_JPEG )
  const uint8Arr =await new Uint8Array(Buff);
  let blob = await new Blob([uint8Arr]);
  let newUrl = await URL.createObjectURL(blob);
    await log(newUrl)
   dispatch(addUrl(newUrl));
   dispatch(returnTypeValue(actions.REMOVE_FILTER, 0))
    } catch (err) {

    errToast(  err)
    
    } 

    
}





