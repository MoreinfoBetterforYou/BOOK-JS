// ----- NOTE -------------
    // THIS FILE IS ONLY FOR EDUCATIONAL PURPOSES ONLY. IT IS NOT AN EXECUTABLE FILE UNLIKE THE OTHER FILES IN THIS REPO. RUNNING THIS WILL GIVE A REFERENCE ERROR. HOWEVER IF YOU STILL DO WANT TO RUN THIS FILE. THEN COMMENT OUT THE FOLLOWING LINES IN THE CODE:
        // LINE NUMBER: 195
        // LINE NUMBER: 207
        // LINE NUMBER: 220

// A function is a blocked of code that can be segmented once and called again and again. You can create a function using the function keyword. The basic syntax for a function is: 
    function nameOfTheFunction() {
        // Content of the function.
    }

// You can call a function by writing its name and a set of parenthesis.
    nameOfTheFunction();

// Lets write a function that greets you.
    console.log(`Basic Function - Greeting`);
    function gretting(userName) {
        console.log(`Hello ${userName}`);
    }
    gretting('M. Hassan Farooq');
    console.log();

// Parameters: Parameters are variables that are listed part of the function defintion. The act as a placeholders for values the function will use. 

// Arguments: Arguments are the actual values you pass to the function when you call it. They are use in place of the parameters.
    console.log(`Function with Parameters and arrguments - Greet`);
    function greet(name){
        console.log(`Hello ${name}`);
    }
    greet(`M. Hassan Farooq`);
    console.log();

// Defualt: Default parameters in Java Script are values tht a function parameter takes if no argument is provided when the function is called. You can set default parameters in the functions defintion: 
    console.log(`Default Parameters in Function - welcoming`);
    function welcoming(name = "Guest"){
        console.log(`Hello ${name}`);
    }
    welcoming(); // Output: Hello Guest
    welcoming('M. Hassan Farooq'); // Output: Hello M. Hassan Farooq
    console.log();

// Unsuitable Parameters: Unsuitable parameters are parameters that are not valid for the function. For example, if you try to pass a number to a function that expects a string, you will get an error.

    console.log(`Unsuitable Parameters `);
    function add(a, b){
        console.log(a + b);
    }
    add(5); // Output: NaN
    add('hello', 2); // Output: hello2
    console.log();

// Another important thing to note is the fact that if you try to pass more parameters than those in the function defintion. Most language would crash or give an error. However Java Script will just skip the extra parameters and use only those that were in the functions definition.
    console.log(`Extra Parameters In Functions`);
    add(2, 4, 6, 8, 10);
    console.log();

// Special Functions: Here we will discuss some special types of functions in java script.

    // Arrow Functions: Arrow functions in Java Script are a short hand for writing functions. They use the => symbol. Arrow functions are often used to writing simple functions and make your code more readable and cleaner. The basic syntax for an arrow function is like this:
        let parameter1;
        let parameter2;
        const nameOfFunction = (parameter1, parameter2) => {/* Content of the Fucntion. */};

    // Lets look at a good example:
        
        // Regular Function:
        console.log(`Arrow Functions - Example 1`)
        function divide(a, b){
            return a / b;
        }
        console.log(divide(15, 5));

        const divideArrowFunction = (a, b) => {return a / b};
        console.log(divideArrowFunction(15, 5));
        console.log();
    
    // Spread Operator: The spread operator in Java Script is writen as three dots (...). It allows you to spread the element of an array or the properties of an object into another array or object. Like in easy words it just copies the elements of an array and object and forms a new array and object from those elements.
    // USES:
        // To copy arrays or objects.
        // To combine arrays or objects.
        // To pass aray elements as seperate arguments to a function.
    
    // Copying Arrays: 
    console.log(`Spread Operator - Example 1`);
    let numbers = [1, 2, 3, 4, 5, 6];
    let copy = [...numbers];
    console.log(copy);
    console.log();
    
    // Combining Arrays:
    console.log(`Spread Operator - Example 2`);
    let arrayNo1 = ['very', 'fun', 'exciting'];
    let arrayNo2 = ['Javascript', 'is', ...arrayNo1, 'and', 'a', 'powerful', 'language'];
    console.log(arrayNo2);
    console.log();

    // Passing Array elements as seperate arguments to a function.
    console.log(`Spread Operator - Example 3`);
    let multiply = (a, b) => {return a * b};
    let numbersToBeMultiplied = [15, 14];
    console.log(multiply(...numbersToBeMultiplied));
    console.log();

    // Lets look at another example:
    console.log(`Spread Operator - Example 4`);
    let multiply4Numbers = (a, b, c, d) => {return a * b * c * d};
    let arrayOfNumbers1 = [7, 12];
    let arrayOfNumbers2 = [14, 15];
    console.log(multiply4Numbers(...arrayOfNumbers1, ...arrayOfNumbers2));
    console.log();

    // Rest Operator: THe rest operator in Java Script is also written as three dots (...). It is function in function parameters to collected all remaining arguments in a function into an array. 

    // Lets look at an easy example: 
    console.log(`Rest Operator - Example 1`);
    function someFunction(parameter1, parameter2){
        console.log(parameter1, parameter2);
    }
    someFunction('Hi', 'there!', 'What', 'are', 'you', 'doing');
    // As you know that javascript will just leave the extra arguments and only take those that are actually included in the functions definition.

    // But we can use the rest operator in this example to collect all the remainaing arguments into a single array.
    function someOtherFunction(parameter1, ...parameter2){
        console.log(parameter1, parameter2);
    }
    someOtherFunction('Hi', 'there!', 'What', 'are', 'you', 'doing');
    console.log();

