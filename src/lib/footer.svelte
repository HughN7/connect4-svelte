<script lang="ts">
  import { red_turn } from "../game_state";

    $: message = $red_turn ? "It's Red's Turn" : "It's Yellow's Turn"

</script>



<div class="mt-auto w-screen self-end">
    <div class="flex justify-center text-center my-1.5 mb-0 bg-zinc-900 ">
        <div class="flex p-2">
            <h1 class="text-xl text-yellow-50 font-sans font-semibold">{message}</h1>
        </div>
    </div>
</div>