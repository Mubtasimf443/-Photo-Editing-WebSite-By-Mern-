/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */ 


import React from 'react'

const newUrl= (img) => {
   let url = URL.createObjectURL(new Blob(img, {type :'image/png'}))
   return url
}

export default newUrl


