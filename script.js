function alwaysHungry(arr) {
    if (arr.includes("food")) {
        console.log("yummy".repeat(arr.filter(item => item === "food").length));
    } else {
        console.log("I'm hungry");
    }
}

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = arr.filter(item => item > cutoff);
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > average) {
            count++
        }
        
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    return arr.reverse();
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // Output: ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    var fibArr = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib);
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

