"use strict";

import {Joke} from './components/jokes';

let functions = {
    rickroll: () => {
        // open new tab with rickroll: https://youtu.be/dQw4w9WgXcQ
        window.open("https://youtu.be/dQw4w9WgXcQ", "_blank")

        // window.location.replace("https://youtu.be/dQw4w9WgXcQ")
    },

    awesome: () => {
        $("body").toggleClass("awesome")
    },

    crazy: () => {
        $("body").toggleClass("crazy")
    },

    debug: () => {
        $("body").toggleClass("debug")
    },

    fortnite: () => {
        alert("Fortnite is a bad game")
    },

    badjoke: () => {
        new Joke().getJoke()
    },

    "close": () => {
        window.open(location, '_self').close();
    },

    "good music": () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    },
}

addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }


    if ($("body").hasClass("crazy")) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        $("body").css("background-color", "#" + randomColor);
    } else {
        $("body").css("background-color", "#181818");
    }
});


let series = '';

let timer = 0

addEventListener('keydown', (e) => {
    timer++;
    series += e.key;

    console.log(series);

    Object.keys(functions).forEach((key) => {
        if (series.includes(key)) {
            functions[key]();
            series = '';
        }
    });

    setTimeout(() => {
        timer -= timer >= 0 ? 1 : 0;
        if (timer <= 0) {
            series = '';
        }
    }, 1000)
});
