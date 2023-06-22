const row_length: number = 6
const column_length: number = 7

export function checkForWinners(board: Array<Array<string>>){
    
    //Rows
    let winner: string = checkAllRows(board)
    if(winner !== " ") return winner
    
    //Columns
    winner = checkAllColumns(board)
    if(winner !== " ") return winner

    //Diagonal 1
    winner = checkPositiveDiagonal(board)
    if(winner !== " ") return winner

    //Diagonal 2
    winner = checkNegativeDiagonal(board)
    if(winner !== " ") return winner

    return winner
}

function checkAllRows(board: Array<Array<string>>){
    for(let row_id = 0; row_id < row_length; row_id++){
        for(let column_id = 0; column_id < 4; column_id++){
            
            let tile1: string = board[row_id][column_id]
            let tile2: string = board[row_id][column_id+1]
            let tile3: string = board[row_id][column_id+2]
            let tile4: string = board[row_id][column_id+3]

            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "X"){
                return "X"
            }
            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "O"){
                return "O"
            }
        }
    }

    return " "
}

function checkAllColumns(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 0; column_id < column_length; column_id++){
            
            let tile1: string = board[row_id][column_id]
            let tile2: string = board[row_id+1][column_id]
            let tile3: string = board[row_id+2][column_id]
            let tile4: string = board[row_id+3][column_id]

            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "X"){
                return "X"
            }
            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "O"){
                return "O"
            }
        }
    }

    return " "
}

function checkPositiveDiagonal(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 3; column_id < column_length; column_id++){
            
            let tile1: string = board[row_id][column_id]
            let tile2: string = board[row_id+1][column_id-1]
            let tile3: string = board[row_id+2][column_id-2]
            let tile4: string = board[row_id+3][column_id-3]

            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "X"){
                return "X"
            }
            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "O"){
                return "O"
            }
        }
    }

    return " "
}

function checkNegativeDiagonal(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 0; column_id < 4; column_id++){
            
            let tile1: string = board[row_id][column_id]
            let tile2: string = board[row_id+1][column_id+1]
            let tile3: string = board[row_id+2][column_id+2]
            let tile4: string = board[row_id+3][column_id+3]

            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "X"){
                return "X"
            }
            if(tile1 === tile2 && tile2 === tile3 && tile3 === tile4 && tile4 === "O"){
                return "O"
            }
        }
    }

    return " "
}

export function placePiece(parameters: Array<any>, column_id: number, player: string){

    let [board, red_turn, turns]: Array<any> = parameters

    for(let row_id: number = 5; row_id !== -1; row_id--){
            
        if(board[row_id][column_id] == " "){
            board[row_id][column_id] = player
            red_turn = !red_turn //Switch to other player
            turns++
            break
        }
    }

    return [board, red_turn, turns]
}
