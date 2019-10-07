const Game = require("./game");

import { time, currentTime, tick, startTime } from "./timer";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementsByTagName("canvas")[0];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    
    let game = new Game(canvas, context);
    game.play(); 
});