const { objectContaining } = require("expect");

// Code your solution here
function findMatching (drivers, string) {
return drivers.filter(function (name) {    
return name.toUpperCase() === string.toUpperCase()
}) 
}

function fuzzyMatch (drivers, letter) {
return drivers.filter((driver) => driver.startsWith(letter))
}

function matchName (drivers, string) {
    console.log(drivers[string])
}