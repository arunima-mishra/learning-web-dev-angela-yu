randomNumber1 = Math.floor(Math.random() *(6)+1);
var img1_ref= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", img1_ref);

randomNumber2 = Math.floor(Math.random() *(6)+1);
var img2_ref= "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", img2_ref);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}

else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}