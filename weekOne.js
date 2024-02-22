// RIOT Walk - Read, Input, Output, Talk
    // talk through and ask questions with interviewers
        // ex. thinking about edge case scenarios
    // start with pseudo code to explain your approach

// Given array of values, move the lowest element to the front, shifting backward any elements previously ahead of it
// ex. [4,2,1,3,5] to [1,4,2,3,5] and return it

// create function that accepts an array
function minToFront(arr) {
    // define initial lowestNum variable
    let lowestNumIndex = 0
    // identify lowest num in array
    // iterate over array
    for(let i = 1; i < arr.length; i++) {
        // compare current number to lowestNumber
        // if current num is lower then make lowestNum
        if(arr[i] < arr[lowestNumIndex]) {
            lowestNumIndex = i
        }
    }
    // move the lowest num to the front of the array
    // start at the lowest num's index
    for(let i = lowestNumIndex; i > 0; i--) {
        // store next index value inside a temp variable
        let temp = arr[i-1]
        // set next index value to lowest number
        arr[i-1] = arr[i]
        // set current index value to temp value
        arr[i] = temp
    }
    return arr
}

console.log(minToFront([4,2,1,3,5]))