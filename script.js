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

  // Delay the check for a moment to ensure images have been updated
  setTimeout(() => {
    // Check if all images are the same
    if (randomizedImages.berry === randomizedImages.cherry && randomizedImages.cherry === randomizedImages.melon) {
      // Trigger pop-up or animation
      alert("All images are the same!");

      // For an animation (example: adding a class for animation)
      document.getElementById('image1').classList.add('animate');
      document.getElementById('image2').classList.add('animate');
      document.getElementById('image3').classList.add('animate');
    }
  }, 50);  // 50ms delay to allow for image updates
});
