import { makeElement } from "./home";
import alabasta from './images/alabasta.jpg';
import skypiea from './images/skypiea.jpg';
import water7 from './images/water7.jpg';
import thrillerBark from './images/thrillerbark.jpg';
import marineford from './images/marineford.jpg';
import fishman from './images/fishman.jpg';
import dressrosa from './images/dressrosa.jpg';
import wholecake from './images/wholecake.jpg';
import wano from './images/wano.jpg';
import egghead from './images/egghead.jpg';
import zoro from './images/zoro.jpg';
import nami from './images/nami.jpg';
import usopp from './images/usopp.jpg';
import robin from './images/robin.jpg';
import chopper from './images/chopper.jpg';
import franky from './images/franky.jpg';
import brook from './images/brook.jpg';
import sanji from './images/sanji.jpg';
import jinbe from './images/Jinbe.jpg';
import luffy from './images/luffy.jpg';
import './style.css';
import { loadGamePage } from "./game-welcome";

// import alabasta2 from './images/alabasta2.jpg';
function boardElement() {
    const container = makeElement('div', 'container');
    const turnHeading = makeElement('h1', 'turn');
    const board = makeElement('div', 'board');

    // Get values from localStorage
    const player1 = localStorage.getItem('player1Name');
    const player2 = localStorage.getItem('player2Name');
    const player1Avtar = localStorage.getItem('player1Avtar');
    const player2Avtar = localStorage.getItem('player2Avtar');
    const theme = localStorage.getItem('theme');
    
    const playerBoard = makeElement('div', 'player-board');
    const player1Div = makeElement('div', 'player-div');
    const player2Div = makeElement('div', 'player-div');
    const player1ImgDiv = makeElement('div', 'player-img-div');
    const player2ImgDiv = makeElement('div', 'player-img-div');

    if (player1Avtar == "Luffy") {
        const img = new Image();
        img.src = luffy;
        player1ImgDiv.append(img);
    } else if (player1Avtar == "Nami") {
        const img = new Image();
        img.src = nami;
        player1ImgDiv.append(img);
    } else if (player1Avtar == "Zoro") {
        const img = new Image();
        img.src = zoro;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Usopp") {
        const img = new Image();
        img.src = usopp;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Franky") {
        const img = new Image();
        img.src = franky;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Sanji") {
        const img = new Image();
        img.src = sanji;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Brook") {
        const img = new Image();
        img.src = brook;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Robin") {
        const img = new Image();
        img.src = robin;
        player1ImgDiv.append(img);
    }else if (player1Avtar == "Chopper") {
        const img = new Image();
        img.src = chopper;
        player1ImgDiv.append(img);
    }

    if (player2Avtar == "Luffy") {
        const img = new Image();
        img.src = luffy;
        player2ImgDiv.append(img);
    } else if (player2Avtar == "Nami") {
        const img = new Image();
        img.src = nami;
        player2ImgDiv.append(img);
    } else if (player2Avtar == "Zoro") {
        const img = new Image();
        img.src = zoro;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Usopp") {
        const img = new Image();
        img.src = usopp;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Franky") {
        const img = new Image();
        img.src = franky;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Sanji") {
        const img = new Image();
        img.src = sanji;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Brook") {
        const img = new Image();
        img.src = brook;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Robin") {
        const img = new Image();
        img.src = robin;
        player2ImgDiv.append(img);
    }else if (player2Avtar == "Chopper") {
        const img = new Image();
        img.src = chopper;
        player2ImgDiv.append(img);
    }

    const player1Name = makeElement('div', 'player-name');
    const player2Name = makeElement('div', 'player-name');
    player1Div.append(player1ImgDiv, player1Name);
    player2Div.append(player2ImgDiv,player2Name);
    player1Name.textContent = player1;
    player2Name.textContent = player2;
    playerBoard.append(player1Div, player2Div);

    console.log("Theme:", theme); // Debugging log

    // Apply theme background image
    switch (theme) {
        case "Alabasta":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${alabasta})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling

            break;
        case "Skypiea":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${skypiea})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        
        case "Thriller Bark":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${thrillerBark})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        
        case "Water 7":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${water7})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        
        case "Marineford":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${marineford})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        case "Fish Man Island":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${fishman})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        case "Dressrosa":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${dressrosa})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        case "Whole Cake Island":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${wholecake})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        
        case "Wano":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${wano})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        
        case "Egghead":
            console.log("Setting Alabasta theme"); // Debugging log
            container.style.backgroundImage = `url(${egghead})`;
            container.style.backgroundSize = "cover"; // Ensure the image covers the container
            container.style.backgroundPosition = "center"; // Center the image
            container.style.backgroundRepeat = "no-repeat"; // Prevent image tiling
    
            break;
        // Add cases for other themes as needed
        default:
            console.log("No matching theme found"); // Debugging log
            break;
    }

    container.append(playerBoard ,board);
    return container;
}

export { boardElement };


