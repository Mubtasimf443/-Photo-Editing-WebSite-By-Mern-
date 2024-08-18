/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/* Allah is enough for me */


import React from 'react'

const ShowDownImage = ({arr}) => {
    if (arr.length === 0) return <></>

  return (
    <button onClick={e => copyMetaData(meta)}>
    {/* copy to clipboard  */}
   <i className="fa-solid fa-download sidebar_icon "></i>
  </button>
  )
}

export default ShowDownImage


















