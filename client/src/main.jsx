 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 

import '../public/css/style.css'
import '../public/css/global.css'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './redux/store';
import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(
 <StrictMode >
  <Provider store={store}>
 <App />
  </Provider>
 </StrictMode>
   
)
