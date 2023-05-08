const hand = document.querySelector(".hand");
//This targets the hand element
let angle = 0
//Initialises a variable to keep track of the angle of the hand
let intervalId = setInterval(handMove, 1000);

function handMove(){
    angle += 30
    hand.style.transform = `rotate(${angle}deg)`;
    if(angle === 360){
        clearInterval(intervalId);}
    return
    }