// Returning Values From a function: When you create a function you can use the return keyword to store the result of a function into a variable or log it to the console if you want. This is very important as it allows us to obtain the result of the function we just created. If you still don't use the return statement in your function it will output undefined. As no result is stored.
    console.log(`Returning Values From a function - Example 1`);
    // Function without return statement.
    function addition(a, b) {
        a + b;
    }
    let result = addition(5, 9);
    console.log(result); // Ouput: undefined

    // Function with return statement.
    function alsoAddition(a, b){
        return a + b;
    }
    let alsoResult = alsoAddition(5, 9);
    console.log(alsoResult); // Output: 14
    console.log();

// Lets look at a more complex example:
    console.log(`Returning Values From a Function - Example 2`);
    let array = [];
    for (i = 1; i <= 10; i++){
        let result = alsoAddition(i, 2*i);
        array.push(result);
    }
    console.log(array);
    console.log();

// If you want to return the value of an arrow function then you follow some general rules:

    // If the arrow function is a single line function then the return keyword doesn't need to be used:
        console.log(`Returning value of an arrow Function - Example 1`);
        let exponent = (a, b) => a ** b;
        let resultOfTheFunction = exponent(2, 3);
        console.log(resultOfTheFunction); // Output: 8
        console.log();
    
    // If the arrow function is a multiline function then the return keyword is needed:
        console.log(`Returning values of arrow Fucntion - Example 2`);
        let exponentiation = (a, b) => {
            console.log(`Exponenting Values....`);
            return a ** b;
        }
        let resultOfFunction = exponentiation(2, 4);
        console.log(resultOfFunction); // Ouput: 16
        console.log();

// Variable Scopes: 
    // What is a Scope:
        /* Scope in Java Script refers to where the variable is accessible in your code. It defines where you can access a certain variable. If a variable is in the scope than you can use the variable but if the variable is out of the scope then you can't access the variable. There are different types of Scopes in Variables: */

            // 1) Local Scope: Local Variables are those variables that are only in scope inside the function in which they are defined. The function parameteres forexample do not require any variable keyword like (var, let, const). These function paramaters are local variables.
                console.log(`Local Variables - Example 1`);
                function testAvailability(x){
                    console.log(`Available Here: ${x}`);
                }
                testAvailability(`I am variable x`);
                console.log(`Not available here: ${x}`);
                console.log();

            // Lets look at another local variable which is a variable that you assign inside a function:\
                console.log(`Local Variables - Example 2`);
                function testingAvailability(){
                    let y = 'Local Variable';
                    console.log(`Available Here: ${y}`);
                }
                testingAvailability();
                console.log(`Not available here: ${y}`);
                console.log();
            
            // We learned that function parameters and variables defined inside a function are local variables. And we can't access those variables outisde the function. But we learned previously that we can return the values of those variables not the variables itself using the return keyword. Lets look at an example:
                console.log(`Local Variables - Example 3`);
                function testAvailable() {
                    let y = `I'll return`;
                    console.log(`Available Here: ${y}`);
                    return y;
                }
                let z = testAvailable();
                console.log(`Value of the local variable y: ${z}`);
                console.log(`The local variable itself: ${y}`);
                console.log();

            // Hoisting: Hoisting is a natural phenomenon of javascript in which a variable that has been declared using the var keyword. Its function decleration not initialization is moved to the top of the program. This results in when you call the variable it giving the value of undefined.
                console.log(`Hoisting - Example 1`);
                // So javascript will add the following line to the code even if it wasn't even actually there.
                // var x;
                console.log(x);
                var x = 10;
                console.log();
            
            // But if you use the let keyword then the variable will not be hoisted. It will give a Reference error if you try to access it before it is declared. The same thing is for const keyword.
                console.log(`Hoisting - Example 2`);
                console.log(y);
                let y = 10;
                console.log();
            
            // Scope of let: let is blocke scoped which means that any variable declared with the let keyword is only accessible within the block of code. A block of code means any code within the curly brackets ({}). 
                console.log(`Scope of let - Example 1`);
                function doingStuff() {
                    if (true) {
                        let x = `local`;
                    }
                    console.log(x);
                }
                doingStuff();
                console.log();
            
            // Scope of var: var is function scoped which means that any variable declared with the var keyword is only accessible within that function.
                console.log(`Scope of var - Example 1`);
                function doingOtherStuff(){
                    if (true) {
                        var x = `local`;
                    }
                    console.log(x);
                }
                doingOtherStuff();
                console.log();

            // Scope of const: const and let are both blocke scoped which means that any variable declared with the const and let keyword can only be accessed within that block of code. A block of code is anything inside curley brackets ({}).
                console.log(`Scope of const - Example 1`);
                function doingSomeMoreStuff() {
                    if (true) {
                        const x = `local`;
                    }
                    console.log(x);
                }
                doingSomeMoreStuff();
                console.log();
            
            // Global Variables: A global variable is a variable in JavaScript that is declared outside of any function or block. Making it accessible from anywhere within your code. Global variables are usually declared at the top of your JavaScript file. 

            // However you might be thinking that global variables are so great i should just rely on them for all my variables. But this is where you are wrong my friend. Global variables are not the best practice. They can lead to bugs and make your code confussing. As your application or program grows it is a better practice to use local variables instead to prevent any misunderstandings.

                console.log(`Global Variables - Example 1`);
                let globalVariable = `Accessible everywhere!`;
                console.log(`The global variable: ${globalVariable}`);

                function functionScopeOrBlockScope() {
                    console.log(`Accessing the Global variable inside the function: ${globalVariable}`);
                }
                functionScopeOrBlockScope();
                console.log(`Still Available Here!`);
                console.log();
            
