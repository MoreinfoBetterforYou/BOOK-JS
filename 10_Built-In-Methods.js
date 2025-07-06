// Methods: Too put it simply, methods are just functions that are defined inside classes. The main difference between a method and a function is that a function can be defined anywhere inside the script whereas methods are defined inside classes or instances. Methods can also be chained together but this is only true for the methods that return a value.

console.log(`Methods - Example 1`)
let s = "Hello";
console.log(s.concat(' there').toUpperCase().replace('THERE', 'you').concat('. You are amazing!'));
console.log();

// So we have different types of methods in js: 



// Global Methods: Global methods in javascript are methods that you can use anywhere inside your code without needing you to create an object. You can use them directly in your code. Here are some examples of global methods:
    console.log(`Global Methods - Example 1`);

    // isNan(value): This method checks if the value is NaN (Not a Number). It retuns its result in the form of true or false. 
        console.log(`isNaN() - Example 1`);
        let x = 15;
        console.log(isNaN(x)); // Output: false
        console.log();

    // Decoding and Encoding URIS: Before we divide into this concept we first need to understand a few things first: 
        // URI: URI stands for Unifrom Resource Identifier. It is a general term which refers to any string that identifies a resource on the web. An example of a URI is: 

            // https://example.com/page.html
            // urn:isbn:9780131103627
            // mailto:someone@example.com

        // It is further divided into: 

            // URL: URL stands for Uniform Resource Locater. A URL is a type of URI that provides a way to locate a resource on the web (usually using http, https, ftp, etc.). An example of a url is:

                // https://example.com/page.html
                // mailto:someone@example.com
            
            // URN: URN stands for Unifrom Resource Name. A URN identifes a resource on the web by its name but it doesn't provide a way to locate it like how URL does. An example of a URN is: 

                // urn:isbn:9780131103627;

        // Decoding and Encoding: Encoding is the process of converting data from a particular format to another format. While decoding does the opposite it is the process that converts data from one format to another format. 

    // Forexample when you recieve a URI it may contain some spaces which is not in proper format to be used in URL that the browser can understand so we need to encode that data. 

        // Before Encoding: 

            // https://www.example.com/submit?name=maaike van putten

        // After Encoding: 
            // https://www.example.com/submit?name=maaike%20van%20putten

    // But we our Software developers we don't do all of this manually we use code so to encode and decode we have two pairs of encode and decode methods.
    
    // decodeURI() and encodeURI(): Well these two methods don't actually encode and decode. You could actually think of them as fixing broken URL that contain spaces so that they could work on a web browser. They don't encode or decode any other data. 
        console.log(`decodeURI() and encodeURI() - Example 1`);
        let uri = "https://www.example.com/submit?name=maaike van putten";
        let encodedURI = encodeURI(uri);
        console.log(encodedURI); // Output: https://www.example.com/submit?name=maaike%20van%20putten
        let decodedURI = decodeURI(encodedURI);
        console.log(decodedURI); // Output: https://www.example.com/submit?name=maaike van putten
        console.log();

    // decodeURIComponent() and encodeURIComponent(): These two methods do actually encode and decode. Like they encode and decode everything. When we mean everything we mean everything like every special character is the URI: 
        console.log(`decodeUriComponent() and encodeUriComponent`);
        let anotherURI = "https://www.example.com/submit?name=maaike van putten";
        let encodeUriComponent = encodeURIComponent(anotherURI);
        console.log(encodeUriComponent);
        let decodeUriComponent = decodeURIComponent(encodeUriComponent);
        console.log(decodeUriComponent);
        console.log();

    // Parsing Numbers: Parsing numbers refers to converting a value which is usually a string into a numeric value like an integer or a floating point number. 

        // Making Integers with parseInt(): With the parseInt() method a value can be converted into an integer.
            console.log(`parseInt() - Example 1`);
            let numInString = '15';
            let number = parseInt(numInString);
            console.log(`Type of ${number} is ${typeof number}`);
            console.log();

            // You might be thinking what would happen if the parseInt() method is given some other data type or a different type of number like a non-numeric string or a floating point number or a binary number. Well lets see what happens:
                console.log(`parseInt() - Example 2`);
                let floatingPointNumber = 15.5;
                let number2 = parseInt(floatingPointNumber);
                console.log(number2);
                console.log();

                console.log(`parseInt() - Example 3`);
                let binaryNumber = 0b101;
                let number3 = parseInt(binaryNumber);
                console.log(number3);
                console.log();

                console.log(`parseInt() - Example 4`);
                let nonNumericString = 'hello';
                let number4 = parseInt(nonNumericString);
                console.log(number4);
                console.log();

            // You might be thinking why is it giving such results. Well firstly java script unlike other languages does not through an error to get out of a situation but it tries all the abilities to solve the situation. So the parseInt() method does try to convert these data types into an integer but as soon as it reaches a non-integer it stops its function. 

        // Making Floats with parseFloat(): With the parseFloat() method we can convert a value into a floating point number.

            console.log(`parseFloat() - Example 1`);
            let numInString2 = '15.5';
            let num = parseFloat(numInString2);
            console.log(num);
            console.log();

        // You might be wondering what would happen if we tried to convert other data types or different numbers into  a float. Well lets see what happens:
            
            console.log(`parseFloat() - Example 2`);
            let integer = 15;
            let num2 = parseFloat(integer);
            console.log(num2);
            console.log();
        
            console.log(`parseFloat() - Example 3`);
            let binaryNumber2 = 0b110;
            let num3 = parseFloat(binaryNumber2);
            console.log(num3);
            console.log();

            console.log(`parseFloat - Example 4`);
            let nonNumericString2 = 'hello';
            let num4 = parseFloat(nonNumericString2);
            console.log(num4);
            console.log();

        // Just like the parseInt() method the parseFloat() method does try to convert these data types into a float but as soon as it reaches a non-numeric it stops its function.
    
    // Executing Java Script with eval(): eval() is a method inside javascript which allows you to execute any javascript code wriiten inside it in the form of a string. Think of it like your very own compiler. It is typically used with html and css on webpages in input boxes. However doing this can be a bit dangerous as it can cause errors and it also cause your web page or site to crash. It is generally recommended to avoid using eval() and instead use other methods like document.createElement() or innerHTML to create elements on the page.
        console.log(`eval() - Example 1`);
        let code = "console.log('Hello World!');";
        eval(code);
        console.log();




