function waitForFive(cb) {
    setTimeout(cb, 5000);
}

function callback() {
    console.log("zeit ist um!");
}

waitForFive(callback);