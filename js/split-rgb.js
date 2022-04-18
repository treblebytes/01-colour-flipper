const btnR = document.getElementById("btnR");
const btnG = document.getElementById("btnG");
const btnB = document.getElementById("btnB");
let rgbValue = document.getElementById("rgb");

function getSingleValue() {
  let range = Array.from(Array(255).keys());
  let value = Math.floor(Math.random() * range.length);
  return value;
}

btnR.addEventListener("click", function() {
  let rValue = getSingleValue();
  // Extract the number values only from RGB String, into an array
  let rgb = document.getElementById("rgb").textContent.match(/\d+/g).map(Number);
  // Replace previous rValue with new generated rValue
  rgb.splice(0, 1, rValue);
  // Replace the new RGB value into the HTML content 
  rgb = "RGB(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";  
  document.body.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
})

btnG.addEventListener("click", function() {
  let gValue = getSingleValue();
  let rgb = document.getElementById("rgb").textContent.match(/\d+/g).map(Number);
  rgb.splice(1, 1, gValue);
  rgb = "RGB(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"; 
  document.body.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
})

btnB.addEventListener("click", function() {
  let bValue = getSingleValue();
  let rgb = document.getElementById("rgb").textContent.match(/\d+/g).map(Number);
  rgb.splice(2, 1, bValue);
  rgb = "RGB(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"; 
  document.body.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
})
