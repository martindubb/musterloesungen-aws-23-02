let countDownDate = new Date('2024-01-01').getTime();

// countdown timer
let x = setInterval(() => {

    // get today's date and time in milliseconds
    let now = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;

    // time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    // display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
}, 1000);