// Selecciona cada casilla
const topLeftButton = document.querySelector(".top-left");
const topCenterButton = document.querySelector(".top-center");
const topRightButton = document.querySelector(".top-right");
const middleLeftButton = document.querySelector(".middle-left");
const middleCenterButton = document.querySelector(".middle-center");
const middleRightButton = document.querySelector(".middle-right");
const bottomLeftButton = document.querySelector(".bottom-left");
const bottomCenterButton = document.querySelector(".bottom-center");
const bottomRightButton = document.querySelector(".bottom-right");
const cells = document.querySelectorAll(".box");
const line = document.querySelector(".line"); // linea que marca al ganador
const restartButton = document.getElementById("restart");
const announcerText = document.querySelector(".winner")
// Selecciona el marcador
const playerScore = document.getElementById("playerScoreText");
const computerScore = document.getElementById("computerScoreText");
// Variable para verificar si la casilla esta marcada o no
let isTopLeftMarked = false;
let isTopCenterMarked = false;
let isTopRightMarked = false;
let isMiddleLeftMarked = false;
let isMiddleCenterMarked = false;
let isMiddleRightMarked = false;
let isBottomLeftMarked = false;
let isBottomCenterMarked = false;
let isBottomRightMarked = false;
let isWinner = false;
let turn = true;
let bestOptions = [];
let options = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let players = [
    {
        name: "Jugador",
        isTopLeftMarked: false,
        isTopCenterMarked: false,
        isTopRightMarked: false,
        isMiddleLeftMarked: false,
        isMiddleCenterMarked: false,
        isMiddleRightMarked: false,
        isBottomLeftMarked: false,
        isBottomCenterMarked: false,
        isBottomRightMarked: false,
        color: "#40bf80",
        score: 0
    },
    {
        name: "NemBot",
        isTopLeftMarked: false,
        isTopCenterMarked: false,
        isTopRightMarked: false,
        isMiddleLeftMarked: false,
        isMiddleCenterMarked: false,
        isMiddleRightMarked: false,
        isBottomLeftMarked: false,
        isBottomCenterMarked: false,
        isBottomRightMarked: false,
        color: "red",
        score: 0
    }
];
// Verifica que la casilla seleccionada no este marcada y comprueba si hay un ganador
function markTopLeft(user) {
    if (isTopLeftMarked) {
        return;
    }
    user === 0 ? topLeftButton.innerHTML = "O" : topLeftButton.innerHTML ="X"
    topLeftButton.style.backgroundColor = players[user].color;
    isTopLeftMarked = true;
    players[user].isTopLeftMarked = true;
    checkWinner(user);
}

function markTopCenter(user) {
    if (isTopCenterMarked) {
        return;
    }
    user === 0 ? topCenterButton.innerHTML = "O" : topCenterButton.innerHTML = "X"
    topCenterButton.style.backgroundColor = players[user].color;
    isTopCenterMarked = true;
    players[user].isTopCenterMarked = true;
    checkWinner(user);
}

function markTopRight(user) {
    if (isTopRightMarked) {
        return;
    }
    user === 0 ? topRightButton.innerHTML = "O" : topRightButton.innerHTML = "X"
    topRightButton.style.backgroundColor = players[user].color;
    isTopRightMarked = true;
    players[user].isTopRightMarked = true;
    checkWinner(user);
}

function markMiddleLeft(user) {
    if (isMiddleLeftMarked) {
        return;
    }
    user === 0 ? middleLeftButton.innerHTML = "O" : middleLeftButton.innerHTML = "X"
    middleLeftButton.style.backgroundColor = players[user].color;
    isMiddleLeftMarked = true;
    players[user].isMiddleLeftMarked = true;
    checkWinner(user);
}

