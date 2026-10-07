const fs = require('fs')

fs.writeFileSync("name.txt", "hello this is a text", "utf8")

const fileData = fs.readFileSync("name.txt", 'utf8')


console.log('file written')
console.log(`reading ${fileData}`)