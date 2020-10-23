const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("säg nummer mellan 1 o 10", (answer) => {
    const nummer = Math.floor((Math.random() *10) +1)
console.log (answer)


if (answer == nummer) console.log("gg bror") 

else if (answer < nummer) console.log ("försök igen")

else if (answer > nummer) console.log ("försök igen")
})

