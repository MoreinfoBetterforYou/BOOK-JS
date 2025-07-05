# JavaScript Type Conversion and Operators Guide 🔄

## 🔄 Type Conversion Overview

JavaScript allows you to change the data type of its variables. It allows you to convert from one data type to another. There are two types of type conversion:

## 🤖 Type Coercion (Implicit Conversion)

When javascript automatically converts one data type to the other for you behind the scenes. It is known as type coercion or Implicit Type Conversion.

```javascript
let num1 = "6" + 9; // In this case javascript will automatically convert 9 into a string and then join the both using string concatenation.
console.log(`Implicit Type Conversion | Type Coercion: `);
console.log(num1); // This will print 69 not 15. Keep that in mind.
console.log();
```

## 🎯 Type Casting (Explicit Conversion)

When the developer explicitly converts the data manually it is known as Type Casting or Explicit Type Conversion.

```javascript
let num2 = Number("6") + 9; // In this case the developer first converted the string "6" to the number 6 and then adds it to 9.
console.log(`Explicit Type Conversion | Type Casting: `);
console.log(num2); // This will print 15.
console.log();
```

## 🔧 Conversion Methods

There are three conversion methods in JS. These are: String(), Number(), Boolean().

```javascript
let toNumber = "6";
toNumber = Number(toNumber);
console.log(`Number():`);
console.log(toNumber);

let toStrings = "8";
toStrings = Number(toStrings);
console.log(`String():`);
console.log(toStrings);

let toBoolean = "";
toBoolean = Number(toBoolean);
console.log(`Boolean():`);
console.log(toBoolean);
console.log();
```

## 🤔 Interesting Conversion Cases

### 1️⃣ Non-Numeric String to Number

When you convert a string containing letters to number it gives the value of NaN (Not a Number). This happens because the string "hello" contains no numeric value. When the Number() function tries to convert the string "hello" to a number it fails to do so and it returns NaN.

```javascript
let word = "hello";
let converted = Number(word);
console.log(`Non-Numeric String to Number: `);
console.log(converted); // Output: NaN.
console.log();
```

### 2️⃣ Undefined to Number

When you convert a variable that is undefined to a number it will also give the value of NaN. This happens because the variable value can't be converted into a valid numbers so it return NaN.

```javascript
let value;
let convertedtoNumber = Number(value);
console.log(`Undefined to Number: `);
console.log(convertedtoNumber); // Output: NaN.
console.log();
```

### 3️⃣ Null to Number

When you convert a variable with the value of null to a number using the Number() function. It gives the value of 0. This happens because of the specific conversion rules that were set in ECMA script. Like in the Number system 0 means nothing in the same way in programming null means nothing. So thats why js converts null to 0 when you use the Number() function.

```javascript
let nullvalue = null;
let convertedFromNullToNumber = Number(nullvalue);
console.log(`Null to Number: `);
console.log(convertedFromNullToNumber); // Output: 0.
console.log();
```

### 4️⃣ Empty String to Number

When you convert a variable having the value of an empty string to a number using the Number() function. It gives the value of 0. This happens because they empty string is considered nothing. JS sees that the closest Number associated with the value of nothing it is 0.

```javascript
let emptystring = "";
let convertedFromEmptystringToNumber = Number(emptystring);
console.log(`Empty String to Number: `);
console.log(convertedFromEmptystringToNumber);
console.log();
```

### 5️⃣ Boolean to Number

When you convert a boolean value like true or false to a number using the Number() function. It gives the value of 1 for true and value of 0 or false. This is because just like computer use the binary number system in which 0 represents off or false state and 1 represents on or true state. JS works upon the same concept.

```javascript
let booleanValue1 = true;
let booleanValue2 = false;
let convertedFromBolleanValue1ToNumber = Number(booleanValue1);
let convertedFromBolleanValue2ToNumber = Number(booleanValue2);
console.log(`Boolean Value to Number: `);
console.log(`True becomes: ${convertedFromBolleanValue1ToNumber}`);
console.log(`False becomes: ${convertedFromBolleanValue2ToNumber}`);
console.log();
```

### 6️⃣ String to Boolean

When you convert any string to a boolean it gives a boolean value either true or false.

```javascript
let emptystring2 = "";
let non_emptystring = "Hi";
let convertedFromStringtoBoolean = Boolean(emptystring2);
let convertedFromStringtoBoolean2 = Boolean(non_emptystring);
console.log(convertedFromStringtoBoolean);
console.log(convertedFromStringtoBoolean2);
console.log();
```

## ⚡ JavaScript Operators

