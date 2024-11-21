<script lang="ts">
    import { red_turn, game_won, game_winner } from "../game_state";
    import { fly } from "svelte/transition";

    const in_transition_duration: number = 275
    const out_transition_duration: number = 100

</script>

<div class="mt-auto w-screen self-end">
    <div class="flex justify-center text-center my-1.5 mb-0 bg-zinc-900 ">
        <div class="flex p-2">
            {#if !$game_won}
                {#if $red_turn}
                    <h1 in:fly={{x: 200, duration: in_transition_duration}} out:fly={{x: -200, duration: out_transition_duration}} class="text-xl text-yellow-50 font-sans font-semibold ease-in duration-75">
                        It's Red's Turn
                    </h1>
                {:else}
                    <h1 in:fly={{x: 200, duration: in_transition_duration}} out:fly={{x: -200, duration: out_transition_duration}} class="text-xl text-yellow-50 font-sans font-semibold ease-in duration-75">
                        It's Yellow's Turn
                    </h1>
                {/if}
            
            {:else}
                <h1 in:fly={{x: 200, duration: in_transition_duration}} out:fly={{x: -200, duration: out_transition_duration}} class="text-xl text-yellow-50 font-sans font-semibold ease-in duration-75">
                    The Winner Is {$game_winner}!
                </h1>
            {/if}
        </div>
    </div>
</div>