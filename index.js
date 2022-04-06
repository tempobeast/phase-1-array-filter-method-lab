// Code your solution here
function findMatching(array, string) {
    const name = array.filter(item => item.toLowerCase() === string.toLowerCase())
    return name
}

function fuzzyMatch(array, string) {
    const firstInit = array.filter(item => item.charAt(0) === string.charAt(0))
    return firstInit
}

function matchName(array, string) {
    const match = array.filter(item => item.name.toLowerCase() === string.toLowerCase())
    return match
}