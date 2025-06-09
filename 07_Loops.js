// While Loops: A while loop is used to execute a block of code as long as a specified condition is true. If the condition is false then the code inside the while loop will be skipped. The syntax for a while loop is as follows:
let condition;
while (condition) {
    // Code will be executed. 
}
// Here is a very simple while loop for printing numbers from 1 to 10:
console.log(`While Loop - Example 1`);
let number = 0;
while (number <= 10){
    console.log(number);
    number++;
}
console.log();

// Here is another example but this time with an array to check whether a given person is in the array or not:
console.log(`While Loop - Example 2`);
let people = ["John", "Jane", "Jack", "Jill"];
let notFound = true;

while (notFound && people.length > 0){
    if (people[0] === "Jack") {
        console.log(`Jack is in the array.`);
        notFound = false;
    }
    else{
        people.shift();
    }
}
console.log();

// Lets look at another example where we will use a while loop to print the Fibonacci sequence:
console.log(`While Loop - Example 3`);
let a = 0;
let b = 1;
let temperature;
let array = [];

while (array.length <= 15){
    array.push(a);
    temperature = a + b;
    a = b;
    b = temperature;
}
console.log(array);
console.log();

// Do while Loops: A do while loops is a type of loop that will execute its body at least once and then continue to execute as a long as a specified condition is true. The key difference between a do while loop and a while loop is that:
//  The do while loop will always execute once and first the block of code runs and then the condition is checked.
// While loops check the condition first and then execute the block of code if the condition is true.

// The basic syntax for a do while loop is as follows:
do {
    // Some code will be executed.
} while (condition);

// Here is a good example for a do while loop:
// let correctPassword = "password123";
// let userInput;
// console.log(`Do While Loop - Example 1`);

// do {
//    // userInput = prompt(`Enter your passowrd`);
// } while(userInput !== correctPassword);
// console.log(`Access granted!`);
// console.log(); 

// For loops: A for loop is a type of loop that is used to repeat a block of code a specific number of times. It is often use in programming when you know in advance how many times a specific block of code will execute. The basic syntax for a for loop is as follows:
let initialization;
let increment;
let decrement;
for (initialization; condition; increment/decrement) {
    // Code to be executed.
}

// Lets look at a simple example of a for loop that prints numbers from 1 to 10:
console.log(`For Loop - Example 1`);
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log();

// Lets look at another example of a for loop for adding first 100 numbers to an array:
console.log(`For Loop - Example 2`);
let numbersUpTo100 = [];
for (let i = 1; i <= 100; i++){
    numbersUpTo100.push(i);
}
console.log(numbersUpTo100);
console.log();

// Nested Loops: Nested Loops are just loops placed inside other loops. They are useful when you need to perform repeated operations within repeated operations. 
// Lets look at a simple example of a nested loop.
console.log(`Nested Loops - Example 1`);
let arrayofArrays = [];
for (let i = 0; i <=3; i++){
    arrayofArrays.push([]);
    for (let j = 1; j <= 3; j++){
        arrayofArrays[i].push(j);
    }
}
console.log(arrayofArrays);
console.table(arrayofArrays);
console.log();

// Here is another example of a nested loop that prints multiplication table:
let multiplicationTable = [];
console.log(`Nested Loops - Example 2`);
for (let i = 0; i <= 10; i++){
    multiplicationTable.push([]);
    for (let j = 1; j <= 10; j++){
        multiplicationTable[i].push(`${i} x ${j} = ${i * j}`);
    }
}
console.table(multiplicationTable);
console.log();

// Loops and Arrays: Loops are often used to iterate over arrays and perform operations on each element.The basic struture for a loop that iterates over an array is as follows:
let arr = [/* Some array */];
let statement;
for (let initialize_varaible; initialize_varaible < arr.length ; statement){
    // Code to be executed.
}

// Here is a simple example:
let names = ["Alice", "Bob", "Charlie"];
console.log(`Loops and Arrays - Example 1`);
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
console.log();

// Here is another example of a loop that iterates over an array used to replace elements in an array:
let numbers = [1, 3, 5, 7, 9];
console.log(`Loops and Arrays - Example 2`);
for (let i = 0; i < numbers.length; i++){
    numbers[i] = i;
}
console.log(numbers);
console.log();

// Here is another example. In this example we do a bit of discrimination and check if the number is even or odd and if it is even we delete it from the array:
console.log(`Loops and Arrays - Example 3`);
let arrayOfNumbers = [];
for (let i = 0; i <= 100; i++){
    arrayOfNumbers.push(i);
}
for(let i = 0; i < arrayOfNumbers.length; i++){
    if (arrayOfNumbers[i] % 2 === 0){
        arrayOfNumbers.splice(i, 1);
        continue;
    }
    console.log(arrayOfNumbers[i]);
}
console.log(arrayOfNumbers);
console.log();

