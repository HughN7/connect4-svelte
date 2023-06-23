
<script lang="ts">
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
    import Game from "$lib/game_components/main.svelte";
    import Gun from "gun/gun"
    import { onMount } from "svelte";

    onMount(()=>{
        const gun = Gun()
    })
    
</script>

<Header/>
<div class="flex grow justify-center items-center">
    <Game/>
</div>

<Footer/>