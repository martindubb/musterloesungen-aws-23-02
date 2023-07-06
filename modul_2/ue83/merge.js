function merge(arr1, arr2) {

    // merge 
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // unique
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

const array1 = [3, 7, 11, 2];
const array2 = [9, 2, 3, 5, 1];

let n = merge(array1, array2);
console.log(n);

const bubble = require('./bubble.js');
console.log(bubble(n));