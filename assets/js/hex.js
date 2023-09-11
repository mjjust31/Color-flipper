var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var buttonEl = document.querySelector(".btn");
var colorEl = document.querySelector(".color");

buttonEl.addEventListener("click", function () {
  // console.log('hello')

  var hexColor = "#";
  for (var i = 0; i < 6; i++) {
    hexColor += hexArray[getRandomNumber()];
  }
  colorEl.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexArray.length);
}
