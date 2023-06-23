const chalk = require('chalk');

function summe(a, b) {
    console.log(chalk.blue(a + '+' + b + ' = ' + (a+b)));
}

module.exports = {
    summe
}