// Array Methods: We have already looked at array methods but here we will discuss some more methods:

    // .forEach(): The forEach method allows us to perform a function on every element in an array. Think of it like for loops. The .forEach() Method has three parameters:
        // 1) element: The current element being processed in the array.
        // 2) index: The index of the current element being processed in the array.
        // 3) array: The array on which the .forEach() method is called.
        
    //  Lets look at example: 
        console.log(`.forEach() Method - Example 1`);
        let Arrays = ['Hi', 'Hello', 'World', 'Java Script'];
        function print(element, index){
            console.log(`${element} at the index of ${index}`);
        }
        Arrays.forEach(print);
        console.log();

    // .filter(): The filter() method is an array method which is used to create a new array with all elements that pass the test implemented by the provided function. It returns the result in the form of boolean values which may either be true or false. If the value is true it is added to the new array if the value is false it is not added to the new array. Think of it like a filter. Lets look at example:
        console.log(`.filter() Method - Example 1`);
        let arrayToBeFiltered = [Object, 'string', 15, true, 'another String'];
        let filteredArray = arrayToBeFiltered.filter(element => typeof element === 'string');
        console.log(filteredArray);
        console.log();

    // Lets look at another example: 
        console.log(`.filter() Method - Example 2`);
        let anotherArrayToBeFiltered = []
        for (let i = 0; i <= 10; i++){
            anotherArrayToBeFiltered.push(i);
        }
        let anotherFilteredArray = anotherArrayToBeFiltered.filter(element => element % 2 === 0);
        console.log(anotherFilteredArray);
        console.log();

    // .every(): The .every() method like the .filter() method is used to check a condition but unlike the filter method which is checks the condition and adds those elements to a new array which return true. The every() method is used to check the whole array at once that if it satisfies a condition or not. You will understand better once you see an example:
        console.log(`.every() Method - Example 1`);
        let arrayToBeTested = ['Hi', 'My', 'Name', 'is', 'Hassan', 'I', 'am', 15];
        console.log(arrayToBeTested.every(element => typeof element === 'string'));
        console.log();

        // This returns false because not every element in the array is the data type string.

    // .copyWithin(): The .copyWithin() method is used to copy a specific element or a sequence of elements in n array to overwrite the existing elements. You might be thinking that we can do the same thing with the .splice() method then why do we use this: 
        console.log(`.copyWithin() Method - Example 1`);
        let myArray = ['apple', 'banana', 'strawberry', 'mango', 'pineapple'];
        myArray.copyWithin(0, 2, 4);
        console.log(myArray);
        console.log();

    // .map(): The .map() method is used to create a new array by applying a function to every element of the original array. It doesn't change the original array, but returns a new one with the results.
        console.log(`.map() Method - Example 1`);
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let squared = numbers.map(element => {return Math.pow(element, 2)});
        console.log(squared);
        console.log();

    // .reduce(): The .reduce() method in Java Script is used to reduce an array to a single value by applying a function on each element from left to right. 
        console.log(`.reduce() Method - Example 1`);
        let ages = [8, 16, 12, 14, 16, 40, 47];
        let sumOfAges = ages.reduce((accumulator, element) => {return accumulator + element}, 0);
        console.log(sumOfAges);
        console.log();




