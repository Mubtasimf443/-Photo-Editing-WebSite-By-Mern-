/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 


import  { useCallback } from 'react'


const IconsOnly = ({name ,alt ,title, className ,onClick}) => {


    let SRC = useCallback(e => {
        if (name) return '/icon/' + name + '.png'
        return ''
    },[name])
    function onclickFunction(e) {
        if ( typeof onClick === 'function' ) return onClick(e)
    }
  return (
    <img 
    title={title ? title : ''}
    src={SRC()}
    alt={alt ? alt : ''}
    className={className ? className : 'img_icons'}
    onClick={onclickFunction}
    />
  )
}

export default IconsOnly














