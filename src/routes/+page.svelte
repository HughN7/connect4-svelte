
<script lang="ts">
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
    import Game from "$lib/game_components/main.svelte";
</script>

<Header/>
<div class="flex grow justify-center items-center">
    <Game/>
</div>

<Footer/>