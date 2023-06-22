<script lang="ts">
    import Slot from "./board_slot.svelte";
    import { board } from "../../game_state";
    import { red_turn } from "../../game_state";
    

    export let column_id: number;
    
    function handleOnClick(){
        let player: string = $red_turn ? "X" : "O"

        for(let row_id: number = 5; row_id !== -1; row_id--){
            
            if($board[row_id][column_id] == " "){
                $board[row_id][column_id] = player
                $red_turn = !$red_turn //Switch to other player
                break
            }
        }
    }


    //6 rows and 7 columns
</script>


<button class="w-fit h-fit group" on:click={handleOnClick}>
    <Slot row_id={0} column_id={column_id}/>
    <Slot row_id={1} column_id={column_id}/>
    <Slot row_id={2} column_id={column_id}/>
    <Slot row_id={3} column_id={column_id}/>
    <Slot row_id={4} column_id={column_id}/>
    <Slot row_id={5} column_id={column_id}/>
</button>