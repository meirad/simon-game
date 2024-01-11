
let arrRound = [];
let gameCount;
let userCount;
let level = 0;
let userClickCount = 0; 

let clickred = document.getElementById("red");
let clickblue = document.getElementById("blue");
let clickgreen = document.getElementById("green");
let clickyellow = document.getElementById("yellow");

clickred.addEventListener("click", () => playround(1));
clickblue.addEventListener("click", () => playround(2));
clickgreen.addEventListener("click", () => playround(3));
clickyellow.addEventListener("click",() =>  playround(4));

function initGame() {
    console.clear();
    gameCount = userCount = 1;
    arrRound = [];
    console.log('Initializing game... ');
}

let isGameTurn = false;

function userTurn() {
    return new Promise((resolve) => {
        console.log(arrRound);
        let i = 0;
        const intervalId = setInterval(() => {
            if (i >= arrRound.length) {
                clearInterval(intervalId);
                resolve();
            } else {
                playColor(arrRound[i]);
                i++;
            }
        }, 1000);
    });
}

function playColor(color) {
    if (color === 'red') {
        clickred.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
        audio1.play();
        setTimeout(() => {
            clickred.style.backgroundColor = "red";
        }, 1000);
    } else if (color === 'blue') {
        clickblue.style.backgroundColor = "rgb(0, 0, 255, 0.5)";
        audio2.play();
        setTimeout(() => {
            clickblue.style.backgroundColor = "blue";
        }, 1000);
    } else if (color === 'green') {
        clickgreen.style.backgroundColor = "rgb(0, 255, 0, 0.5)";
        audio3.play();
        setTimeout(() => {
            clickgreen.style.backgroundColor = "green";
        }, 1000);
    } else if (color === 'yellow') {
        clickyellow.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
        audio4.play();
        setTimeout(() => {
            clickyellow.style.backgroundColor = "yellow";
        }, 1000);
    }
}
    document.getElementById("btnstart").addEventListener("click", () => {
        isGameTurn = true;
        playround(createStep());
        isGameTurn = false;
    });