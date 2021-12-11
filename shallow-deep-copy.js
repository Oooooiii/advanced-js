xArray = [1, 2, 3, 4]
yArray = xArray

// shallow copy vs. deep copy (clones of data structure)
// "shallow copy" : means that certain (sub-)values are still connected to the original variable
// "deep copy" : share no references!

// shallow copy 

// with the spread operator
const zArray = [...yArray, 10]
console.log(zArray)
console.log(yArray)

console.log(xArray === yArray)
console.log(yArray === zArray)

// with 'Object.assign()' 
const tArray = Object.assign([], zArray)
console.log(tArray)
console.log(tArray === zArray)
tArray.push(11)
console.log(zArray)
console.log(tArray)

// but if there are nested arrays or objects...
yArray.push([8, 9, 10])
const vArray = [...yArray]
console.log(vArray)
console.log(yArray)
console.log(vArray === yArray)
vArray[4].push(6)
console.log(vArray)
console.log(yArray)
console.log(vArray === yArray)
// NOTICE: use 'spread operator' or 'Array.from()' or 'slice()' or 'Object.assign()' to create a new array, that will not share the same reference!
// but those copy could still have the nested 'object' or 'array' in there, that can be still mutation.
// Nested structural data types can still share reference!

// when it comes to objects, what about...
// ...Object.freeze() 
const scoreObj = {
    "first": 33,
    "second": 44,
    "third": { "a": 1, "b": 3 }
}

Object.freeze(scoreObj)
scoreObj.third.a = 8
console.log(scoreObj) // still mutate - it is a shallow freeze, because it not freeze the entire data strcture if there is any nested 'array' or 'object'


// deep copy -> is in needed to avoid this

// serveral libraries like lodash, ramda, and others have this feature built-in

/*
    Here is a one line Vanilla JS solution, but it does not work with 
    Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, 
    FileLists, ImageDatas, and other complex data types.
*/
const newScoreObj = JSON.parse(JSON.stringify(scoreObj))
// const newScoreObj = scoreObj
console.log(newScoreObj)
console.log(newScoreObj === scoreObj)

// deep clone functions of Vanilla JS, without using libraries
const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    // create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        const value = obj[key];
        // recursive call for nested objects & arrays
        newObject[key] = deepClone(value);
    }

    return newObject
}

const newScoreArray = deepClone(scoreObj)
console.log(newScoreArray)
console.log(newScoreArray === scoreObj)

// now we can make a deep copy pure funtion
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array)
    newArray.push(score)
    return newArray
}

const scoreArray = [22, 33, 44, 55]
const pureScoreHistory = pureAddToScoreHistory(scoreArray, 88, deepClone)

console.log(pureScoreHistory)
console.log(scoreArray)