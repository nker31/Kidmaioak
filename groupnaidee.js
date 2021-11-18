inputArray = []
teamOne = []
teamTwo = []
teamThree = []
teamFour =[]

// 
function fn(){
    let textInput = document.getElementById("textInput").value
    let inputSplit = textInput.split(",")
    console.log("input",inputSplit[2])
    //Add item to inputArray
    for(let i=0;i<inputSplit.length;i++){
        inputArray.push(inputSplit[i])


    }
    console.log("array", inputArray)
    
    let rnd = inputArray.length
    // Check radio button
    if(document.getElementById("2team").checked){
        // console.log("Great")
        
        for(let k=0;k<(rnd/2);k++){
            //add to team one array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            teamOne.push(inputArray[randomIndex])
            console.log("Round: ",k+1," Random Index:",randomIndex)
            console.log("Push:",inputArray[randomIndex])
            // delete inputArray[randomIndex]
            console.log("Round: ",k+1," Random Index:",randomIndex)
            inputArray.splice(randomIndex,1)
            console.log("After pop",inputArray)
            //add to team two array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            teamTwo.push(inputArray[randomIndex])
            console.log("Round: ",k+1," Random Index:",randomIndex)
            console.log("Push:",inputArray[randomIndex])
            // delete inputArray[randomIndex]
            console.log("Round: ",k+1," Random Index:",randomIndex)
            inputArray.splice(randomIndex,1)
            console.log("After pop",inputArray)
            console.log("==============================")
            
        }
        console.log("Team one array",teamOne)
        console.log("Team two array",teamTwo)

    }
    else if(document.getElementById("3team").checked){
        for(let k=0;k<(rnd/3);k++){
            //add to team one array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            teamOne.push(inputArray[randomIndex])
            console.log("Round: ",k+1," Random Index:",randomIndex)
            console.log("Push:",inputArray[randomIndex])
            // delete inputArray[randomIndex]
            console.log("Round: ",k+1," Random Index:",randomIndex)
            inputArray.splice(randomIndex,1)
            console.log("After pop",inputArray)
            if(inputArray.length === 0){
                break
            }
            //add to team two array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            teamTwo.push(inputArray[randomIndex])
            console.log("Round: ",k+1," Random Index:",randomIndex)
            console.log("Push:",inputArray[randomIndex])
            // delete inputArray[randomIndex]
            console.log("Round: ",k+1," Random Index:",randomIndex)
            inputArray.splice(randomIndex,1)
            console.log("After pop",inputArray)
            if(inputArray.length === 0){
                break
            }
            
            //add to team three array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            teamThree.push(inputArray[randomIndex])
            console.log("Round: ",k+1," Random Index:",randomIndex)
            console.log("Push:",inputArray[randomIndex])
            // delete inputArray[randomIndex]
            console.log("Round: ",k+1," Random Index:",randomIndex)
            inputArray.splice(randomIndex,1)
            console.log("After pop",inputArray)
            console.log("==============================")
            
        }
        console.log("Team one array",teamOne)
        console.log("Team two array",teamTwo)
        console.log("Team three array",teamThree)
        for(let j=0;j<teamThree.length;j++){
            if(teamThree[j] === undefined){

            }

        }

    }
    else if(document.getElementById("4team").checked){
        console.log("Woo")
        
    }
    





}
//a,s,d,f,g,h,j,k,z,x,c,v,b,n