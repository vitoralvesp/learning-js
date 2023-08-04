function myFunction(a) {
    return Number(a.toFixed(2));
}

console.log(myFunction(2.12397)); // returns 2.12
console.log(myFunction(3.136)); // returns 3.14
console.log(myFunction(1.12397)); // returns 1.12
console.log(myFunction(26.1379)); // returns 26.12