function markMiddleCenter(user) {
    if (isMiddleCenterMarked) {
        return;
    }
    user === 0 ? middleCenterButton.innerHTML = "O" : middleCenterButton.innerHTML = "X"
    middleCenterButton.style.backgroundColor = players[user].color;
    isMiddleCenterMarked = true;
    players[user].isMiddleCenterMarked = true;
    checkWinner(user);
}

function markMiddleRight(user) {
    if (isMiddleRightMarked) {
        return;
    }
    user === 0 ? middleRightButton.innerHTML = "O" : middleRightButton.innerHTML = "X"
    middleRightButton.style.backgroundColor = players[user].color;
    isMiddleRightMarked = true;
    players[user].isMiddleRightMarked = true;
    checkWinner(user);
}

function markBottomLeft(user) {
    if (isBottomLeftMarked) {
        return;
    }
    user === 0 ? bottomLeftButton.innerHTML = "O" : bottomLeftButton.innerHTML = "X"
    bottomLeftButton.style.backgroundColor = players[user].color;
    isBottomLeftMarked = true;
    players[user].isBottomLeftMarked = true;
    checkWinner(user);
}

function markBottomCenter(user) {
    if (isBottomCenterMarked) {
        return;
    }
    user === 0 ? bottomCenterButton.innerHTML = "O" : bottomCenterButton.innerHTML = "X"
    bottomCenterButton.style.backgroundColor = players[user].color;
    isBottomCenterMarked = true;
    players[user].isBottomCenterMarked = true;
    checkWinner(user);
}

function markBottomRight(user) {
    if (isBottomRightMarked) {
        return;
    }
    user === 0 ? bottomRightButton.innerHTML = "O" : bottomRightButton.innerHTML = "X"
    bottomRightButton.style.backgroundColor = players[user].color;
    isBottomRightMarked = true;
    players[user].isBottomRightMarked = true;
    checkWinner(user);
}
function isTopRowOpen() {
    return  !(players[0].isTopLeftMarked || players[0].isTopCenterMarked || players[0].isTopRightMarked) && 
    (players[1].isTopLeftMarked || players[1].isTopCenterMarked || players[1].isTopRightMarked)
}

function isMiddleRowOpen() {
    return !(players[0].isMiddleLeftMarked || players[0].isMiddleCenterMarked || players[0].isMiddleRightMarked) &&
    (players[1].isMiddleLeftMarked || players[1].isMiddleCenterMarked || players[1].isMiddleRightMarked)
}

function isBottomRowOpen() {
    return !(players[0].isBottomLeftMarked || players[0].isBottomCenterMarked || players[0].isBottomRightMarked) &&
    (players[1].isBottomLeftMarked || players[1].isBottomCenterMarked || players[1].isBottomRightMarked)
}

function isLeftColumnOpen() {
    return  !(players[0].isBottomLeftMarked || players[0].isMiddleLeftMarked || players[0].isTopLeftMarked) &&
    (players[1].isBottomLeftMarked || players[1].isMiddleLeftMarked || players[1].isTopLeftMarked)
}

function isMiddleColumnOpen() {
    return !(players[0].isBottomCenterMarked || players[0].isMiddleCenterMarked || players[0].isTopCenterMarked) &&
    (players[1].isBottomCenterMarked || players[1].isMiddleCenterMarked || players[1].isTopCenterMarked)
}

function isRightColumnOpen() {
    return !(players[0].isBottomRightMarked || players[0].isMiddleRightMarked || players[0].isTopRightMarked) &&
    (players[1].isBottomRightMarked || players[1].isMiddleRightMarked || players[1].isTopRightMarked)
}

function isDiagonal1Open() {
    // 45deg anti-clockwise diagonal
    return !(players[0].isBottomLeftMarked || players[0].isMiddleCenterMarked || players[0].isTopRightMarked) &&
    (players[1].isBottomLeftMarked || players[1].isMiddleCenterMarked || players[1].isTopRightMarked)
}

