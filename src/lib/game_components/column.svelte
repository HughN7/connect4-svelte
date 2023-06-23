<script lang="ts">
    import BoardSlot from "./board_slot.svelte";
    import { board, red_turn, turns, game_won, game_winner } from "../../game_state";
    import { checkForWinners, placePiece } from "../../game_logic";
    

    export let column_id: number;
    
    function handleOnClick(){

        if($game_won) return;

        updateBoard()
        updateWinners()
        
    }

    function updateBoard(){
        let player: string = $red_turn ? "X" : "O"
        let placePiece_Parameters: Array<any> = placePiece([$board, $red_turn, $turns], column_id, player)
        
        $board = placePiece_Parameters[0]
        $red_turn = placePiece_Parameters[1]
        $turns = placePiece_Parameters[2]

        //Reactive assignment
        $board = $board
        $red_turn = $red_turn
        $turns = $turns
    }

    function updateWinners(){
        //Check if there's a winner after new piece
        let winner: string = checkForWinners($board)

        if(winner !== " "){
            $game_won = true
            $game_winner = winner === "X" ? "Red" : "Yellow"
            
            //reactive assignment
            $game_won = $game_won
            $game_winner = $game_winner
        }
    }

</script>


<button class="w-fit h-fit group" on:click={handleOnClick}>
    <BoardSlot row_id={0} column_id={column_id}/>
    <BoardSlot row_id={1} column_id={column_id}/>
    <BoardSlot row_id={2} column_id={column_id}/>
    <BoardSlot row_id={3} column_id={column_id}/>
    <BoardSlot row_id={4} column_id={column_id}/>
    <BoardSlot row_id={5} column_id={column_id}/>
</button>