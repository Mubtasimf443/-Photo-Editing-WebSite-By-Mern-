 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 



import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import SideBar from './components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { addMeta, addUrl } from './redux/action.jsx'
import { log } from './utils/smallUtils.js'
import Img from './components/Img.jsx'
import Slider from './components/Slider.jsx'
import ResizeSlider from './components/ResizeSlider.jsx'
import LoaderIcon from './icons/LoaderIcon.jsx'

const Home = () => { 
  let {prev} = useSelector(store => store)
  useEffect(e => log(prev) , [prev])
  return (
    <section id="photoshop_section">
  <SideBar />
  <ResizeSlider />
  <Slider />
   <div className="img_container">
    <Img />
   </div>
</section>
  )
}





export default Home











