const btn = document.getElementById("btn");
let rgb = document.getElementById("rgb");

let colorValues = Array.from(Array(255).keys());

function getRandomValue() {
  let arr = [];
  while (arr.length < 3) {
    let value = Math.floor(Math.random() * colorValues.length);
    // the below line is useful if the pool of numbers do not start from 0
    arr = arr.concat(colorValues.splice(value, 1));
    // since we're starting from 0, we can just use the below line instead:
    // arr = arr.concat(value);
  }
  return "RGB(" + arr.join(", ") + ")";
}

btn.addEventListener("click", function() {
    rgb.textContent = (getRandomValue());
    document.body.style.background = getRandomValue();
    console.log("clicked");    
    console.log(getRandomValue());
  });