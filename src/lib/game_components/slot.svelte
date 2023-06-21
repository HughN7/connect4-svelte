<script lang="ts">

    let red: boolean = false; 
    let yellow: boolean = true;


</script>

<div class="flex w-13 h-13 md:w-20 md:h-20 border-blue-500 border-2 bg-blue-500 justify-center items-center ">
    {#if !red && !yellow || red && yellow}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white"></div>

    {:else if red && !yellow}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-red-600"></div>

    {:else}
    <div class="w-10 h-10 md:w-16 md:h-16 rounded-full bg-yellow-400"></div>

    {/if}
    
</div>