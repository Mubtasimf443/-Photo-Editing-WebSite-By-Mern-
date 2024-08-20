/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */
import { returnTypeValue } from "../redux/action"
import actions from "../redux/actions"
import { errToast } from "./toast"

 



export const undoRedoFuction = ({prev ,current , forward},dispatch , boolean) => {
    if (boolean === true ) {
    if (prev.length === 0) return errToast('you have not done anything ')
    let prevUrl = prev[prev.length - 1]
    dispatch(returnTypeValue( actions.ADD_FORWARD_URL , current))
    dispatch(returnTypeValue(actions.CHANGE_CURRENT_URL ,prevUrl))
    return
    } 

    if ( boolean === false) {
        if (forward.length === 0) return errToast('no previus data for redoing')
        let forwardUrl = prev[prev.length - 1]
        dispatch(returnTypeValue( actions.ADD_PREV_URL , current))
        dispatch(returnTypeValue(actions.CHANGE_CURRENT_URL ,forwardUrl))
        return
}

}

export default undoRedoFuction

