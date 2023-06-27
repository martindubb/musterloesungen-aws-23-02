const os = require('os');
const f = require("fs");

// check amount of args given
if (process.argv.length < 3) {
    console.log("wrong number of args! need at least 1, got " + (process.argv.length-2));
    return;
}

for (let i=2; i<process.argv.length; i++) {
    if (!f.existsSync(process.argv[i])) {
        console.error('file "' + process.argv[i] + '" does not exist!');
        process.exit(1);
    }
    
    let content = f.readFileSync(process.argv[i], "utf-8");
    console.log(content);
}
