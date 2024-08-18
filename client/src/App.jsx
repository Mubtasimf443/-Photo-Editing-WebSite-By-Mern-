/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import { useSelector ,useDispatch } from "react-redux";
import './utils/jimpBrowser.js'
import { useMemo } from "react";
import { useEffect } from "react";
import { log } from "./utils/smallUtils.js";
import { addMeta, addUrl } from './redux/action'
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


   let meta = useSelector( e => e.meta) 
   let url = useSelector(e => e.url)
   let store = useSelector(store => store)
   useMemo(e => log(store) , [store])
   const dispatch = useDispatch()
  return (
    <>
      <RouterProvider router={router} />
    <ToastContainer />
    </>
  
  )
}

export default App






