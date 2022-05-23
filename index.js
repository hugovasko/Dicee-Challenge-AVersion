// Image 1 change

let randomNumber1 = Math.floor(Math.random()*6 + 1);
let image1Source = "images/dice" + randomNumber1 + ".png";

let image1Change = document.querySelectorAll("img")[0];
image1Change.setAttribute("src", image1Source);


// Image 2 change

let randomNumber2 = Math.floor(Math.random()*6+1);
let image2Source = "images/dice" + randomNumber2 + ".png";

let image2Change = document.querySelectorAll("img")[1];
image2Change.setAttribute("src", image2Source);

//If image 1 is greater
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){//If image 2 is greater
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{ //If the score is equal
    document.querySelector("h1").innerHTML = "Draw!";
}