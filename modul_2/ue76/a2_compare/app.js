const os = require('os');

// check amount of args given
if (process.argv.length !== 5) {
    console.log("wrong number of args! need 3, got " + (process.argv.length-2));
    process.exit(1);
}

// load as numbers in array
let num = [];
for (let i=0; i<=2; i++) {
    num[i] = parseInt(process.argv[i+2]);
}


// Math module
console.log("math module");
console.log("alle zahlen:", num[0], num[1], num[2]);
console.log("kleinste zahl:", Math.min(...num));
console.log("groesste zahl:", Math.max(...num));
// console.log("kleinste zahl:", Math.min(num[0], num[1], num[2]));
// console.log("groesste zahl:", Math.max(num[0], num[1], num[2]));




// plain if-else
let groesste, kleinste;
// groesste
if (num[0] > num[1]) {
    if (num[0] > num[2]) {
        groesste = num[0];
    } else {
        groesste = num[2];
    }
} else {
    if (num[1] > num[2]) {
        groesste = num[1];
    } else {
        groesste = num[2];
    }
}

// kleinste
if (num[0] < num[1]) {
    if (num[0] < num[2]) {
        kleinste = num[0];
    } else {
        kleinste = num[2];
    }
} else {
    if (num[1] < num[2]) {
        kleinste = num[1];
    } else {
        kleinste = num[2];
    }
}

console.log("if-else");
console.log("alle zahlen:", num[0], num[1], num[2]);
console.log("kleinste zahl:", kleinste);
console.log("groesste zahl:", groesste);
