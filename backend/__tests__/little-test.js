'use strict';
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

let myArray = [0, 0, 0];

function simulate(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getRandomInt(3);
    }

    // console.log(arr);

    // if there are excatly two 2 same numbers, return true, else return false
    if (arr[0] === arr[1] && arr[0] !== arr[2]) {
        return true;
    } else if (arr[0] === arr[2] && arr[0] !== arr[1]) {
        return true;
    } else if (arr[1] === arr[2] && arr[1] !== arr[0]) {
        return true;
    } else {
        return false;
    }
}

// percentage between 0 and 1: float
let probabilty = []

for (let i = 0; i < 1_000_000_00; i++) {
    let yesOrNo = simulate(myArray);

    probabilty.push(yesOrNo ? 1 : 0);
}

console.log(probabilty)

let sum = probabilty.reduce((a, b) => a + b, 0);
console.log(sum / probabilty.length);