// String Methods:
    
    // .concat(): The .concat() method is used to concatinate two strings. Concatinate means adding two strings together.
        console.log(`.concat() Method - Example 1`);
        let string1 = 'Hello ';
        let string2 = 'World!';
        let concatinatedString = string1.concat(string2);
        console.log(concatinatedString);
        console.log();
    
    // .split(): The .split() method is used to split a string into at some specific character to form an array. 
        console.log(`.split() Method - Example 1`);
        let result = 'Hello World!';
        let arrayMadeFromAString = result.split(' ');
        console.log(arrayMadeFromAString);
        console.log();

    // Lets look at another example:
        console.log(`split() Method - Example 2`);
        let someString = 'mango,apple,banana';
        let anotherArrayMadeFromString = someString.split(',');
        console.log(anotherArrayMadeFromString);
        console.log();

    // .join(): The .join() method is used to combine the elements of an array to form a string:
        console.log(`.join() Method - Example 1`);
        let arrayToBeJoined = ['Hello', 'World!'];
        let joinedString = arrayToBeJoined.join(' ');
        console.log(joinedString);
        console.log();

    // .indexOf(): The .indexOf() method is used to find the index of a particular character in a string:
        console.log(`.indexOf() Method - Example 1`);
        let poem = 'Rosses are Red, Voilets are blue, I learned Java Script and so can you.';
        let indexOfJavaScript = poem.indexOf(`Java Script`);
        console.log(indexOfJavaScript);
        console.log();

    // If the .indexOf() method tries to find a particular character or string that is not in the string then it will return the value of -1.

    // .search(): The.search() method is also used to find the index of a particular character in a string:
        console.log(`.search() Method - Example 1`);
        let poem2 = 'Rosses are Red, Voilets are blue, I learned Java Script and so can you.';
        let indexOfJavaScript2 = poem2.search(`Java Script`);
        console.log(indexOfJavaScript2);
        console.log();

    // The main difference between the .search() method and the .indexOf() method is the fact that the indexOf() method works only with strings while the search() method works with both strings and patterns.

    // .lastIndexOf(): The .lastIndexOf() method is used to find the index of the last ever occurence of a particular character in a string.
        console.log(`.lastIndexOf() Method - Example 1`);
        let poem3 = 'Rosses are Red, Voilets are blue, I learned Java Script and so can you.';
        let lastIndexOfJavaScript = poem3.lastIndexOf(`Java Script`);
        console.log(lastIndexOfJavaScript);
        console.log();

    // .charAt(): The .charAt() method is used to get the character at a particular index in a string:
        console.log(`.charAt() Method - Example 1`);
        let poem4 = 'Rosses are Red, Voilets are blue, I learned Java Script and so can you.';
        let characterAtIndex = poem4.charAt(2);
        console.log(characterAtIndex);
        console.log();

    // If you try to access an index that is greater than the length of the actual string then it will return an empty string.
        console.log(`.charAt() Method - Example 2`);
        let poem5 = 'Rosses are Red, Voilets are blue, I learned Java Script and so can you.';
        let characterAtIndex2 = poem5.charAt(100);
        console.log(characterAtIndex2);
        console.log();

    // .slice(): The .slice() method is used to create substrings. It doesn't alter the original string but creates two smaller substrings. Lets look at an example:   
        console.log(`.slice() Method - Example 1`);
        let shortString = 'Hi you';
        let slice1 = shortString.slice(0, 3);
        console.log(slice1);
        let slice2 = shortString.slice(3);
        console.log(slice2);
        console.log();

    // .replace(): As its name suggests the .replace() method is used to replace a specific character or word in a string with some other character or string. But it is imporant to keep in mind that this method only replaces the first ever occurence of a character. Lets look at an example:
        console.log(`.replace() Method - Example 1`);
        let anotherPoem = 'Rosses are red, Voilets are blue. I learned Python and so can you.';
        let fixedPoem = anotherPoem.replace('Python', 'Java Script');
        console.log(fixedPoem);
        console.log();
    
    // .replaceAll(): The .replaceAll() method is used to replace every occurence of a character or word in a string with another character or word. Lets look at an example: 
        console.log(`.replaceAll() Method - Example 1`);
        let stringDate = '6/21/2025';
        let fixedDate = stringDate.replaceAll('/', '-');
        console.log(fixedDate);
        console.log();

    // .startsWith(): The .startsWith() method is used to check if a particular string starts with a particular character or word. It returns true if the condition is true and returns false if the condition is false. Lets look at an example:
        console.log(`.startsWith() Method - Example 1`);
        let meString = 'Hi, how are you?';
        console.log(meString.startsWith('Hi'));
        console.log();
    
    // .endsWith(): The .endsWith() method is used to check if a paraticular string ends with a particular character or word. It return true if the condition is true and returns false if the condtion is false. Lets look at an example:  
        console.log(`.endsWith() Method - Example 1`);
        let alsoMeString = 'Hi, How are you? What is your name?';
        console.log(alsoMeString.endsWith('?'));
        console.log();




