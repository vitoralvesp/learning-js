function myFunction(a) {
    return a - Math.floor(a) === 0
}

console.log(myFunction(4)); // returns true
console.log(myFunction(1.123)); // returns false
console.log(myFunction(1048)); // returns true
console.log(myFunction(10.48)); // returns false