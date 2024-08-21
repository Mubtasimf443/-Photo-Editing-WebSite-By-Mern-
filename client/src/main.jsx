/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 
import '../public/css/global.css'
import '../public/css/style.css'
import '../public/css/desktopResponsive.css'
import '../public/css/mublieResponsive.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './redux/store';
import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>
   
)