// Number Methods: 

    // isFinite(): As the name suggests you can tell that the isFinite() method is used to check if a particular number or data type is finite or not. It returns false for NaN, undefined and Infinity and any other data type except Number. It returns true for all the other values. Lets look at an Example:
        console.log(`isFinite() Method - Example 1`);
        let someNumber = 16;
        console.log(isFinite(someNumber));
        console.log();

    // Number.isInteger(): The isInteger() method is used to check if a particular data type is an integer or not. It returns true if it is an integer and false if it is not an integer. But there is a slight twist t he isInteger() method has not yet been made global so we need to use it with the Number object. Lets look at an Example:
        console.log(`isInteger() Method - Example 1`);
        let someOtherNumber = 15.5;
        console.log(Number.isInteger(someOtherNumber));
        console.log();

    // .toFixed(): The .toFixed() method is used to specify the number of decimal places we want in a particular number. Lets look at an example:
        console.log(`.toFixed() - Example 1`);
        let PI = Math.PI;
        console.log(PI.toFixed(10));
        console.log();

    // .toPrecise(): The .toPrecise() method is used to specify the number of precision you want. Think of it like the Math.round() function but with the ability to specify the number of digits you want it to be precise to. Lets look at an example:
        console.log(`.toPrecise() Method - Example 1`);
        let a = 1.23456;
        console.log(a.toPrecision(4));
        console.log();




