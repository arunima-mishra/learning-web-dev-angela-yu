// console.log("Hello");

// for(var i=0;i<5;i++){
//     console.log(i+"apple");
// }

var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });