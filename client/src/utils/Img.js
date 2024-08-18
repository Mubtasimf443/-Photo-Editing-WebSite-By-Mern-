/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */
import { addimage, addMeta } from "../redux/action"
import { errToast } from "./toast"

 



export const newImg = (url,dispatch) => {
  Jimp.read(url).then(img => {
    dispatch(addMeta(img.bitmap))
  }).catch(e => errToast(e))
}