function isDiagonal2Open() {
    // 45deg clock-wise diagonal
    return !(players[0].isBottomRightMarked || players[0].isMiddleCenterMarked || players[0].isTopLeftMarked) &&
    (players[1].isBottomRightMarked || players[1].isMiddleCenterMarked || players[1].isTopLeftMarked)
}

function bestMove() {
    let user = 0;
    // Defensive algorithm
    const resultDefensive = 
    // filas
    players[user].isTopLeftMarked && players[user].isTopCenterMarked && !isTopRightMarked ?  [2] :
    players[user].isTopLeftMarked && players[user].isTopRightMarked && !isTopCenterMarked ? [1] :
    players[user].isTopCenterMarked && players[user].isTopRightMarked && !isTopLeftMarked ? [0] :
    players[user].isMiddleLeftMarked && players[user].isMiddleCenterMarked && !isMiddleRightMarked ? [5] : 
    players[user].isMiddleLeftMarked && players[user].isMiddleRightMarked && !isMiddleCenterMarked ? [4] :
    players[user].isMiddleCenterMarked && players[user].isMiddleRightMarked && !isMiddleLeftMarked ? [3] :
    players[user].isBottomLeftMarked && players[user].isBottomCenterMarked && !isBottomRightMarked ? [8] :
    players[user].isBottomLeftMarked && players[user].isBottomRightMarked && !isBottomCenterMarked ? [7]:
    players[user].isBottomCenterMarked && players[user].isBottomRightMarked && !isBottomLeftMarked  ? [6] :
    // diagonales
    players[user].isBottomLeftMarked && players[user].isMiddleCenterMarked && !isTopRightMarked  ? [2] :
    players[user].isMiddleCenterMarked && players[user].isTopRightMarked && !isBottomLeftMarked  ? [6] :
    players[user].isBottomLeftMarked && players[user].isTopRightMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isBottomRightMarked && players[user].isMiddleCenterMarked && !isTopLeftMarked  ? [0] :
    players[user].isBottomRightMarked && players[user].isTopLeftMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isMiddleCenterMarked && players[user].isTopLeftMarked && !isBottomRightMarked  ? [8] :
    // columnas
    players[user].isBottomLeftMarked && players[user].isMiddleLeftMarked && !isTopLeftMarked  ? [0] :
    players[user].isBottomLeftMarked && players[user].isTopLeftMarked && !isMiddleLeftMarked  ? [3] :
    players[user].isMiddleLeftMarked && players[user].isTopLeftMarked && !isBottomLeftMarked   ? [6] :
    players[user].isBottomCenterMarked && players[user].isMiddleCenterMarked && !isTopCenterMarked  ? [1] :
    players[user].isBottomCenterMarked && players[user].isTopCenterMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isMiddleCenterMarked && players[user].isTopCenterMarked && !isBottomCenterMarked  ? [7] :
    players[user].isBottomRightMarked && players[user].isMiddleRightMarked && !isTopRightMarked  ? [2] :
    players[user].isBottomRightMarked && players[user].isTopRightMarked && !isMiddleRightMarked  ? [5] :
    players[user].isMiddleRightMarked && players[user].isTopRightMarked && !isBottomRightMarked  ? [8] :
    (players[0].isBottomLeftMarked && players[0].isTopRightMarked) ||
    (players[0].isTopLeftMarked && players[0].isBottomRightMarked) ?  options.filter(i => [1, 3, 5, 7].includes(i)) : 
    ((players[0].isTopCenterMarked && players[0].isMiddleRightMarked) || (players[0].isMiddleRightMarked && players[0].isBottomCenter) ||
    (players[0].isBottomCenter && players[0].isMiddleLeftMarked) || (players[0].isMiddleLeftMarked || players[0].isTopCenterMarked)) &&
    !isMiddleCenterMarked ? [4] :
    false;
    // Agresive algorithm
    user = 1;
    const resultAgresive = 
    // filas
    players[user].isTopLeftMarked && players[user].isTopCenterMarked && !isTopRightMarked ?  [2] :
    players[user].isTopLeftMarked && players[user].isTopRightMarked && !isTopCenterMarked ? [1] :
    players[user].isTopCenterMarked && players[user].isTopRightMarked && !isTopLeftMarked ? [0] :
    players[user].isMiddleLeftMarked && players[user].isMiddleCenterMarked && !isMiddleRightMarked ? [5] : 
    players[user].isMiddleLeftMarked && players[user].isMiddleRightMarked && !isMiddleCenterMarked ? [4] :
    players[user].isMiddleCenterMarked && players[user].isMiddleRightMarked && !isMiddleLeftMarked ? [3] :
    players[user].isBottomLeftMarked && players[user].isBottomCenterMarked && !isBottomRightMarked ? [8] :
    players[user].isBottomLeftMarked && players[user].isBottomRightMarked && !isBottomCenterMarked ? [7]:
    players[user].isBottomCenterMarked && players[user].isBottomRightMarked && !isBottomLeftMarked  ? [6] :
    // diagonales
    players[user].isBottomLeftMarked && players[user].isMiddleCenterMarked && !isTopRightMarked  ? [2] :
    players[user].isMiddleCenterMarked && players[user].isTopRightMarked && !isBottomLeftMarked  ? [6] :
    players[user].isBottomLeftMarked && players[user].isTopRightMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isBottomRightMarked && players[user].isMiddleCenterMarked && !isTopLeftMarked  ? [0] :
    players[user].isBottomRightMarked && players[user].isTopLeftMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isMiddleCenterMarked && players[user].isTopLeftMarked && !isBottomRightMarked  ? [8] :
    // columnas
    players[user].isBottomLeftMarked && players[user].isMiddleLeftMarked && !isTopLeftMarked  ? [0] :
    players[user].isBottomLeftMarked && players[user].isTopLeftMarked && !isMiddleLeftMarked  ? [3] :
    players[user].isMiddleLeftMarked && players[user].isTopLeftMarked && !isBottomLeftMarked   ? [6] :
    players[user].isBottomCenterMarked && players[user].isMiddleCenterMarked && !isTopCenterMarked  ? [1] :
    players[user].isBottomCenterMarked && players[user].isTopCenterMarked && !isMiddleCenterMarked  ? [4] :
    players[user].isMiddleCenterMarked && players[user].isTopCenterMarked && !isBottomCenterMarked  ? [7] :
    players[user].isBottomRightMarked && players[user].isMiddleRightMarked && !isTopRightMarked  ? [2] :
    players[user].isBottomRightMarked && players[user].isTopRightMarked && !isMiddleRightMarked  ? [5] :
    players[user].isMiddleRightMarked && players[user].isTopRightMarked && !isBottomRightMarked  ? [8] :
    false; 
    const buildingMove = 
    isTopRowOpen() ? options.filter(i => [0, 1, 2].includes(i)) : 
    isMiddleRowOpen() ? options.filter(i => [3, 4, 5].includes(i)) :
    isBottomRowOpen() ? options.filter(i => [6, 7, 8].includes(i)) :
    isLeftColumnOpen() ? options.filter(i => [0, 3, 6].includes(i)) :
    isMiddleColumnOpen() ? options.filter(i => [1, 4, 7].includes(i)) :
    isRightColumnOpen() ? options.filter(i => [2, 5, 8].includes(i)) :
    isDiagonal1Open() ? options.filter(i => [6, 4, 2].includes(i)) :
    isDiagonal2Open() ? options.filter(i => [0, 4, 8].includes(i)) : 
    options;

    return resultAgresive ? resultAgresive : resultDefensive ? resultDefensive :  buildingMove
}

