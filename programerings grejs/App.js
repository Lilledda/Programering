let index = 0

let names = ["Niklas", "Oliver", "Jonathan", "Adam", "David"]

for (let i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i])
}

let foundJonathan = false

while (!foundJonathan) {
    if (names[index] === "Jonathan") {
        foundJonathan = true
    }
    else {
        index ++
    }
}

console.log("I found Jonathan at Index " + index)