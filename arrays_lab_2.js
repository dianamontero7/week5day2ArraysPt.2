/**
 * Excercise 1: Array Manipulation
 */

let colors  = ["Red", "Blue", "Green"]

// Write code below use push to add "Yellow" to the end of the array.


colors.push("Yellow");


// Write code below use unshift to add "Purple" to the beginning of the array.

colors.unshift("Purple");

// Write code below to use pop to remove the last item from the array.

colors.pop([4]);

// Write code below to use shift to remove the first item from the array.

colors.shift([0]);


// Print the final array to the console.
console.log(colors);




/**
    Exercise 2: Sort Even and Odd Numbers
    Objective: Combine array methods with logic, control flow, and looping.

    Task:
        - Write a for loop that iterates through the numbers array from the first index to the last index.

            - Inside the loop, use an if-else statement to check if each number is even or odd.

            - If the number is even, use the push method to add it to the evenNumbers array.

            - If the number is odd, use the push method to add it to the oddNumbers array.

            - After the number is added to either array, remove it from the original numbers array using shift.

        - After the loop, Print the evenNumbers, oddNumbers, and numbers arrays to the console.

        Things to consider as you write your loop:

            - How do you programmatically determine if a number is Even or Odd?
    

    Success criteria: 
    - After your for loop executes the evenNumbers array should contain all of the even numbers
    - After your for loop executes the oddNumbers array should contain all of the odd numbers
    - After your for loop executes the numbers array should now be empty.
 */

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let evenNumbers = []
    let oddNumbers = []
   

    // write your code below

for (let i = numbers.length; i > 0; i-- ){
let number = numbers.shift();
if(number % 2 === 0){
    evenNumbers.push(number);
} else {
    oddNumbers.push(number); 
}

}



    // Print the three arrays to the console below, on separate lines

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);