function firstMove() {
    return isTopLeftMarked || isTopRightMarked || isBottomLeftMarked || isBottomRightMarked ? [4] : [0, 2, 6, 8]
}

function nemBot() {
    if (turn) {
        bestOptions = firstMove();
        turn = false;
    } else {
        bestOptions = bestMove();
        console.log(bestOptions);
    }
    random = bestOptions[Math.floor(Math.random() * bestOptions.length)];
    if (random === 8 && !isBottomRightMarked) {
        markBottomRight(1);
        updateOptions(8);
    } else if (random === 7 && !isBottomCenterMarked) {
        markBottomCenter(1);
        updateOptions(7);
    } else if (random === 6 && !isBottomLeftMarked ) {
        markBottomLeft(1);
        updateOptions(6);
    } else if (random === 5 && !isMiddleRightMarked) {
        markMiddleRight(1);
        updateOptions(5);
    } else if (random === 4 && !isMiddleCenterMarked) {
            markMiddleCenter(1);
            updateOptions(4);
    } else if (random === 3 && !isMiddleLeftMarked) {
        markMiddleLeft(1);
        updateOptions(3);
    } else if (random === 2 && !isTopRightMarked) {
        markTopRight(1);
        updateOptions(2);
    } else if (random === 1 && !isTopCenterMarked) {
        markTopCenter(1);
        updateOptions(1);
    } else if (random === 0 && !isTopLeftMarked) {
        markTopLeft(1);
        updateOptions(0);
    } 
}

