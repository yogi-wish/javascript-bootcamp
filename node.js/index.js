const fs = require('fs');
const path = require('path');

// fs.writeFileSync("hello.txt", "this is hello world file");
// fs.unlinkSync('hello.txt')


for (i = 0; i < 5; i++) {
    fs.writeFileSync(`hello${i + 1}.txt`, "this is hello world file")
}