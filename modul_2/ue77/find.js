const os = require('os');
const f = require("fs");

// check amount of args given
if (process.argv.length < 3) {
    console.log("wrong number of args! want 1, got " + (process.argv.length-2));
    return;
}

// check if folder to find exists
if (!f.existsSync(process.argv[2])) {
    console.error('folder "' + process.argv[2] + '" does not exist!');
    process.exit(1);
}

// rekursive funktion zum listen der ordner inhalte
const listDir = (path) => {
    f.readdirSync(path, options={withFileTypes: true}).forEach((elem) => {
        if (elem.isDirectory()) {
            listDir(path + '/' + elem.name);
        } else {
            let p = path.replace(/my-files\/?/, '');
            if (p.length > 0) {
                p += '/'
            }
            console.log(p + elem.name);
        }
    });
};

listDir(process.argv[2]);