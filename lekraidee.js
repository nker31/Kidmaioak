
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomCLick(){
    var min = document.getElementById("min-input").value;
    var max = document.getElementById("max-input").value;
    let historyOutput = document.getElementById("numberOuput")
    
    let randomNumber = getRandomInt(min,max)
    
    if(rnd === 0){

    }
    else if(rnd > 0){
        historyOutput.innerHTML = historyNumber
    }
    console.log("min:",min)
    console.log("max:",max)
    console.log("random:",randomNumber)
    output.innerHTML = randomNumber
    historyNumber = randomNumber
    rnd+=1
    console.log("Round: ",rnd)
    console.log("History num: ",historyNumber)
}
let rnd = 0
let historyNumber = 0

let output = document.getElementById("output");

let buttonClick = document.getElementById("randomButton");
// buttonClick.addEventListener("click",randomCLick(min,max))
