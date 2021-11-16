// food material
food_array=["Americanbreakfast.png","Conflex.png","Currysoup.png","Peanutbutter.png","Salmon.png","Sushi.png","Sushiroll.png"]
foodText_array =["Breakfast","Conflex","Curry soup","Peanut butter","Salmon","Sushi","Sushi roll"]
// fast food material
fastFood_array = ["Chickennugget.png","FrenchFries.png","Hamburger.png","Hotdog.png","Hotdogwaffle.png","Onion ring.png","Pizza.png","Potatochip.png","Sandwich.png","FriedChicken.png"]
fastFoodText_array = ["Chicken nugget","French Fries","Hamburger","Hotdog","Hotdog waffle","Onion ring","Pizza","Potato chip","Sandwich","Fried Chicken"]
// dessert material
dessert_array = ["Brownie cake.png","Cake.png","Cookie.png","Croissant.png","Cupcake.png","Macarons.png","Yamroll.png"]
dessertText_array = ["Brownie cake","Cake","Cookie","Croissant","Cupcake","Macarons","Yamroll"]
// beverage material
beverage_array = ["Cocktail.png","Coconutwater.png","Lemonjuice.png","Limejuice.png","Mocktail.png","PineappleJuice.png"]
beverageText_array = ["Cocktail","Coconut water","Lemon juice","Lime juice","Mocktail","Pineapple juice"]

let selectGenre = food_array;
let selectTextGenre = foodText_array

// Select Category
function selectFood(){
    selectGenre = food_array
    selectTextGenre = foodText_array
}
function selectFastFood(){
    selectGenre = fastFood_array
    selectTextGenre = fastFoodText_array

}
function selectDessert(){
    selectGenre = dessert_array
    selectTextGenre = dessertText_array

}
function selectBeverage(){
    selectGenre = beverage_array
    selectTextGenre = beverageText_array

}
// Random food function
function getRandomFood(){
    randomIndex = Math.floor(Math.random() * selectGenre.length); //Get ramdom index
    randomImg = selectGenre[randomIndex] //random image
    randomText = selectTextGenre[randomIndex] //random text
    console.log(randomImg)
    console.log(randomText)
    var textOutput = document.getElementById("historyOutput") // get output id from html
    document.getElementById("output-img").src = '/food-pic/' + randomImg //set random image 
    

    textOutput.innerHTML = textOutput.innerHTML +"<br>"+ randomText +"<br>" //insert history to history box

}