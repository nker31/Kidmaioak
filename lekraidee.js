
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function randomCLick(min,max){
//     console.log("min:",min)
//     console.log("max:",max)
//     let randomNumber = getRandomInt(min,max)
//     alert(randomNumber)
//     output.innerHTML = randomNumber
// }
function test(min,max){
    console.log("min:",minValue)
    console.log("max:",maxValue)
    output.innerHTML = min
}
let output = document.getElementById("output");
let min = document.getElementById("min-input");
let max = document.getElementById("max-input");
let minValue = Number(min.value);
let maxValue = Number(max.value);
let buttonClick = document.getElementById("randomButton");
buttonClick.addEventListener("click",test)
