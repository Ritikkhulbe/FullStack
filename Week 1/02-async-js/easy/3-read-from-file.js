const fs = require('fs');

function readFiless(){
    const content = fs.readFileSync("3-read-from-file.js", 'utf-8');
    console.log("File Content:", content);
}
readFiless();

for(let i = 0; i < 10000;i++){
    var a = i+i+i+i;
}

