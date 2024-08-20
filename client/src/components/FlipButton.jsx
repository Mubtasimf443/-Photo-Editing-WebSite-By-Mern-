/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */ 


import  { useCallback } from 'react'
import useToggle from '../utils/useToggle.js'
import IconsOnly from '../icons/IconsOnly'
import flipImage from '../utils/flipImage.js'
import { useDispatch, useSelector } from 'react-redux'

const FlipButton = () => {
    let {current} = useSelector(store => store)
    let dispatch = useDispatch()
    let [hori , setHori] = useToggle(true)
    let [vartical ,setVartical] = useToggle(true)
    let horiIcon = useCallback(e => hori === true ? 'fliptop' : 'flipbottom11',[hori])
    let verIcon = useCallback(e => vartical === true ? 'flipleft' : 'fliprigth1' ,[vartical])
    return (
    <>
    <button
    onClick={
        e => {
        flipImage({horizontal :false,vertical :true , current :current},dispatch )
        setHori()
    }}
    >
        <IconsOnly
        title={'Set Horizontal'}
         name={horiIcon()} 
         />
    </button>
    <button
    onClick={
        e => {
        flipImage({horizontal :true,vertical :false , current :current},dispatch )
         setVartical()
        }}
    >
        <IconsOnly
        title={'Set vertical'}
         name={verIcon()} 
         />
    </button>
    </>
  )
}

export { FlipButton}







