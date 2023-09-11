// console.log('hello word')

var colorsArray = ["red", "blue", "orange", "orangered"];
var buttonEl = document.querySelector("#color-button");

buttonEl.addEventListener("click", function () {
  var colorTextEl = document.querySelector(".color");
  var randomNumber = 2;
  document.body.style.backgroundColor = colorsArray[randomNumber];
  colorTextEl.textContent = colorsArray[randomNumber];
});

function getRandomNumber() {
  return Math.random() * colorsArray.length;
}