// IIFE: IIFE stands for Immediately Invoked Function Expression. It is a function that runs as soons as it is defined. IIFE is an anonymous, because it doesn't have a name. It is self executing. 

    // Why use IIFE:
        // To create a private scope for variables and functions and avoid polluting the global scope.
        // To initialize code that only needs to run once.

    // Syntax: The basic syntax for an IIFE is:
        console.log(`Immediately Invoked Function Expression - Example 1`);
        (function () {
            console.log(`IIFE`);
        })();
        console.log();

    // An IIFE in arrow functions would be like this:
        console.log(`Immediately Invoked Function Expression - Example 2`);
        (() => {
            console.log(`IIFE`);
        })();
        console.log();
            
    // You might be wondering what are those parenthesis at the end. Well they are used the invoke our IIFE and also if your function had some sort of parameter then you would write that parameter inside these parenthesis.

// Recrusive Functions: A recrusive function is a function that calls itself in order to solve a problem. Think of it like you have a Russian nesting doll and you want to find the smallest doll. So you would first open the largest down and then open the one smaller than that and so on. Lets look at an example and you will definately be able to understand it more:

    console.log(`Recrusive Function - Example 1`);
    function countDown(number){
        console.log(number);
        if(number > 0){
            countDown(--number);
        }
    }
    countDown(10);
    console.log();

// Lets look at a more complex example: 

    console.log(`Recrusive Function - Example 2`);
    function moreRecrusiveness(number){
        console.log(`Started the function: ${number}`);
        if(number > 0){
            moreRecrusiveness(number - 1);
        }
        else{
            console.log(`Done with recrusive function`);
        }
        console.log(`Finished Function: ${number}`);
    }
    moreRecrusiveness(10);
    console.log();

// Nested Functions: A nested function is just a function inside another function. 
    console.log(`Nested Functions - Example 1`);
    function outerFunction() {
        console.log(`This is the outer function.`);

        function innerFunction(){
            console.log(`This is the inner (nested) function.`);
        }

        innerFunction();
    }
    outerFunction();
    console.log();

// Lets look at a more complex example:
    console.log(`Nested Functions - Example 2`);
    function doOuterFunctionStuff(number) {
        console.log(`This is the outer function.`);

        function doInnerFunctionStuff(num){
            console.log(`This is inner (nested) function`);
            console.log(num + 15);
            console.log(`I can also access the parameter of the outer function: ${number}`);
        }

        doInnerFunctionStuff(number);
    }

    doOuterFunctionStuff(15);
    console.log();

// Anonymous Function: An anonymous function is a function that doesn't have a name. These type of functions are often stored in variables or passed as arguments to other functions. An anonymous function can be called using the variable name and additing a parenthesis at its end. 

    console.log(`Anonymous Function - Example 1`);
    let anonymousFunction = function () {
        console.log(`This is an anonymous function.`);
    }
    anonymousFunction();
    console.log();

// Function Call Backs: Function call backs are just you using a function as a parameter for another function. Mostly you use function call backs when dealing with time intervals and you want the function to execute after a specified amount of time. Think of it like you were in call with a relative and then your product manager calls you so you tell your relative wait a bit i will call you back. The same goes for function call backs:

    // First we will talk about using functions as parameters in general and then we will talk about call backs: 

    console.log(`Function Call Backs - Example 1`);
    function doSomething() {
        console.log('hi');
    }
    function doSomeMoreStuff(doSomething){
        doSomething();
        console.log(`We used the doSomething() function as a parameter to this function.`);
    }
    doSomeMoreStuff(doSomething);
    console.log();

    // Now for function call backs:
    console.log(`Function Call Backs - Example 2`);
    function printMe() {
        console.log(`I will print 1s later`);
    }
    setTimeout(printMe, 1000);
    console.log();

    // We also have another type of function call back which is setInterval() which calls back a function after the specified amount of time until you kill the program.
    console.log(`Function Call Backs - Example 3`);
    function printMeManyTimes(){
        console.log(`I will print every second.`);
    }
    setInterval(printMeManyTimes, 1000);
    console.log();