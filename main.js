const hand = document.querySelector(".hand");
let angle = 0
let intervalId = setInterval(handMove, 1000);

function handMove(){
    angle += 30
    hand.style.transform = `rotate(${angle}deg)`;
    if(angle === 360){
        clearInterval(intervalId);}
    return
    }


