/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */
/*Allah is enough for me */ 



const main =  '/icon/upload-image.png'
const active = '/icon/replace_image1.png'
/*

let obj = {
    main : a0acf0d2,
    second : 88c9ff,
    active :9dd2fd
}*/
const Upload_img_icon = ({status , className}) => {
  return (
    <img className={className} src={status === 'main' ? main : active} alt="" />
)
}
export default Upload_img_icon