// Math Methods:
    // Math.max(): The Math.max() method is used to find the largest number in a given array. Lets look at an example:
        console.log(`Math.max() Method - Example 1`);
        let arrayContainingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9];
        let maximumNumber = Math.max(...arrayContainingNumbers);
        console.log(maximumNumber)
        console.log();
    
    // Math.min(): The Math.min() method is used to find the smallest number in a given array. Lets look at an example:
        console.log(`Math.min() Method - Example 1`);
        let arrayContainingNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9];
        let minimumNumber = Math.min(...arrayContainingNumbers2);
        console.log(minimumNumber);
        console.log();
    
    // Math.sqrt(): The Math.sqrt() method is used to find the square root of a particular number. Lets look at an example:
        console.log(`Math.sqrt() Method - Example 1`);
        let square = 256;
        let squareRoot = Math.sqrt(square);
        console.log(squareRoot);
        console.log();

    // Math.pow(): The Math.pow() method is used to raise a particular number by a particular power and return its result. Lets look at an example:
        console.log(`Math.pow() Method - Example 1`);
        let power = 7;
        let numberToBeRaised = 6;
        let answer = Math.pow(numberToBeRaised, power);
        console.log(answer);
        console.log();
    
    // Math.round(): The Math.round() method is used number to the nearest whole number. Lets look at an example:
        console.log(`Math.round() Method - Example 1`);
        let roundNumber = Math.round(6.789);
        console.log(roundNumber);
        console.log();

    // Math.trunc(): The Math.trunc() method is used to remove the decimal part from a particular number.
        console.log(`Math.trunc() Method - Example 1`);
        let wholeNumber = Math.trunc(1.23456789);
        console.log(wholeNumber);
        console.log();


        
