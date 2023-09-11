// console.log('hello word')

var colorsArray = ["red", "blue", "orange", "pink", "white"];
var buttonEl = document.querySelector("#color-button");

buttonEl.addEventListener("click", function () {
  var colorTextEl = document.querySelector(".color");
  var randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colorsArray[randomNumber];
  colorTextEl.textContent = colorsArray[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorsArray.length);
}