// For of Loops: A for of loop is a type of loop that is used to iterate through the elements of an array or object. They allow us to go through each item in a collection one be one without worrying about the indexes of the elements. The basic syntax for a for of loop is:
let collection = [/* Some elements within the array.  */];
for (const item of collection){
    // Do something with the item.
}

// Here is a real life example like lets say you have to print out the names of all the fruits you have in your basket.
console.log(`For Of loops - Example 1`);
const fruits = ["Apple", "Banana", "Cherry", "Date"];
for (const fruit of fruits){
    console.log(fruit);
}
console.log();

// Here is another example with strings:
console.log(`For Of loops - Example 2`);
const author = 'M. Hassan Farooq';
for (const letters of author){
    console.log(letters);
}
console.log();

// For in Loops: The for in loops are used to loop over the key values of an object. Just like the for of loops are used for working with arrays, the for in loops are used for working with objects. The basic syntax for a for in loops is as follows:
let object = {/* Some properties of the object. */};
for (const key in object){
    // Do something with that key.
}

// Lets look at a real world example. Lets say you have an object that contains information about a car.
let car = {
    brand: 'Honda',
    model: 'Civic',
    specific: 'Type-R',
    year: 2025,
    color: 'White'
}
console.log(`For In Loops - Example 1`);
for (const key in car){
    console.log(car[key]);
}
console.log();

// You can see that if we just used `console.log(key)` it would print the keys of the object but if we use `car[key]` it will print the values of the keys. This shows that the for in loops are used to get the keys of an object but the for of loops are used to get the values of an object.

// Looping over objects by converting them into an array: Normally for of loops work with arrays, not objects. But you can turn parts of an object into an array using special functions, and then use the kind of loop you want. There are three methods:
    // 1) Convert Object keys to an Array:
        console.log(`Looping over objects by converting them into an array - Example 1`);
        let myCar = {
            model: 'Corolla',
            year: 2020,
            color: 'Black',
            brand: 'Toyota'
        }
        let keys = Object.keys(myCar);
        for (let key of keys){
            console.log(key);
        }
        console.log();
    
    // 2) Convert Object Values to an Array:
        console.log(`Looping over objects by converting them into an array - Example 2`);
        let values = Object.values(myCar);
        for (let value of values){
            console.log(value);
        }
        console.log();
    
    // 3) Convert Object Entries into an Array:
        console.log(`Looping over objects by converting them into an array - Example 3`);
        for (const [key, value] of Object.entries(myCar)){
            console.log(`${key}: ${value}`);
        }
        console.log();

// Break: The break statement is used to immediately stop a loop or a switch statement. It jumps out of the loop or switch and continues executing the code after the loop or switch. Think of it like pressing the stop button on a washing machine. No matter where you are in the cycle it will stop everything and move on to the next step. 

// Lets look at a real world example:
console.log(`Break - Example 1`);
const basket = ['Apple', 'Banana', 'Mango', 'Pineapple', 'Orange'];
for (const fruit of basket){
    if (fruit === 'Pineapple'){
        console.log(`Found Pineapple!`);
        break;
    }
    console.log(`Not the fruit I am looking for: ${fruit}`);
}
console.log();

// Continue: The continue statement is used to skip the current iteration of a loop and move on to the next iteration. Think of it like you are listening to a song and you want to slip the next song because you don't like it. You just skip it and move on to the next song, you don't just stop listening.

// Lets look at a real world example:
console.log(`Continue - Example 1`);
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbersArray){
    if (number % 2 === 0){
        continue;
    }
    console.log(`Odd Number: ${number}`);
}
console.log();

// Break, Continue and Nested Loops: You can also use break and continue statements in nested loops. 

// Lets look at a real world example:
console.log(`Break and Continue in Nested Loops - Example 1`);
let groups = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Nala', 'Alyx'],
    ['Harry', 'Ron', 'Hermione'],
    ['Luna', 'Neville', 'Ginny']
]
for (i = 0; i < groups.length; i++){
    let matches = 0;

    for (j = 0; j < groups[i].length; j++){
        if(groups[i][j].startsWith('H')){
            matches++;
        }
        else{
            continue;
        }
    if (matches === 2){
        console.log(`Found a group with two names starting with M:`);
        console.log(groups[i]);
        break;
    }
    }
}
console.log();

// Lets look at another example: 
console.log(`Break and Continue in Nested Loops - Example 2`);
for (let group of groups){
    for (let person of group){
        if (person.startsWith('A')){
            console.log(`Found one startin with H: ${person}`);
            break;
        }
    }
}
console.log();

// Break and Continue and Labelled Blocks: You can also use break and continue statements with labelled blocks.

// Lets see the previous example with labelled blocks:
console.log(`Break and Continue in Nested Loops with Labelled Blocks - Example 1`);
outer:
for (let group of groups){
    for (let person of group){
        if (person.startsWith('A')){
            console.log(`Found one starting with A: ${person}`);
            break outer;
        }
    }
}
console.log();