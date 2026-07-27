// import          path name
const { add, companyName, age } = require("./lib")
const fs = require("fs")

const sum = add(5,5)
const name = companyName("NU Clark")
const ageVal = age(19)

console.log(sum)
console.log(name)
console.log(ageVal)

let output = `${name} and i am ${ageVal} years old`

fs.writeFileSync("result.txt", output)