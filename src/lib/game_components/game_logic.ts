const row_length: number = 6
const column_length: number = 7

export function checkForWinners(board: Array<Array<string>>){
    
    //Rows
    let winner: string = checkAllRows(board)
    
    //Columns
    winner = checkAllColumns(board)

    //Diagonal 1
    winner = checkPositiveDiagonal(board)

    //Diagonal 2
    winner = checkNegativeDiagonal(board)

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
