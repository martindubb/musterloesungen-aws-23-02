function sum(a, b) {
    const summe = a + b;
    console.log(summe);
}

// Die neue Funktion sollte so aussehen!
function sumNeu(a, b, callback) {
    const summe = a + b;
    callback(summe);
    // console.log(summe); // Diese Zeile muss angepasst werden
}

function sumCallbackFunction(ergebnis) {
    console.log("Das Ergebnis ist: ", ergebnis);
}

sum(1, 2);
sumNeu(1, 2, sumCallbackFunction);