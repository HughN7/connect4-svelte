<script lang="ts">
    import { board } from "../../game_state";

    export let row_id: number;
    export let column_id: number;
    
    /*
    let red: boolean = false; 
    let yellow: boolean = false;

    
    if($board[row_id][column_id] === "X"){
        red = true
        yellow = false
    }

    if($board[row_id][column_id] === "X"){
        red = true
    }
    */


</script>

<div class="flex w-13 h-13 md:w-20 md:h-20 border-blue-500 border-2 bg-blue-500 justify-center items-center ">
    {#if $board[row_id][column_id] === "O"}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-yellow-400"></div>

    {:else if $board[row_id][column_id] === "X"}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-red-600"></div>

    {:else}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white"></div>

    {/if}   
    
</div>