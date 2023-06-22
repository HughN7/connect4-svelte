<script lang="ts">
  import { board } from "../../game_state";

  export let row_id: number;
  export let column_id: number;
</script>

<div
  class="flex ease-in duration-100 w-13 h-13 md:w-20 md:h-20 border-blue-500 border-2 bg-blue-500 justify-center items-center group-hover:bg-blue-900 group-hover:border-blue-900"
>
  {#if $board[row_id][column_id] === "O"}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-yellow-400" />
  {:else if $board[row_id][column_id] === "X"}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-red-600" />
  {:else}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white" />
  {/if}
</div>