function GameBoard(){
    //board dimensions
    const board = [];
    const rows = 3;
    const columns = 3;

    //adding cells to board
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const addMarker = (row, column, player) => {
        if(board[row][column].getValue() === ""){
            board[row][column].markCell(player);
        } else {
            return;
        }
    }

    const showBoard = () => {
        const cellValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(cellValues);
    }

    return {getBoard, addMarker, showBoard};
}

function Cell(){
    let value = "";
    const getValue = () => value;
    const markCell = (player) => {
        value = player;
    }
    return {getValue, markCell};
}

function GameControl(playerOne = "Player One", playerTwo = "Player Two"){
    const board = GameBoard();
    const players = [
        {
            name: playerOne,
            mark: "x"
        },
        {
            name: playerTwo,
            mark: "o"
        }
    ]
    let gameOver = false;
    
    let msg = "";
    const getMsg = () => msg;

    let activePlayer = players[0];
    const switchActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }
    const getActivePlayer = () => activePlayer;

    const showNewBoard = () => {
        board.showBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    function checkWinner(row,column,player){
        const boardArray = board.getBoard();
        if(
            boardArray[0][column].getValue() == player&&
            boardArray[1][column].getValue() == player&&
            boardArray[2][column].getValue() == player
        ){
            gameOver = true;
            msg = `${activePlayer.name} won.!!!`
            return true;
        }

        if(
            boardArray[row][0].getValue() == player &&
            boardArray[row][1].getValue() == player &&
            boardArray[row][2].getValue() == player 
        ){
            gameOver = true;
            msg = `${activePlayer.name} won.!!!`
            return true;
        }

        if(
            row == column&&
            boardArray[0][0].getValue() == player&&
            boardArray[1][1].getValue() == player&&
            boardArray[2][2].getValue() == player
        ){
            gameOver = true;
            msg = `${activePlayer.name} won.!!!`
            return true;
        }

        if(
            row + column == 2&&
            boardArray[0][2].getValue() == player &&
            boardArray[1][1].getValue() == player &&
            boardArray[2][0].getValue() == player 
        ){
            gameOver = true;
            msg = `${activePlayer.name} won.!!!`
            
            return true;
        }else{
            return false;
        }

        
    }

    function checkDraw(){
        const boardArray = board.getBoard();
        const cellValues = [];
        boardArray.forEach((row)=>{
            row.forEach((cell)=>{
                cellValues.push(cell.getValue());
            });
        });
        if(cellValues.includes("")){
            return false;
        }else{
            msg = `Draw!!!`
            gameOver = true;
            return true;
        }
    }
    

    const playRound = (row, column) => {
        if(gameOver) return;
        
        console.log(`Cell ${row}${column} is marked by ${getActivePlayer().name}'s mark.`);
        board.addMarker(row, column, getActivePlayer().mark);
        //win condition
        if(checkWinner(row,column,activePlayer.mark)){
            
            return;
        }

        if(checkDraw() ){
           
            return;
        }

        switchActivePlayer();
        showNewBoard();
    }
    showNewBoard();
    return {playRound, getActivePlayer, getBoard: board.getBoard,gameOver:() => gameOver,getMsg};
}

function ScreenController(){

    const playerOne = localStorage.getItem('playerOne') || "Player One";
    const playerTwo = localStorage.getItem('playerTwo') || "Player Two";
    const game = GameControl(playerOne,playerTwo);
    
    // const divTurn = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    
    const updateScreen = () => {
        const activePlayer = game.getActivePlayer();
        boardDiv.textContent = "";
        // divTurn.textContent = `${activePlayer.name}'s turn.`;
        const board = game.getBoard();
        board.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellButton = document.createElement('button');
                cellButton.classList.add("cell");
                cellButton.dataset.row = rowIndex;
                cellButton.dataset.column = columnIndex;
                cellButton.textContent = cell.getValue();
                if (cell.getValue() == 'x') {
                    cellButton.style.color = "red";
                } else {
                    cellButton.style.color = "green";
                }
                boardDiv.appendChild(cellButton);
            });
        });

        if(game.gameOver()){
            const result = document.createElement('dialog');
            result.classList.add('result-dialog');
            const rematchBtn = document.createElement('button');
            const backButton = document.createElement('button');
            result.textContent = game.getMsg();
            rematchBtn.textContent = "Restart";
            backButton.textContent = "Back to Homepage"
            rematchBtn.addEventListener('click',()=>{
                loadGamePage();
            })
            backButton.addEventListener('click',()=>{
                window.location.href = "index.html";
            })
            boardDiv.appendChild(result);
            result.appendChild(rematchBtn);
            result.appendChild(backButton);
            result.showModal();
            
        }
    }

    function clickHandlerBoard(e){
        if(game.gameOver()) return;
        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;
        if(selectedRow == null || selectedColumn == null) return;
        game.playRound(parseInt(selectedRow), parseInt(selectedColumn));
        updateScreen();
    }

    boardDiv.addEventListener('click', clickHandlerBoard);
    updateScreen();
}

export function loadGameBoard(){
    const content = document.querySelector('.content');
    content.innerHTML = "";
    content.append(boardElement());
    ScreenController();
}