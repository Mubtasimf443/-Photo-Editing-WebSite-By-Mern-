 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 


import SideBar from './components/SideBar'
import Img from './components/Img.jsx'
import Slider from './components/Slider.jsx'
import ResizeSlider from './components/ResizeSlider.jsx'

const Home = () => { 
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











