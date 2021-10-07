
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomCLick(){
    var min = document.getElementById("min-input").value;
    var max = document.getElementById("max-input").value;
    
    let randomNumber = getRandomInt(min,max)
    console.log("min:",min)
    console.log("max:",max)
    console.log("random:",randomNumber)
    output.innerHTML = randomNumber
}
function test(){
    var min = document.getElementById("min-input").value;
    var max = document.getElementById("max-input").value;
    console.log("min:",min)
    console.log("max:",max)
    output.innerHTML = min
}
let output = document.getElementById("output");
var min = document.getElementById("min-input").value;
var max = document.getElementById("max-input").value;

let buttonClick = document.getElementById("randomButton");
// buttonClick.addEventListener("click",randomCLick(min,max))
