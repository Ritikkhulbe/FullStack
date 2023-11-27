/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function sum(num){
    var a = 0;
    for(let i = 1;i <= num;i++){
        a += i;
    }
    return a;
}

function calculateTime(n) {
    let start = new Date();

    sum(n);

    let end = new Date();

    return (end - start)/1000;
}

var test1 = calculateTime(100);
var test2 = calculateTime(100000);
var test3 = calculateTime(1000000000);

console.log(`Time taken to execute Sum 1-100 is ${test1}s`)
console.log(`Time taken to execute Sum 1-100000 is ${test2}s`)
console.log(`Time taken to execute Sum 1-1000000000 is ${test3}s`)