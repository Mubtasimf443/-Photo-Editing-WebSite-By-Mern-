/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */
import { returnTypeObj } from "../redux/action";
import actions from "../redux/actions";
import { errToast, infoToast, successToast } from "./toast";

 






 export function copyMetaData(meta) {
    if (meta.length === 0) return

    meta = meta[meta.length -1];
    console.log(meta);
    
    navigator.clipboard.writeText(`${meta.data}`)
    successToast('copied successful')

}





export function log(value) {
    console.log(value)
}
  

export function makePending(dispatch) {
  try {
    dispatch(returnTypeObj(actions.PENDING_STATUS))

  } catch (e) {
    errToast(e)
  }
}








