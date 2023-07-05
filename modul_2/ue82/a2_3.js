function waitForFive() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 5000);
    });
}

async function asyncCaller() {
    let result = await waitForFive();
    console.log(result);
}

asyncCaller();
