1. Sharing code with `module.exports`
2. Bringing code in with `require`
3. Saving a file with the `fs` core module


### In `calculator.js`

The four functions are already done. You only have one task here.

**TODO 1.** At the bottom of the file, export the four functions so `app.js` can use them. Remember the pattern from the lesson: `module.exports = { }` with the function names inside.

### In `app.js`

This is where you wire everything together.

**TODO 2.** Import the four functions from `calculator.js`. Think carefully about what file name goes inside the quotes, and do not forget the `./` in front.

**TODO 3.** Import the `fs` module so you can write to a file later.

**TODO 4.** Call each of the four functions with two numbers. Store each answer in its own variable.

**TODO 5.** Print each result in the terminal with `console.log`.

**TODO 6.** Save one of your results into a file named `result.txt` using `fs.writeFileSync`.

**TODO 7.** Print a message that tells the user the file was saved.

## Run It

In the terminal, type:

```
node app.js
```

## What Success Looks Like

Your terminal should print something like this (your numbers may differ if you used different values):

```
add: 10
subtract: 6
multiply: 16
divide: 4
Saved to result.txt
```

Then check your folder. A new file named `result.txt` should appear. Open it and read it.

## What to Submit
