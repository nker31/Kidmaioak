inputArray = []
teamOne = []
teamTwo = []
teamThree = []
teamFour =[]
allTeam = [teamOne,teamTwo,teamThree,teamFour]
// 
function fn(){
    let textInput = document.getElementById("textInput").value
    let inputSplit = textInput.split(",")
    //Add item to inputArray
    for(let i=0;i<inputSplit.length;i++){
        inputArray.push(inputSplit[i])
    }
    
    let len = inputArray.length
    // Check radio button
    if(document.getElementById("2team").checked){
        if(inputSplit.length > 8){
            alert("You choosed 2 teams, Maximum 8 items ")
            inputArray = []
            return false;
        }
        else{
            add(len,2)
        }
        
    }
    else if(document.getElementById("3team").checked){
        if(inputSplit.length > 12){
            alert("You choosed 3 teams, Maximum 12 items ")
            inputArray = []
            return false;
        }
        else{
            add(len,3)
        }
        
    }
    else if(document.getElementById("4team").checked){
        if(inputSplit.length > 16){
            alert("You choosed 4 teams, Maximum 16 items ")
            inputArray = []
            return false;
        }
        else{
            add(len,4)
        }
    }
    





}
function add(len,numOfTeam){
    outputTeamOne = document.getElementById("teamOne")
    outputTeamTwo = document.getElementById("teamTwo")
    outputTeamThree = document.getElementById("teamThree")
    outputTeamFour = document.getElementById("teamFour")
    inputAllTeam = [outputTeamOne,outputTeamTwo,outputTeamThree,outputTeamFour]
    outputTeamOne.innerHTML = ''
    outputTeamTwo.innerHTML = ''
    outputTeamThree.innerHTML = ''
    outputTeamFour.innerHTML = ''
    for(let k=0;k<(len/numOfTeam);k++){
        for(let l=0;l<numOfTeam;l++){
            //add to team three array
            randomIndex = Math.floor(Math.random() * inputArray.length);
            //add item to team box
            inputAllTeam[l].innerHTML = inputAllTeam[l].innerHTML + "<p>" + inputArray[randomIndex] +"</p>"
            // delete inputArray[randomIndex]
            inputArray.splice(randomIndex,1)
            if(inputArray.length === 0){
                break
            }
            
        }
        
    }
}



//a,s,d,f,g,h,j,k,z,x,c,v,b,n