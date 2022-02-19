const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const insertBackground = document.body.style;

insertBackground.background = `url(img/${chosenImage})`;
insertBackground.backgroundSize = "100%";
insertBackground.backgroundPosition = "center";
insertBackground.backgroundOrigin = "padding-box";
insertBackground.backgroundRepeat = "no-repeat";
