
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */
import { addMeta, addUrl } from "../redux/action"
import { log } from "./smallUtils"
import { errToast } from "./toast"

 


const UploadImageAsUrl = (file , dispatch) => {
    try {
        let url = URL.createObjectURL(file)
        dispatch(addUrl(url))
        Jimp.read(url)
        .then(img => {
            return dispatch(addMeta(img.bitmap))
        }).catch(e => errToast('failed to get meta data'))
    } catch (error) {
        log(error)
        errToast('failed to upload image')
    }
}

export default UploadImageAsUrl














