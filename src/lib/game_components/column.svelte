<script lang="ts">
    import Slot from "./board_slot.svelte";
    //6 rows and 7 columns

    export let column_id: number;

</script>


<div class="w-fit h-fit">
    <Slot row_id={0} column_id={column_id}/>
    <Slot row_id={1} column_id={column_id}/>
    <Slot row_id={2} column_id={column_id}/>
    <Slot row_id={3} column_id={column_id}/>
    <Slot row_id={4} column_id={column_id}/>
    <Slot row_id={5} column_id={column_id}/>
</div>