JavaScript operations (or operators) are special symbols or keywords that are used to perform operations on operands (values and variables). They are a fundamental component of any programming language. There are 5 types of operators.

## 🧮 Arithmetic Operators

Arithmetic operators are used to perform arithmetic calculations. The arithmetic operator is only defined for numeric values.

### ➕ Addition Operator

The addition operator is used to add to numbers or variables together.

```javascript
let numberOfLinesInJSFile = 105;
let numberOfLinesInTxTFile = 42;
let totalLines = numberOfLinesInJSFile + numberOfLinesInTxTFile;
console.log(`Addition '+':`);
console.log(totalLines);
console.log();
```

You can also use the addition operator '+' for concatenating strings together.

```javascript
let firstString = "You are ";
let secondString = "15 years old.";
let concatenatedString = firstString + secondString;
console.log(`String Concatenation: `);
console.log(concatenatedString);
console.log();
```

### ➖ Subtraction Operator

The subtraction operator is used to subtract two numbers or variables. You can't use the subtraction operator to subtract two strings from each other. This is because these operators are only defined numbers not any other data type.

```javascript
let differenceBetweenLines = numberOfLinesInJSFile - numberOfLinesInTxTFile;
console.log(`Subtraction '-':`);
console.log(differenceBetweenLines);
console.log();

let subtractingStrings = firstString - secondString;
console.log(`Subtracting two strings: `);
console.log(subtractingStrings); // Output: NaN
console.log();
```

### ✖️ Multiplication Operator

The multiplication operator is used to multiply two numbers or variables with each other. it is denoted by the '*'. Unlike other languages javascript doesn't allow you to multiply strings and numbers in the way they do.

```javascript
let tax = 0.1;
let total = 100;
let totaltax = tax * total;
console.log(`Multiplication Operator "*": `)
console.log(totaltax); // Output: 10
console.log();

let stringToBeMultipied = "Multoply me!";
let numberOfTimesToBeMultiplied = 6;
let finalResult = stringToBeMultipied * numberOfTimesToBeMultiplied;
console.log(`Trying to Multiply a number with a string: `);
console.log(finalResult); // Output: NaN.
console.log();
```

### ➗ Division Operator

Another straight forward operator is the division operator. It is used to divide two numbers or variables with each other. It is denoted by the '/'.

```javascript
let obtainedMarks = 96;
let totalMarks = 100;
let percentage = obtainedMarks / totalMarks * 100;
console.log(`The Division operator "/": `);
console.log(percentage);
console.log();
```

### 📈 Exponentiation Operator

Exponentiation means raising a certain base to the power of the exponent. For exponentiation in javascript we use the ** operator.

```javascript
let valueOfBase = 15;
let valueOfExponent = 3;
let finalValue = 15**3;
console.log(`Exponentiation "**": `);
console.log(finalValue);
console.log();
```

## 🔢 Unary Operators

Unary operators are the operators which only increment or decrement a single variable or value. We only need one operand for these operators, that is why we called them unary operators. There are two main unary operators:

### ⬆️ Increment Operator (++)

The increment operator is used to increase the value of a variable by one and store the result back into the variable.

```javascript
let addOneToMe = 3;
addOneToMe++;
console.log(`Increment operator "++": `);
console.log(addOneToMe);
console.log();
```

### ⬇️ Decrement Operator (--)

The decrement operator is used to decrease the value of a variable by one and store the result back into the variable.

```javascript
let subtractOneFromMe = 4;
subtractOneFromMe--;
console.log(`Decrement Operator "--": `);
console.log(subtractOneFromMe);
console.log();
```

## 🔄 Prefix vs Postfix

There are two ways of using the unary operators we call them prefix and postfix.

### 📍 Postfix

Postfix refers to writing the unary operator after the actual operand. The postfix gets executed after sending the variable through. So like in easy words when you use the postfix unary increment operator it increases the value for later use.

```javascript
let nr = 2;
console.log(`Postfix: `);
console.log(nr++);
console.log(nr);
console.log();
```

### 📍 Prefix

Prefix refers to writing the unary operator before the actual operand. The prefix operator gets executed before sending the actual variable through it.

```javascript
let nr2 = 2;
console.log(`Prefix: `);
console.log(++nr2);
console.log(nr);
console.log();
```

## 📝 Assignment Operators

Assignment operators in Javascript are used to assign values to variables. The most basic assignment operators is the equal sign (=). Assignment operators are divided into three main types:

### 🎯 Basic Assignment Operator (=)

Used to assign value on the right to the variable on the left.

```javascript
let x = 10; // x is now 10.
```

