/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import './utils/jimpBrowser.js'
import { ToastContainer  } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const router = createBrowserRouter([
    {
      path :'*',
      element :<><Home /></>,
    errorElement :<h2>error</h2>
    }
  ])



const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
  )
}

export default App






