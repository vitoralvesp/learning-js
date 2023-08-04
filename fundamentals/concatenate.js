function myFunction(a,b) {
    return a.includes(b) ? b+a : a+b
}

console.log(myFunction('cheese', 'cake')); // returns cheesecake
console.log(myFunction('lips', 's')); // returns slips
console.log(myFunction('Java', 'script')); // returns Javascript
console.log(myFunction(' think, therefore I am', 'I')) // returns I think, therefore I am