### 🔗 Compound Assignment Operators

Compound Assignment Operators are used as a short hand for the basic assignment operator. There are various compound assignment operators out there.

```javascript
let y;
y += 6; // y is now 6.
y -= 6; // y is now 0.
y *= 6; // y is now 0.
y /= 6 // y is now 0.
y %= 3; // y is now NaN.
y **= 2; // y is now NaN.
console.log(y); // Output: NaN.
```

### 🔤 Assignment Operators with Other Data Types

Assignment operators can only be used with strings.

```javascript
let string = "Hello";
string += " World!";
console.log(string); // Output: Hello World!.
console.log();
```

## ⚖️ Comparison Operators

Comparison operators are used to compare two values. The result of the comparison operator is given in boolean value which may either be true or false. These operators are important for making decisions in your code.

### 🟰 Loose Equality (==)

The loose equality operator consists of two equal signs. It checks if both the values are equal even if the data type is different.

```javascript
console.log(`Loose Equality Operator '==' :`);
console.log(5 == "5"); // Output: true because their values are same even if the data type is different.
console.log();
```

### 🟰 Strict Equality (===)

The strict equality operator consists of three equal signs. It checks if both the values are equal and there data types are also equal. Like both belong to the same data type or not.

```javascript
console.log(`Strict Equality Operator '===' :`);
console.log(5 === "5"); // Output: false because their data types are different one is a string and other is a number.
console.log();
```

### ❌ Inequality (!= and !==)

There are two types of inequality operators just like the equality operator. The != with an exclamation mark and a single equal sign checks if the values of both are different or not. It doesn't check the data type. The !== with an exclamation mark and a double equal sign checks if the values of the both are different and also their data types are different too.

```javascript
console.log(`Inequality Operator (!= and !==) :`);
console.log(5 != "7"); // Output: true because 5 is not equal to 7 it only cares about the value not about the data type.
console.log(5 !== "5"); // Output: true because even if both have the same value their data types are different from each other.
console.log();
```

### ⬇️ Less Than (<)

The less than operator returns true if the right hand side value is smaller than the left hand side value.

```javascript
let lessThanOperator = 5 < 7;
console.log(`Less than Operator (<): `);
console.log(`Is 5 < 7: ${lessThanOperator}`);
console.log();
```

### ⬆️ Greater Than (>)

The greater than operator returns true if the right hand side value is greater than the left hand side value.

```javascript
let greaterThanOperator = 7 > 5;
console.log(`Greater than Operator (>): `);
console.log(`Is 7 > 5: ${greaterThanOperator}`);
console.log();
```

### ⬇️ Less Than or Equal To (<=)

The Less than or Equal to operator returns true if the right hand side value is less than or equal to the left hand side value.

```javascript
let lessThanOrEqualToOperator = 4 <= 5;
console.log(`Less than or Equal to Operator (<=): `);
console.log(`Is 4 <= 5: ${lessThanOrEqualToOperator}`);
console.log();
```

### ⬆️ Greater Than or Equal To (>=)

The Greater than or Equal to Operator returns true if the right hand side value is greater than or equal to the left hand side value.

```javascript
let greaterThanOrEqualToOperator = 5 >= 4;
console.log(`Greater than or Equal to Operator (>=): `);
console.log(`Is 5 >= 4: ${greaterThanOperator}`);
console.log();
```

## 🧠 Logical Operators

Logical Operators are used whenever you want to check two conditions in one, or you need to negate a condition. There are various types of logical operators:

### 🔗 And Logical Operator (&&)

The And Logical Operator is used to combine to conditions with each other. It returns true if both the conditions are true and returns false if only one of the condition is true and the other one is false. It is represent by &&.

```javascript
let a = 15;
let b = 14;
let c = 12;
let andLogicalOperator = a > b && b > c;
console.log(`The And Logical Operator (&&): `);
console.log(`Is a > b && b > c: ${andLogicalOperator}`);
console.log();
```

### 🔀 Or Logical Operator (||)

The Or logical operator is represented by ||. The Or logical operator returns true if either one of the two conditions is true.

```javascript
let orLogicalOperator = a > b || b < c;
console.log(`The Or Logical Operator (||): `);
console.log(`Is a > b || b > c: ${orLogicalOperator}`);
console.log();
```

### ❗ Not Logical Operator (!)

The Not Logical Operator is used to negate a condition. It returns the opposite of the actual value so if the result is false the not logical operator will return true.

```javascript
console.log(`The Not Logical Operator (!): `);
console.log(`Is !(false) = ${!false}`);
console.log();
```