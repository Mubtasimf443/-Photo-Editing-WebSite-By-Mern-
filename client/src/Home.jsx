 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 



import React, { useCallback, useMemo, useRef } from 'react'
import SideBar from './components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { addMeta, addUrl } from './redux/action.jsx'
import { log } from './utils/smallUtils.js'
import Img from './components/Img.jsx'
import Slider from './components/Slider.jsx'
import ResizeSlider from './components/ResizeSlider.jsx'

const Home = () => {
  const meta = useSelector( e => e.meta) 
  const url = useSelector(e => e.url)
  const images = useSelector( e => e.images) 
  
  return (
    <section id="photoshop_section">
  <SideBar />
  <ResizeSlider />
  <Slider />
   <div className="img_container">
    <Img url={url} />
   </div>
</section>
  )
}





export default Home











