(async function () {
    await sleep(5000); // 500ms warten
    console.log("Wartezeit abgeschlossen!");
})();


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}