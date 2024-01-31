const gameBoard = document.querySelector('.game__board');
const messageTurn = document.querySelector('.game__turn');
const endGame = document.querySelector('.endgame');
const endGameResult = document.querySelector('.endgame__result');
const buttonReset = document.querySelector('.endgame__button');

let isTurnX = true;
let turn = 0;
let maxTurn = 9;

let players = {
    x: 'cross',
    o: 'circle'
}

const winningPosition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

messageTurn.textContent = isTurnX ? 'X' : 'O';


const createBoard = () => {
    const cells = 9;

    while(gameBoard.firstElementChild){
        gameBoard.firstElementChild.remove();
    }

    for (let i = 0; i < cells; i++) {
        const div = document.createElement('div');
    
        div.classList.add('cell');
        div.addEventListener('click', handleGame , {once:true});

        gameBoard.append(div);
    }
}

const handleGame = (e) => {
    const currentCell = e.currentTarget;
    const currentTurn = isTurnX ? players.x : players.o;
    turn ++

    currentCell.classList.add(currentTurn);

    if(checkWinner(currentTurn)) return 

    if(turn === maxTurn) showEndGame(false)

    changeTurn();
}


const changeTurn = () =>{

    if(isTurnX){
        messageTurn.classList.add("color-white")
    }else{
        messageTurn.classList.remove("color-white")
    }

    isTurnX = !isTurnX;
    messageTurn.textContent = isTurnX ? 'X' : 'O';
  
}

const checkWinner = (currentTurn) =>{
    const cells = document.querySelectorAll('.cell');

    const winner = winningPosition.some(array =>{
        return array.every(position => cells[position].classList.contains(currentTurn));
    });


    if(!winner) return

    showEndGame(true)
    return true
}

const showEndGame = (winner) => {
    endGame.classList.add("show")

    if(winner) {
        endGameResult.textContent = `${isTurnX ? 'El ganador es X' : 'El ganador es O'}`
    }else{
        endGameResult.textContent = `¡Empate!`
    } 

}

buttonReset.addEventListener("click", () =>{
    endGame.classList.remove("show")
    turn = 0;
    createBoard()
})

createBoard();