// Date Methods: 
            
    // 1. getFullYear(): The getFullYear() method returns the year of the specified date according to local time. It returns a four-digit number representing the year.
        const date = new Date();
        const year = date.getFullYear();
        console.log("getFullYear() method:");
        console.log(`The year is: ${year}`);
        console.log();

    // 2. getDate(): The getDate() method returns the date (1-31) for the specified date according to local time.
        const dateOfTheMonth = date.getDate();
        console.log("getDate() method:");
        console.log(`The date is: ${dateOfTheMonth}th`);
        console.log();

    // 3. getMonth(): The getMonth() method returns the month (0-11) for the specified date according to local time. Note: The month is 0-indexed, meaning January is 0, February is 1, and so on.
        const month = date.getMonth();
        console.log("getMonth() method:");
        console.log(`The month is: ${month}`);
        console.log();

    // 4. getDay(): The getDay() method returns the day of the week (0-6) for the specified date according to local time. Note: The day is 0-indexed, meaning Sunday is 0, Monday is 1, and so on.
        const day = date.getDay();
        console.log("getDay() method:");
        console.log(`The day is: ${day}`);
        console.log();

    // 5. getHours(): The getHours() method is used to get the Hours from the Date() object.
        const Hours = date.getHours();
        console.log("getHours() method:");
        console.log(`The Hour is: ${Hours}hr.`);
        console.log();

    // 6. getMiliseconds(): The getMiliSeconds() method is used to get the number of miliseconds from the Date() object.
        const Miliseconds = date.getMilliseconds();
        console.log("getMiliseconds() method:");
        console.log(`The Miliseconds is: ${Miliseconds}ms`);
        console.log();

    // 7. getMinutes(): The getMinutes() methods is used to get the number of minutes from the Date() object.
        const Minutes = date.getMinutes();
        console.log("getMinutes() method:");
        console.log(`The Minutes is: ${Minutes}min`);
        console.log();

    // 8. getSeconds(): The getSeconds() method is used to get the number of seconds from the Date() object.
        const Seconds = date.getSeconds();
        console.log("getSeconds():");
        console.log(`The Seconds is: ${Seconds}s`);
        console.log();

    // 9. getTime(): The getTime() method is used to get the number of miliseconds that have passed since the Unix Epoch. 
        const numberOfMilisecondsSinceUnixEpoch = date.getTime();
        console.log("getTime() method:");
        console.log(`The number of miliseconds passed since the Unix Epoch are: ${numberOfMilisecondsSinceUnixEpoch}ms.`);
        console.log();

    // 10. getTimezoneOffset(): The getTimezoneOffset() method is used to get the offset between the users computer's local time and the UTC international time. Note: It is important to remember the fact the offset can be both positive and negative based upon the location of the place where you reside. Another important thing to note is that it will give the offset in minutes.
        const Offset = date.getTimezoneOffset();
        console.log("getTimezoneOffset():");
        console.log(`The offset between Pakistan Standard Time (PST) and UTC is: ${Offset}min.`);
        console.log();

    // 11-18: These are all just the same methods we learn for local time but these ones are specifically for UTC. I will list the names of them they do jus the same thing. 
        console.table(["getUTCDate()", "getUTCFullYear()", "getUTCDay()", "getUTCHours()", "getUTCMiliseconds()", "getUTCMinutes()", "getUTCMonth()", "getUTCSeconds()"]);

    // 19-33: There are all setters. They are used to set a specific date or time. These are very much self explamatory and aren't that hard all you need is just some common sense. I won't be telling you everything about all of these I'll only provide you examples to demonstrate how they work.
        let setters = ['date.setDate(1)', 'date.setFullYear(2025)', 'date.setHours(12)', 'date.setMilliseconds(50)', 'date.setMinutes(59)', "date.setMonth(0)", 'date.setSeconds(59)', 'date.setTime(2000000000)', 'date.setUTCDate(1)', 'date.setUTCFullYear(2025)', 'date.setUTCHours(7)', 'date.setUTCMilliseconds(50)', 'date.setUTCMinutes(59)', 'date.setUTCMonth(0)', 'date.setUTCSeconds(59)'];
        console.table(setters);

    // 34: toDateString(): The toDateString() method is used to convert the Date object into a human readable string of the date.
        let humanReadableDate = date.toDateString();
        console.log("toDateString() method:");
        console.log(`The date object in human readable form is: ${humanReadableDate}`);
        console.log();

    // 35. toISOString(): The toISOString() method is used to convert the date object into the standard ISO 8601 format which is associated with UTC(Coordinated Universal Time).
        let isoString = date.toISOString();
        console.log("toISOString() method:");
        console.log(`Date in ISO 8601 format is: ${isoString}`);
        console.log();

    // 36. toLocaleDateString(locale, options): The toLocaleDateString(locale, options) method returns the date portion of the date object formated according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit"
        };
        let localeDateString = date.toLocaleDateString(["en-PK"], options);
        console.log("toLocaleDateString(locale, options)");
        console.log(`The Date() object formatted with the toLocaleDateString() method is: ${localeDateString}`);
        console.log();

    // 37. toLocaleString(locale, options): The toLocaleString(locale, options) method return the Date() object formated according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
        const localeString = date.toLocaleString("en-PK", options);
        console.log("toLocaleString(locale, options) method:")
        console.log(`The Date() object formatted with the toLocaleString(locale, options) method is: ${localeString}`);
        console.log();

    // 38. toLocaleTimeString(locale, options): The toLocaleTimeString(locale, options) method returns the time portions of the Date() object formatted according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
        const localeTimeString = date.toLocaleTimeString("en-PK", options);
        console.log("toLocaleTimeString(locale, options), method:");
        console.log(`The Date() object formatted with the toLocaleTimeString(locale, options) method is: ${localeTimeString}`);
        console.log();

    // Another important thing is Date Arithmetic which allows you to easily add or subtract date together.
        const date1 = new Date(2025, 5, 21);
        const date2 = new Date(2026, 7, 30);
        const differenceBetweenDatesInMilliseconds = date2 - date1;
        const differenceBetweenDatesInSeconds = (differenceBetweenDatesInMilliseconds / 1000);
        const differenceBetweenDatesInMinutes = (differenceBetweenDatesInMilliseconds / 60000);
        const differenceBetweenDatesInHours = (differenceBetweenDatesInMilliseconds / 3600000);
        const differenceBetweenDatesInDays = (differenceBetweenDatesInHours / 24);
        const differenceBetweenDatesInMonths = (differenceBetweenDatesInDays / 30.4375);
        console.table([`${differenceBetweenDatesInMilliseconds} ms`, `${differenceBetweenDatesInSeconds} s`, `${differenceBetweenDatesInMinutes} min`, `${differenceBetweenDatesInHours} hr`, `${differenceBetweenDatesInDays} days`, `${differenceBetweenDatesInMonths.toFixed(2)} months`]);