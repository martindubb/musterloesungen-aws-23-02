let arr = [1, 11, 27, 2, 34, 123, 3];

// funktioniert nicht
let arr_s = arr.sort();
console.log('funktioniert nicht ' + arr_s)

// funktioniert
arr_s = arr.sort((a, b) => (a > b) ? 1 : -1);
console.log('funktioniert ' + arr_s)

// mit if-else struktur
arr_s = arr.sort((a, b) => {
    if (a > b) {
        1
    } else {
        -1
    }
});
console.log('funktioniert auch ' + arr_s)


// als anonyme Funktion
const sortObjects = (arr) => {
    return arr.sort((a, b) => (a > b) ? 1 : -1);
}
console.log('klappt ' + sortObjects(arr));

// mit if-else struktur
const sortObjects2 = (arr) => {
    return arr.sort((a, b) => {
        if (a > b) {
            1
        } else {
            -1
        }
    })
}
console.log('klappt auch ' + sortObjects2(arr));