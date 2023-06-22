import { writable } from "svelte/store";


export const board = writable(
    [
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "]
    ]
)

export const red_turn = writable(true) //Red's turn | Red goes first
export const turns = writable(0)
export const game_won = writable(false)
export const game_winner = writable("No one yet")