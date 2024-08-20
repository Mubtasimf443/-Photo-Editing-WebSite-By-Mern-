/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */


import { addMeta, addUrl, returnTypeValue } from "../redux/action"
import actions from "../redux/actions"
import { log } from "./smallUtils"
import { errToast } from "./toast"

 


const UploadImageAsUrl = (file , dispatch) => {
    try {
        let url = URL.createObjectURL(file)
        
        Jimp.read(url)
        .then(img => {
            dispatch(returnTypeValue(actions.CHANGE_CURRENT_URL , url))
            return dispatch(addMeta(img.bitmap))
        }).catch(e => errToast('failed to get meta data'))
    } catch (error) {
        log(error)
        errToast('failed to upload image')
    }
}

export default UploadImageAsUrl














