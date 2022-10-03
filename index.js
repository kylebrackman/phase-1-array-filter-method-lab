function findMatching(driverNamesArray, string) {
    return driverNamesArray.filter(name => string.toLowerCase() === name.toLowerCase())
    }


    
function fuzzyMatch(driverNamesArray, string) {
    return driverNamesArray.filter(name => string.slice(0,2) === name.slice(0,2))
}

function matchName(driverObj, string) {
    return driverObj.filter(obj => obj.name === string)
}























// Code your solution here

// function findMatching(b, a) {
//     return b.filter(function (c) {return c.toLowerCase() === a.toLowerCase()
//     })
// }

// function fuzzyMatch(b, a) {
//     return b.filter(function (c) { return c.toLowerCase().slice(0, 2) === a.toLowerCase().slice(0, 2)})
//     }

// function matchName(b, a) {
//     return b.filter(function (c) {return c.name === a})
// }