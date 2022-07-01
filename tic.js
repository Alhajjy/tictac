let title = document.querySelector(".title");
let turn = "x";


function winning() {
    let squares = [];
    let winner;
    turn === "o" ? winner = "X 😮" : winner = "O 😮"
    let c = "Great! You Win :)";
    for(let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    
    }                                                       
// Case 1
    if ( squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        title.innerHTML = winner + c;
        
        
    }
    // Case 2
    if ( squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 3
    if ( squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 4
    if ( squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 5
    if ( squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 6
    if ( squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 7
    if ( squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }
// Case 8
    if ( squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        title.innerHTML = `${winner}   YOU WIN !`;
    }

}





function game(id) {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML === "") {
        element.innerHTML = turn;
        title.innerHTML = "O";
        turn = "o";
    } else if (turn === "o" && element.innerHTML === "") {
        element.innerHTML = turn;
        title.innerHTML = "X";
        turn = "x";
    }
    winning();
}