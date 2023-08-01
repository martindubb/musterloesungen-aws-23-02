function toCelsius(fahrenheit) {
    return ((fahrenheit-32)/1.8);
}

function toFahrenheit(celsius) {
    return ((celsius*1.8)+32);
}

module.exports = {
    toCelsius,
    toFahrenheit
}
