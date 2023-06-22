const row_length: number = 6
const column_length: number = 7
const red_piece: string = "X"
const yellow_piece: string = "O"
const empty: string = " "

export function checkForWinners(board: Array<Array<string>>){
    
    //Rows
    let winner: string = checkAllRows(board)
    if(winner !== empty) return winner
    
    //Columns
    winner = checkAllColumns(board)
    if(winner !== empty) return winner

    //Diagonal 1
    winner = checkPositiveDiagonal(board)
    if(winner !== empty) return winner

    //Diagonal 2
    winner = checkNegativeDiagonal(board)
    if(winner !== empty) return winner

    return winner
}

function checkAllRows(board: Array<Array<string>>){
    for(let row_id = 0; row_id < row_length; row_id++){
        for(let column_id = 0; column_id < 4; column_id++){
            
            let slot1: string = board[row_id][column_id]
            let slot2: string = board[row_id][column_id+1]
            let slot3: string = board[row_id][column_id+2]
            let slot4: string = board[row_id][column_id+3]

            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === red_piece){
                return red_piece
            }
            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === yellow_piece){
                return yellow_piece
            }
        }
    }

    return empty
}

function checkAllColumns(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 0; column_id < column_length; column_id++){
            
            let slot1: string = board[row_id][column_id]
            let slot2: string = board[row_id+1][column_id]
            let slot3: string = board[row_id+2][column_id]
            let slot4: string = board[row_id+3][column_id]

            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === red_piece){
                return red_piece
            }
            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === yellow_piece){
                return yellow_piece
            }
        }
    }

    return empty
}

function checkPositiveDiagonal(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 3; column_id < column_length; column_id++){
            
            let slot1: string = board[row_id][column_id]
            let slot2: string = board[row_id+1][column_id-1]
            let slot3: string = board[row_id+2][column_id-2]
            let slot4: string = board[row_id+3][column_id-3]

            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === red_piece){
                return red_piece
            }
            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === yellow_piece){
                return yellow_piece
            }
        }
    }

    return empty
}

function checkNegativeDiagonal(board: Array<Array<string>>){
    for(let row_id = 0; row_id < 3; row_id++){
        for(let column_id = 0; column_id < 4; column_id++){
            
            let slot1: string = board[row_id][column_id]
            let slot2: string = board[row_id+1][column_id+1]
            let slot3: string = board[row_id+2][column_id+2]
            let slot4: string = board[row_id+3][column_id+3]

            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === red_piece){
                return red_piece
            }
            if(slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === yellow_piece){
                return yellow_piece
            }
        }
    }

    return empty
}

export function placePiece(parameters: Array<any>, column_id: number, player: string){

    let [board, red_turn, turns]: Array<any> = parameters

    for(let row_id: number = row_length - 1; row_id !== -1; row_id--){
            
        if(board[row_id][column_id] == empty){
            board[row_id][column_id] = player
            red_turn = !red_turn //Switch to other player
            turns++
            break
        }
    }

    return [board, red_turn, turns]
}
