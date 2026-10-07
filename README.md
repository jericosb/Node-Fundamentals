# Node.js Fundamentals

This activity introduces the basic concepts of **Node.js**, including modules, importing functions, destructuring, built-in modules, and basic file handling using the File System (`fs`) module.

## Topics Covered

* Node.js modules
* Importing and exporting functions
* Destructuring with `require()`
* Built-in Node.js modules
* The `path` module
* The `fs` (File System) module
* Writing data to a file
* Reading data from a file
* Template literals
* Running a Node.js program

---

# Part 1: Using Modules

Node.js allows you to organize code into separate files called **modules**.

For this activity, you will have a main JavaScript file that imports functions from another file named `lib.js`.

## Project Structure

Your project should look like this:

```text
node-fundamentals/
│
├── index.js
├── lib.js
└── package.json
```

> **Important:** Do not manually create `package.json`. Generate it using `npm init -y`.

## Step 1: Initialize the Project

Open your terminal inside the project folder and run:

```bash
npm init -y
```

This automatically creates:

```text
package.json
```

---

## Step 2: Create `lib.js`

Create a file named:

```text
lib.js
```

Add the following code:

```javascript
function add(a, b) {
  return a + b
}

function companyName(name) {
  return name
}

function age(value) {
  return value
}

module.exports = {
  add,
  companyName,
  age
}
```

The `module.exports` object makes the functions available to other JavaScript files.

---

## Step 3: Import the Functions

Create another file named:

```text
index.js
```

Add:

```javascript
const { add, companyName, age } = require("./lib")
```

This imports the three functions from `lib.js`.

The curly braces are an example of **destructuring**. Instead of writing:

```javascript
const lib = require("./lib")
```

and then:

```javascript
lib.add(5, 5)
lib.companyName("TSU")
lib.age(19)
```

you can directly extract the functions you need:

```javascript
const { add, companyName, age } = require("./lib")
```

---

# Part 2: Using the Imported Functions

Add the following code to `index.js`:

```javascript
const { add, companyName, age } = require("./lib")

const sum = add(5, 5)
const name = companyName("TSU")
const ageVal = age(19)

console.log(sum)
console.log(name)
console.log(ageVal)
```

Run the program:

```bash
node index.js
```

Expected output:

```text
10
TSU
19
```

---

# Part 3: Template Literals

You can combine variables and text using a **template literal**.

Add:

```javascript
let output = `${name} and i am ${ageVal} years old`

console.log(output)
```

Expected output:

```text
TSU and i am 19 years old
```

Template literals use backticks:

```javascript
`Hello ${name}`
```

The `${}` syntax allows you to insert a variable or expression into a string.

---

# Part 4: Using the File System (`fs`) Module

Node.js provides built-in modules that allow you to perform common tasks.

The `fs` module allows your program to work with files.

Import it using:

```javascript
const fs = require("fs")
```

You do **not** need to install `fs` using npm because it is built into Node.js.

---

## Writing to a File

You can create a file and write content to it using:

```javascript
fs.writeFileSync("result.txt", output)
```

For example:

```javascript
const { add, companyName, age } = require("./lib")
const fs = require("fs")

const sum = add(5, 5)
const name = companyName("TSU")
const ageVal = age(19)

console.log(sum)
console.log(name)
console.log(ageVal)

let output = `${name} and i am ${ageVal} years old`

fs.writeFileSync("result.txt", output)
```

After running:

```bash
node index.js
```

a new file will be created:

```text
result.txt
```

The file will contain:

```text
TSU and i am 19 years old
```

### Important

`writeFileSync()` is a **synchronous** operation. The program waits for the file-writing operation to finish before continuing to the next statement.

---

# Part 5: Reading and Writing Files

The `fs` module can also be used to both write and read files.

Create a new file named:

```text
file.js
```

Add:

```javascript
const fs = require("fs")

fs.writeFileSync("name.txt", "hello this is a text", "utf8")

const fileData = fs.readFileSync("name.txt", "utf8")

console.log("file written")
console.log(`reading ${fileData}`)
```

Run:

```bash
node file.js
```

Expected output:

```text
file written
reading hello this is a text
```

The program performs two operations:

### 1. Write to the file

```javascript
fs.writeFileSync("name.txt", "hello this is a text", "utf8")
```

This creates `name.txt` and writes the text:

```text
hello this is a text
```

### 2. Read the file

```javascript
const fileData = fs.readFileSync("name.txt", "utf8")
```

This reads the contents of `name.txt` and stores them in the `fileData` variable.

---

# Part 6: Using the `path` Module

Node.js also provides a built-in `path` module for working with file and directory paths.

Import it using:

```javascript
const path = require("path")
```

Example:

```javascript
const path = require("path")

const filePath = path.join("files", "name.txt")

console.log(filePath)
```

The `path.join()` method combines parts of a path correctly for the operating system.

For example:

```text
files/name.txt
```

You can also use `path` with the `fs` module:

```javascript
const fs = require("fs")
const path = require("path")

const filePath = path.join("files", "name.txt")

fs.writeFileSync(filePath, "Hello Node.js", "utf8")
```

---

# Project Structure

After completing the activity, your project may look like:

```text
node-fundamentals/
│
├── node_modules/
├── index.js
├── lib.js
├── file.js
├── result.txt
├── name.txt
└── package.json
```

> **Note:** `result.txt` and `name.txt` are generated by the programs. You do not need to manually create them.

---

# Key Concepts

| Concept              | Example                  | Purpose                    |
| -------------------- | ------------------------ | -------------------------- |
| `require()`          | `require("./lib")`       | Import a module            |
| `module.exports`     | `module.exports = {...}` | Export functions/data      |
| Destructuring        | `{ add, age }`           | Extract specific values    |
| `fs`                 | `require("fs")`          | Work with files            |
| `fs.writeFileSync()` | `writeFileSync(...)`     | Write/create a file        |
| `fs.readFileSync()`  | `readFileSync(...)`      | Read a file                |
| `path`               | `require("path")`        | Work with file paths       |
| Template literal     | `` `${name}` ``          | Insert values into strings |
| `console.log()`      | `console.log(value)`     | Display output             |

---

# How to Run

Run each JavaScript file using Node.js:

```bash
node index.js
```

and:

```bash
node file.js
```

---

# Learning Objectives

After completing this activity, you should be able to:

1. Explain what a Node.js module is.
2. Import functions from another JavaScript file.
3. Export functions using `module.exports`.
4. Use destructuring with `require()`.
5. Use built-in Node.js modules.
6. Write data to a text file using `fs`.
7. Read data from a text file using `fs`.
8. Use template literals to create dynamic strings.
9. Use the `path` module to work with file paths.
10. Run JavaScript programs using Node.js.
