const adressLat = 55.7522;
const adressLong = 37.6156;
const positionLat = 59.89444 ;
const positionLong = 30.26417;

const pi = 3.1415926535

let aLat = adressLat * pi / 180;
let aLong = adressLong * pi / 180;
let pLat = positionLat * pi / 180;
let pLong = positionLong * pi / 180;

const cl1 = Math.cos(aLat);
const cl2 = Math.cos(pLat);
const sl1 = Math.sin(aLat);
const sl2 = Math.sin(pLat);
const delta = (pLong) - (aLong);
const cdelta = Math.cos(delta);
const sdelta = Math.sin(delta);


const y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
const x = sl1 * sl2 + cl1 * cl2 * cdelta;

const ad = Math.atan2(y, x);
const dist = ad * 6371;

console.log(dist);