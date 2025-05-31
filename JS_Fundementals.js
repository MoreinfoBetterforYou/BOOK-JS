// Hardcoded: A hardcoded value is a value that is assigned to the variable in your script rather than coming dynamically from some external input. 

/*   Variable: A variable is entity which is used to store some value for later use. A variable definition consists of the following three parts:
    i) variable defining keyword (let, const, var).
    ii) name of the variable.
    iii) value given to the variable.
*/

const username = "M. Hassan Farooq";
console.log(username);
console.log();

/* There are somethings that you need to know before going into writing code:
    i) Decleration: Decleration in JS refers to the process of defining a variable in JS. It refers to telling JS 'Hey remember that this variable does exist.'
    ii) Initilization: The first ever assignment of value to a variable in the entire lifespan of the computer program is called initialization. It is a good practice to define and initialize at the same time.
*/

/* Key words(var, let, const): 
    i) let and var are used for defining variables whose value may change or be re-assigned later.
    ii) let has a block scope which means that when you define a variable using the let keyword in a block of code then you can only use it in that block code. This variable is inaccessible anywhere else outside the block. A block of code is any lines of code inside the {} brackets.
    iv) const stands for constant which is used to define variables whose values can't change and remain fixed or constant. If you try to reassign it, it will cause an error: 
        Uncaught TypeError: Assignment to a constant variable. 
*/

/* Naming Variables: 
    i) Variables must start with a letter, underscore or a $ sign. They can't start with a number.
    ii) Variable names should be descriptive. Variable name can't include spaces.
    iii) There are multiple naming convention. Most Developers using JS follow camelCase. In which the first letter of the first word in lowercase however for any other word after the first word it is uppercase.
*/

let numOfStudentsInClass = 40;
console.log(numOfStudentsInClass);
console.log();

/* String: The data type string is used to represent text. It is often denoted by single quotation | double quotation | backticks. Strings allow you to represent and display text. */
let string = "Hello World!";

/* Escape Character: An escape character is a special type of character that tells javascript that "don't take the next character in the way you normally do". To use the escape character just place a back slash (\) before the character you don't want to be displayed normally. */
let str2 = "Hello, what's your name? Is it \"Mike\"?";
console.log(str2);
console.log();

/* Number: The data type number is used to represent number. The number data type can represent numbers between 2^53 - 1 to -(2^53 - 1). It not only can be used to represent decimal number but you can also represent numbers from other base system like hexadecimal, octal, binary. To represent other number systems in the number data type you need to follow the following prefixes:  */

let binaryNumber = 0b0110; // 0b before binary numbers.
console.log(`Representing Binary numbers using the Number data type:`);
console.log(binaryNumber);
console.log();

let octalNumber = 0o10; // 0o before octal numbers.
console.log(`Representing Octal Numbers using the Number data type:`);
console.log(octalNumber);
console.log();

let hexadecimalNumber = 0xA; // 0x before hexadecimal numbers.
console.log(`Representing Hexadecimal Numbers using the Number data type:`);
console.log(hexadecimalNumber);
console.log();

/* BigInt: The BigInt data is used to represent numbers larger than those which you can represent in the number system. It is recognized by the post-fix n. You can't add BigInt numbers to any other number system.  */
let bigInt = 123456789n;
console.log(`BigInt:`); 
console.log(bigInt);
console.log();

/* Boolean: The Boolean data type has two values true and false. It is used to represent the state of a condition. It has only two values and nothing in between.  */
let objectIsDeleted = false;
let lightsAreOn = true;
console.log(`Boolean:`);
console.log(lightsAreOn);
console.log(objectIsDeleted);
console.log();

/* Symbol: The symbol data type was introduced in ES6. It is a relatively new data type in which even if you have two symbols having the same value and name. They will always be different. This is because each symbol has a specific id.  */
console.log(`Symbol:`);

let string1 = "Are strings the same?";
let string2 = "Are strings the same?";
console.log(`Are two strings the same: ${string1 === string2}.`);

let symbol1 = "Lets see if this is the same.";
let symbol2 = "Lets see if this si the same.";
console.log(`Are two symbols the same: ${symbol1 === symbol2}`);
console.log();

/* Undefined: When a variable is declared but no given a value and is not initialized yet. It is known as undefined.  */
console.log(`Undefined:`);
let undefinedVariable;
console.log(undefinedVariable);
console.log();

/* Null: When a variable is given no value purposely it is known as null. A variable is given the value of null intentionally.  */
console.log(`Null:`);
let nullVariable = null;
console.log(nullVariable);
console.log();

/* typeof operator: You can use the typeof operator to check the data type of a particular variable. There are two syntax when you want to use the typeof operator: */
console.log(`typeof() operator:`);
let var1 = "string";
console.log(typeof(var1)); // You can add brackets to front of it and then include you want to check the type of there.
console.log(typeof string); // Or you can just write typeof and enter a white space and then type the name of the variable or thing you want to check the type of.
console.log();

console.table([typeof string, typeof binaryNumber, typeof bigInt, typeof objectIsDeleted, typeof symbol1, typeof undefinedVariable, typeof nullVariable]);