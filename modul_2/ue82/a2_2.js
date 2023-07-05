function waitForFive() {
    console.log("anfang der funktion");
    return new Promise((resolve) => {
        console.log("hello aus dem promise-code");
        resolve("jetzt hab ich nicht gewartet!");
        // console.log("ich warte jetzt 5 sekunden...");
        // setTimeout(() => {
        //     resolve(5);
        // }, 5000);
    });
}

waitForFive().then((result) => {
    console.log(result); // Ausgabe: 5
    console.log("der promise ist erfüllt und ich bin jetzt im 'then'-block");
});
