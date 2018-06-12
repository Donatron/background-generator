var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var toRight = document.getElementById("to-right");
var toLeft = document.getElementById("to-left");
var toTop = document.getElementById("to-top");
var toBottom = document.getElementById("to-bottom");
var direction = 'to right';
var randomise = document.getElementById("randomise");

body.style.background = "linear-gradient("
                        + direction
                        + ", "
                        + color1.value
                        + ", " + color2.value + ")";

body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";

css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background =
    "linear-gradient("
    + direction
    + ", "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Add event listeners for radio buttons to change direction of gradient
toRight.addEventListener("input", function() {
  direction = 'to right';
  setGradient();
});

toLeft.addEventListener("input", function() {
  direction = 'to left';
  setGradient();
});

toTop.addEventListener("input", function() {
  direction = 'to top';
  setGradient();
});

toBottom.addEventListener("input", function() {
  direction = 'to bottom';
  setGradient();
});

// Randomize gradient colours
// Create objects for holding colour values
var fromColor = {
  red: '',
  green: '',
  blue: ''
};

var toColor = {
  red: '',
  green: '',
  blue: ''
};

// 2. Create randomise function for returning random colour values
function randomNumber() {
  var random = Math.floor(Math.random() * 255 + 1);
  return random;
}

// 3. Add random colours to objects
function setRandomColours() {
  // From colours
  fromColor.red = randomNumber();
  fromColor.green = randomNumber();
  fromColor.blue = randomNumber();

  // To colours
  toColor.red = randomNumber();
  toColor.green = randomNumber();
  toColor.blue = randomNumber();
}

// Create function for converting RGB to Hex
function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

// Find RGB values and convert to hex
function convertToHex(colorObject) {
  colorObject.red = rgbToHex(colorObject.red);
  colorObject.green = rgbToHex(colorObject.green);
  colorObject.blue = rgbToHex(colorObject.blue);

  var hex = '#' + colorObject.red +colorObject.green + colorObject.blue;

  return hex;
}

// Set background
randomise.addEventListener('click', function() {
  setRandomColours();
  color1.value = convertToHex(fromColor);
  color2.value = convertToHex(toColor);
  setGradient();
});
