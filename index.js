function generateImg(ranNum){
    var img;
    if(ranNum===1){
        img = "/images/dice1.png";
    }
    else if(ranNum===2){
        img = "/images/dice2.png";
    }
    else if(ranNum===3){
        img = "/images/dice3.png";
    }
    else if(ranNum===4){
        img = "/images/dice4.png";
    }
    else if(ranNum===5){
        img = "/images/dice5.png";
    }
    else{
        img = "/images/dice6.png";
    }
    return img;
}
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src",generateImg(randomNumber1));
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src",generateImg(randomNumber2));
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "Tie, Refresh to Check";
}