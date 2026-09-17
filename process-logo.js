const Jimp = require('jimp');

Jimp.read('public/logo.png')
  .then(image => {
    console.log('Processing image...');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If color is close to white (allow some tolerance for anti-aliasing)
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
      }
    });
    console.log('Writing transparent logo to public/logo_transparent.png...');
    return image.write('public/logo_transparent.png');
  })
  .then(() => {
    console.log('Done!');
  })
  .catch(err => {
    console.error('Error processing logo:', err);
  });
