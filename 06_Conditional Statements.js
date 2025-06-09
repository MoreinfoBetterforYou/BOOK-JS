// In JavaScript If and Else statements are called Conditional statements as they are used to evaluate a condition that whether a given condition is true or false. If and Else statements are the discions that make a computer logicallly think like we humans do if you don't use these in your code your code will do the same thing every time you run it.

// The basic structure for an if and else statement is:
    let condition;

        if (condition){
            // Some code will be executed
        }
        else{
             // Some other code will be executed.
        }
    

// Here is a real life example lets say you have to decide whether to take an umberalla outside or not. Your brain would think something like this.
    console.log(`If Else Statements - Example 1`);
        let isRaining = true;

        if (isRaining === true){
            console.log(`Taking my umberalla when I need to go outside`);
        }
        else{
            console.log(`I can leave my umberalla at home.`);
        }
    console.log();

// Here is another example:
    console.log(`If Else Statements - Example 2`);

        let hobby = "dancing";

        if (hobby === "coding"){
            console.log(`I love coding too!`);
        }
        else{
            console.log(`Can you teach me that?`);
        }
    console.log();

// Else If Statements: In Java Script and many other programming language else if statements are used to check multiple conditions in a sequence. They allow you to add more desicion branches in your if and else chain. The else if works if the condition in the if statement is false and the condition in the else if statement is true.
    let age = 10;
    let cost = 0;
    let message;
    console.log(`Else If Statements - Example 1`);

    if (age < 3){
        cost = 0;
        message = `Acces under the age of 3 is free`;
    }
    else if(age >= 3 && age < 12){
        cost = 5;
        message = `With child discount the fee is 5 dollars.`;
    }
    else if(age >= 12 && age < 65){
        cost = 10;
        message = `Regular ticket is 10 dollars.`;
    }
    else{
        cost = 7;
        message = `A ticket is 7$`;
    }
    console.log(message);
    console.log(`Your total cost is: ${cost}`);
    console.log();

// Ternary Operator: The ternary operator is called the ternary operator because it consists of thre operators. The ternary operator is a short hand for the if and else statement. It assigns value to a varaible based upon the evaluation of a condition.
    let ageOfUser = 15;
    let allowanceMessage = ageOfUser < 12? `You are not old enough to recieve allowance`: `You are old enough to recieve allowance.`;
    console.log(`Ternary Operator - Example 1`);
    console.log(allowanceMessage);
    console.log();

// Switch: The switch statement is also another way to perform different actions based on different conditions. It is especially useful when yu have many possible different values of a given variable and when you want to execute different code for each of its value. The basic structure for a switch is like this:

    let expression;
    let value1;
    let value2;
    let value_n;

    switch(expression){
        case value1:
            // Some code you want to execute.
            break;
        case value2:
            // Some other code you want to execute.
            break;
        case value_n:
            // Some code you want to execute.
            break;
        default:
            // Some code that will occur if none of the cases are true;
            break;
    }

// Lets look at some Example: 
    let activity = "Zuhr";
    console.log(`Switch - Example 1`);

    switch(activity){
        case "Fajar":
            console.log(`The time is 4:30 am.`);
            break;
        case "Zuhr":
            console.log(`The time is 1:30 pm.`);
            break;
        case "Asar":
            console.log(`The time is 5:30 pm.`);
            break;
        case "Maghrib":
            console.log(`The time is 7:14 pm.`);
            break;
        case "Isha":
            console.log(`The time is 9:15 pm.`);
            break;
        default:
            console.log(`The time is not defined.`);
            break;
    }
console.log();

// Combining Cases: Sometimes when dealing with a value you would the program to the same thing for two different values. In if statements you would use the Or locial Operator (||). But in switches you can just combine the case.Lets see an example:

    console.log(`Combining Cases in Switch - Example 1`);
    let grade = "B";
    switch(grade){
        case `F`:
        case `D`:
            console.log(`You have failed.`);
            break;
        case `C`:
        case 'B':
            console.log(`Good performance. Work harder.`);
            break;
        case 'A':
            console.log(`Excellent work. Keep up the good pace.`);
            break;
        default:
            console.log(`I don't know what that grade is.`);
            break;
    }

console.log();

// If you want to write the same program in if statements you would use the following code:
    if(grade === 'F' || grade === "D"){
        console.log(`You have failed.`);
    }
    else if(grade === "C" || grade === "B"){
        console.log(`Good perfomance. Work harder.`);
    }
    else if(grade === "A"){
        console.log(`Excellent Work. Keep up the good pace.`);
    }
    else{
        console.log(`I don't know what grade that is.`);
    }