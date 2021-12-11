// Checking for Empty Arrays
let myArray = [];

// Arrays have a length property
// ** use `.length` alone is consider wrong, only if you sure that variable `myArray` is an array, because sometimes it can be `undefined` or `null` 
console.log(myArray.length)


// ********** //

myArray = null; // same as `undefined`

// Solution to variable `myArray` is `undefined` or `null`
console.log(myArray && myArray.length ? true : false)


// ********** //

// We now have a more concise way!
myArray = undefined;

// `Optional Chaining` operator ?.
console.log(myArray?.length ? true : false)


// ********** //

// We can use more than one!
myArray = [{ "id": 1 }]

console.log(myArray?.[0]?.id ? true : false)
console.log(myArray?.[0]?.name ? true : false)

// We can use it with `null coalescing` operator ??
console.log(myArray?.[0]?.id ?? "No id property")
console.log(myArray?.[0]?.name ?? "No name property")


// ********** //

// If you need to find out if it is an array
myArray = "String"

// This does not work
console.log(myArray && myArray.length ? true : false)

// Neither does this
console.log(myArray?.length ? true : false)

// This is a way to be sure if it is `Array`
console.log(Array.isArray(myArray))

// If we are completely unsure...
myArray = [{ "id": 1 }]
console.log(Array.isArray(myArray) ?? myArray.length ? true : false)

// or to check for a property also...
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false)
console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false)