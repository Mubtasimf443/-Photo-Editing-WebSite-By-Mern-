import { addUrl, returnTypeValue } from '../redux/action.jsx';
import actions from '../redux/actions.jsx';
import { BusyReason } from '../redux/BusyReason.jsx';
import './jimpBrowser.js'
import { errToast } from './toast.js';



//blurImage
export async function blurImage(url) {
  // Read the image.
  const image = await Jimp.read(url);
  await image.blur(20);
  // Save and overwrite the image
  return image
}


//waterMark 
export async function waterMark(waterMarkImage) {
  let watermark = await Jimp.read(waterMarkImage);
  watermark = watermark.resize(300, 300);
  const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
  watermark = await watermark
  image.composite(watermark, 0, 0, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 0.5
  })
  await image.writeAsync(`test/${Date.now()}_waterMark_150x150.png`);
}


// Crop
export async function crop() {
  // Read the image.
  const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
  await image.crop(500, 500, 150, 150);
  // Save and overwrite the image
  await image.writeAsync(`test/${Date.now()}_crop_150x150.png`);
}


//rolate 
export async function rotate() {
  // Read the image.
  const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
  await image.rotate(45);
  // Save and overwrite the image
  await image.writeAsync(`test/${Date.now()}_rotate_150x150.png`);
}



// flil

export async function flip() {
  // Read the image.
  const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
  await image.flip(true, false);
  // Save and overwrite the image
  await image.writeAsync(`test/${Date.now()}_flip_150x150.png`);
  console.log("flipped")
}


// grayScale 
export async function greyscale() {
  // Read the image.
  const image = await Jimp.read('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg');
  await image.greyscale();
  // Save and overwrite the image
  await image.writeAsync(`test/${Date.now()}_greyscale_150x150.png`);
}