function updateScore(user) {
    playerScore.innerText = players[0].score;
    computerScore.innerText = players[1].score;
    announcerText.innerText = `${players[user].name} gana la ronda!`
    // Impide que se sigan seleccionando casillas despues de terminar la partida
    isTopLeftMarked = true;
    isTopCenterMarked = true;
    isTopRightMarked = true;
    isMiddleLeftMarked = true;
    isMiddleCenterMarked = true;
    isMiddleRightMarked = true;
    isBottomLeftMarked = true;
    isBottomCenterMarked = true;
    isBottomRightMarked = true;
}

function anotherTry() {
    players = [
        {
            name: "Jugador",
            isTopLeftMarked: false,
            isTopCenterMarked: false,
            isTopRightMarked: false,
            isMiddleLeftMarked: false,
            isMiddleCenterMarked: false,
            isMiddleRightMarked: false,
            isBottomLeftMarked: false,
            isBottomCenterMarked: false,
            isBottomRightMarked: false,
            color: "#40bf80",
            score: players[0].score
        },
        {
            name: "NemBot",
            isTopLeftMarked: false,
            isTopCenterMarked: false,
            isTopRightMarked: false,
            isMiddleLeftMarked: false,
            isMiddleCenterMarked: false,
            isMiddleRightMarked: false,
            isBottomLeftMarked: false,
            isBottomCenterMarked: false,
            isBottomRightMarked: false,
            color: "red",
            score: players[1].score
        }
    ]
    // si se inicializa dos veces una variable ocurren cosas extrañas jeje 
    isTopLeftMarked = false;
    isTopCenterMarked = false;
    isTopRightMarked = false;
    isMiddleLeftMarked = false;
    isMiddleCenterMarked = false;
    isMiddleRightMarked = false;
    isBottomLeftMarked = false;
    isBottomCenterMarked = false;
    isBottomRightMarked = false;
    isWinner = false;
    announcerText.innerText = "Que gane el mejor!"
    for (const cell of cells) {
        cell.innerHTML = "";
        cell.style.backgroundColor = "transparent"
    }
    line.classList.add("hide");
    line.style.top = "calc(-15vw - 2px)";
    line.style.left = "0vw"
    line.style.transform = "rotate(0deg)";
    options = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    turn = true;
}


