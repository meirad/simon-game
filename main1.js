let level = 0;
let currentStep = 0;
let arrRound = [];
let chosenColor = createStep();
let maxLevel = 10;

let audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let lost = new Audio('https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3');

let clickred = document.getElementById('red');
let clickblue = document.getElementById('blue');
let clickgreen = document.getElementById('green');
let clickyellow = document.getElementById('yellow');

clickred.addEventListener("click", () => {
    playround('red');
    audio1.play();
    clickred.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
    audio1.onended = () => {
        clickred.style.backgroundColor = "red";
    };
});

clickblue.addEventListener("click", () => {
    playround('blue');
    audio2.play();
    clickblue.style.backgroundColor = "rgb(0, 0, 255, 0.5)";
    audio2.onended = () => {
        clickblue.style.backgroundColor = "blue";
    };
});

clickgreen.addEventListener("click", () => {
    playround('green');
    audio3.play();
    clickgreen.style.backgroundColor = "rgb(0, 255, 0, 0.5)";
    audio3.onended = () => {
        clickgreen.style.backgroundColor = "green";
    };
});

clickyellow.addEventListener("click", () => {
    playround('yellow');
    audio4.play();
    clickyellow.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
    audio4.onended = () => {
        clickyellow.style.backgroundColor = "yellow";
    };
});
document.getElementById("btnstart").addEventListener("click", function startGame() {
    chosenColor = createStep();
    arrRound.push(chosenColor);
    userTurn();
    this.removeEventListener("click", startGame);
    this.style.display = 'none';
});

function playround(color) {
    if (color === arrRound[currentStep]) {
        currentStep++;
        if (currentStep === arrRound.length) {
            level++;
            document.getElementById('levels').innerHTML = level;
            
            if (level > maxLevel) {
                alert('You win');
                reset();
            } else {
                currentStep = 0;
                const nextSequence = createStep();
                arrRound.push(nextSequence);
                setTimeout(userTurn, 1000);
            }
        }
    } else {
        alert('You pressed the wrong color, you are out', lost.play());
        reset();
    }
}

function createStep() {
    const tiles = ['red', 'green', 'blue', 'yellow'];
    const pickcolor = tiles[Math.floor(Math.random() * tiles.length)];
    return pickcolor;
}

function userTurn() {

console.log(arrRound);
for (let i = 0; i < arrRound.length; i++) {
    setTimeout(() => {
        if (arrRound[i] === 'red') {
            setTimeout(() => {
                clickred.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
                audio1.play();
                setTimeout(() => {
                    clickred.style.backgroundColor = "red";
                }, 1000);
            }, 1000 * i);
        }
        else if(arrRound[i] === 'blue') {
            setTimeout(() => {
                clickblue.style.backgroundColor = "rgb(0, 0, 255, 0.5)";
                audio2.play();
                setTimeout(() => {
                    clickblue.style.backgroundColor = "blue";
                }, 1000);
            }, 1000 * i);
        }
        else if(arrRound[i] === 'green'){ 
            setTimeout(() => {
                clickgreen.style.backgroundColor = "rgb(0, 255, 0, 0.5)";
                audio3.play();
                setTimeout(() => {
                    clickgreen.style.backgroundColor = "green";
                }, 1000);
            }, 1000 * i);
        }
        else if(arrRound[i] === 'yellow'){ 
            setTimeout(() => {
                clickyellow.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
                audio4.play();
                setTimeout(() => {
                    clickyellow.style.backgroundColor = "yellow";
                }, 1000);
            }, 1000 * i);
        }
        
    }, 500 * i);
}
}



function reset() {

    location.reload();
}


let resetButton = document.getElementById('reset');
resetButton.style.display = 'none';
resetButton.addEventListener('click', reset);