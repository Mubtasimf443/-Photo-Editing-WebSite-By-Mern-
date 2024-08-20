/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */

import { returnTypeValue } from "../redux/action"
import actions from "../redux/actions"
import { log } from "./smallUtils"
import { errToast } from "./toast"



const flipImage =async ({horizontal,vertical ,current} , dispatch) => {
    try {
        
    
    let img = await Jimp.read(current)
    await img.flip(horizontal,vertical)
    let Buff = await img.getBufferAsync(Jimp.MIME_JPEG )
  const uint8Arr =await new Uint8Array(Buff);
  let blob = await new Blob([uint8Arr]);
  let newUrl = await URL.createObjectURL(blob);
  dispatch(returnTypeValue(actions.ADD_PREV_URL ,current))
  dispatch(returnTypeValue(actions.CHANGE_CURRENT_URL, newUrl));
  dispatch(returnTypeValue(actions.REMOVE_FILTER, 0))
} catch (error) {
      errToast('err')  
      log(error)
}

}

export default flipImage