function checkWinner(user) {
    // Filas
    if (players[user].isTopLeftMarked && players[user].isTopCenterMarked && players[user].isTopRightMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.top = "calc(-25vw - 2px)";
        line.classList.remove("hide")
    } else if (players[user].isMiddleLeftMarked && players[user].isMiddleCenterMarked && players[user].isMiddleRightMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.classList.remove("hide")
    } else if (players[user].isBottomLeftMarked && players[user].isBottomCenterMarked && players[user].isBottomRightMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.top = "calc(-5vw - 2px)";
        line.classList.remove("hide");
    // Diagonales
    } else if (players[user].isBottomLeftMarked && players[user].isMiddleCenterMarked && players[user].isTopRightMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.transform = "rotate(-45deg)";
        line.classList.remove("hide");
    } else if (players[user].isBottomRightMarked && players[user].isMiddleCenterMarked && players[user].isTopLeftMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.transform = "rotate(45deg)";
        line.classList.remove("hide");
    } 
    // Columnas
    else if (players[user].isBottomLeftMarked && players[user].isMiddleLeftMarked && players[user].isTopLeftMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.left = "-10vw";
        line.style.transform = "rotate(90deg)";
        line.classList.remove("hide");
    } else if (players[user].isBottomCenterMarked && players[user].isMiddleCenterMarked && players[user].isTopCenterMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.transform = "rotate(90deg)";
        line.classList.remove("hide");
    } else if (players[user].isBottomRightMarked && players[user].isMiddleRightMarked && players[user].isTopRightMarked) {
        players[user].score++;
        updateScore(user)
        isWinner = true;
        line.style.left = "10vw";
        line.style.transform = "rotate(90deg)";
        line.classList.remove("hide");
    // Empate
    } else if (isTopLeftMarked && isTopCenterMarked && isTopRightMarked && 
        isMiddleLeftMarked && isMiddleCenterMarked && isMiddleRightMarked &&
        isBottomLeftMarked && isBottomCenterMarked && isBottomRightMarked
    ) {
        announcerText.innerText = `Empate`
        isWinner = true;
    }
}

function updateOptions(element) {
    let updatedOptions = [];
    for (const i of options) {
        if (i !== element) {
            updatedOptions.push(i);
        }
    }
    options = updatedOptions;
}

// Interacción con cada casilla
topLeftButton.addEventListener("click", function () {
    // usar addEventListener permite llamar funciones con parametros, a diferencia del metodo onclick
    if (options.includes(0)) {
        markTopLeft(0);
        updateOptions(0);
        if (!isWinner) {
            nemBot();
        }
    }
})

topCenterButton.addEventListener("click", function () {
    if (options.includes(1)) {
        markTopCenter(0);
        updateOptions(1);
        if (!isWinner) {
            nemBot();
        }
    }
})

topRightButton.addEventListener("click", function () {
    if (options.includes(2)) {
        markTopRight(0);
        updateOptions(2);
        if (!isWinner) {
            nemBot();
        }
    }
})

middleLeftButton.addEventListener("click", function() {
    if (options.includes(3)) {
        markMiddleLeft(0);
        updateOptions(3);
        if (!isWinner) {
            nemBot();
        }
    }
})

middleCenterButton.addEventListener("click", function () {
    if (options.includes(4)) {
        markMiddleCenter(0);
        updateOptions(4);
        if (!isWinner) {
            nemBot();
        }
    }
})

middleRightButton.addEventListener("click", function () {
    if (options.includes(5)) {
        markMiddleRight(0);
        updateOptions(5);
        if (!isWinner) {
            nemBot();
        }    
    }
})

bottomLeftButton.addEventListener("click", function () {
    if (options.includes(6)) {
        markBottomLeft(0);
        updateOptions(6);
        if (!isWinner) {
            nemBot();
        }    
}
})

bottomCenterButton.addEventListener("click", function () {
    if (options.includes(7)) {
        markBottomCenter(0);
        updateOptions(7);
        if (!isWinner) {
            nemBot();
        }
    }
})

bottomRightButton.addEventListener("click", function () {
    if (options.includes(8)) {
        markBottomRight(0);
        updateOptions(8);
        if (!isWinner) {
            nemBot();
        }
    }
})

restartButton.onclick = anotherTry;
