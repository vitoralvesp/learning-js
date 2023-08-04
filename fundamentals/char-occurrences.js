function myFunction(a,b) {
    return b.split(a).length - 1
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?')); // returns 2
console.log(myFunction('h', 'how many times does the character occur in this sentence?')); // returns 4
console.log(myFunction('?', 'how many times does the character occur in this sentence?')); // returns 1
console.log(myFunction('z', 'how many times does the character occur in this sentence?')); // returns 0