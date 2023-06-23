const f = require('figlet');

console.log(
    f.textSync("Dancing Font", {
      font: "Dancing Font",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: false,
    })
  );