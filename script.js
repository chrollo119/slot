let B1 = [
  '/public/berry.png',
  '/public/cherry.png',
  '/public/melon.png'
];

let B2 = [
  '/public/berry.png',
  '/public/cherry.png',
  '/public/melon.png'
];

let B3 = [
  '/public/berry.png',
  '/public/cherry.png',
  '/public/melon.png'
];



// Function to randomize images
function randomImages() {
  const index1 = Math.floor(Math.random() * B1.length);
  const index2 = Math.floor(Math.random() * B2.length);
  const index3 = Math.floor(Math.random() * B3.length);

  return {
    berry: B1[index1],
    cherry: B2[index2],
    melon: B3[index3],
  }; 
}

// Event listener for button click
document.getElementById('button').addEventListener('click', () => {
  const randomizedImages = randomImages();

  // Update the image elements in the UI
  document.getElementById('image1').src = randomizedImages.berry;
  document.getElementById('image2').src = randomizedImages.cherry;
  document.getElementById('image3').src = randomizedImages.melon;





});
