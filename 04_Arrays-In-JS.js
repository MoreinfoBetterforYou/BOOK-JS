// Arrays: In JavaScript arrays are special objects that are used to store multiple values in a single variable. You can also store different data types withing an array. 

// Well if you would go to youtube or follow any traditional tutorial you would see that they would tell you that an array can be created using 2 ways:

    // 1) Using the Array() Object:
        const arrayUsingObject = new Array("Toyota", "Tesla", "Volkswagon", "Ferrari");
        console.log(`Creating an array using the Array() object:`);
        console.log(arrayUsingObject);
        console.log();

    // 2) The OG way:
        const arrayUsingTheOgWay = ["Toyota", "Tesla", "Volkswagon", "Ferrari"];
        console.log(`Creating an array using the OG way:`);
        console.log(arrayUsingTheOgWay);
        console.log();

// Now well you might be thinking both did the same thing then why is the book saying it is bad to do it well lets see this example:

    const arr = new Array(10);
    console.log(`The array using the Array() Object:`);
    console.log(arr);
    console.log();

    const arr2 = [10];
    console.log(`The array using the OG way:`);
    console.log(arr2);
    console.log();

// Now you might be thinking that both create an array with the value of 10 but no my friend the Array() object will create 10 undefined values.

// You can have an array with different data types at once:
    const arrContainingDifferentDataTypes = ["string", 15, true];
    console.table([typeof arrContainingDifferentDataTypes[0], typeof arrContainingDifferentDataTypes[1], typeof arrContainingDifferentDataTypes[2]]);

// Another fun fact is that when you declare an array using the const keyword you can still change the values of the array but you can't change the array itself.
    const arrUsingConstKeyword = ["hi there"];
    arrUsingConstKeyword[0] = ["new value"];
    console.log(arrUsingConstKeyword[0]);
    console.log()

    // But if you try to this it will give an error: 
    // arrUsingConstKeyword = ["nope, you are overwriting an array"]; TypeError: Assignment to constant variable.

// Accessing elements within an array: JavaScript allows us to access different elements within an array. You can access an element by using its index. Index starts from 0. All you need to do to access any specific element within an array is to type the array name and then put rectangular bracketers in front of it and write the index of the element you want to access in the rectangular brackets.
    let cars = ["Toyota", "Tesla", "Honda", "Buggati", "Ferrari", "Lambroghini"];
    console.log(`Accessing elements within an array: `);
    console.log(cars[1]);
    console.log();

// Overwriting elements within an array: You can overwrite elements within an array. This can be done by accessing a certain element using the Index and assigning it a new value.
    cars[5] = "BMW";
    console.log(`Overwriting elements within an array.`);
    console.log(cars);
    console.log();
    
// Length property: The length property of an array allows us to find the number of elements within an array. It is a property of the array object and can be accessed using the dot notation.
    const noOfCars = cars.length;
    console.log(`Length Property of Arrays: `);
    console.log(`The number of cars in the array is: ${noOfCars}`);
    console.log();

// You have to keep in mind that the length property will always return the number of elements in the array which will always be one greater than the index of the last element in the array. So if you want to access the index of the last element in the array you can do it by using the length property.
    const lastIndexOfArray = cars.length - 1;
    console.log(`The last index of the array is: ${lastIndexOfArray}`);
    console.log();

// In JS we have different array method like the .length which we discussed earlier. Here we will be discussing some other methods for arrays:
    // 1) .push(): The .push() method is used to add elements to the end of an array.
        console.log(`.push() method in JS: `); 
        const family = ["Father", "Mother", "Brother", "Sister", "Little Brother"];
        console.log(`The number of people in the family ${family} are: ${family.length}`);
        family.push("Baby Boy");
        console.log(`A new baby was born in the family ${family}. Now there are ${family.length} members in the family.`);
        console.log();

    // 2) .splice(): The .splice() method changes the contents of an array allowing you to add replace, or remove elements from any where within the array. The .splice() method some attributes, the first number you type in the bracket is the starting index from where it will start to splice, then the number of type is the number of elements you want to delete from the index and then is the string or number yoy want to add or replace in the array. 

        console.log(`.splice() method in JS: `);
        const groceryList = ["wheat", "milk", "eggs", "rice", "oil", "nuggets"];
            // Removing elements:
                groceryList.splice(0,1);
                console.log(`Removing elements using the .splice() method in JS: `);
                console.log(groceryList);
                console.log();
            // Adding Elements: 
                groceryList.splice(5,0, "biscuits");
                console.log(`Addings elelemts using the .splice() method in JS: `);
                console.log(groceryList);
                console.log();
            // Replace Elements: 
                groceryList.splice(1,1, "condensed milk");
                console.log(`Replacing elements using the .splice() method in JS: `);
                console.log(groceryList);
                console.log();

    // 3) .pop(): The .pop() method is used to delete the last element from an array. 
        const top5Posisitions = [`MBI`, "HM", "MHF", "HA", "MIM"];
        top5Posisitions.pop();
        console.log(`The .pop() method in JS: `);
        console.log(`The top 4 positions are: ${top5Posisitions}`);
        console.log();
    
    // 4) .shift(): The .shift deletes an element from the start of an array. 

        // Lets say you were in a race and then magically the person at the first was caught cheating and he was disqualified so now you rank 5th now.
            const ranking = [1, 2, 3, 4, 5];
            ranking.shift();
            console.log(`The .shift() method in JS: `);
            console.log(`The first position was disqualified so the rest are: ${ranking}`);
            console.log();
    
    // 5) .find(): The .find() method is used to find a specific element in an array and uses a function to search for the first element that matches the call back of the function.
        const duckDuckGoose= ["duck", "duck", "duck", "duck", "goose"];
        const imposter = duckDuckGoose.find(e => e === "goose");
        console.log(`The .find() method: `);
        console.log(`The imposter in ${duckDuckGoose} is: ${imposter}`);
        console.log();
    
    // 6) .indexOf(): The indexOf() method is used to find the index of a specific element in an array. Inside the parrenthesis of the method you type the element you want to find. 
        const rollNumbers = ["MBI", "HM", "MHF", "HA", "MIM", "MRI"];
        console.log(`The .indexOf() method: `)
        console.log(`The Roll Number of MRI is: ${rollNumbers.indexOf("MRI") + 1}`);
        console.log();
    
    // 7) .lastIndexOf(): Lets say you had an array which had 2 identical elements and you want to find the index of the last occurence of that element in that case you will use the .lastIndexOf(). The .lastIndexOf() method returns the index of the last every occurence of a specific element in an array.
        const animalsInOurHouse = ["dog", "cat", "paroot", "dog", "kitten"];
        console.log(`The .lastIndexOf() method: `);
        console.log(`The index of the second dog is: ${animalsInOurHouse.lastIndexOf("dog")}`);
        console.log();
    
    // 8) .sort(): The .sort() method is used to sort an array in increasing order like if the array is made up of strings then it arranges those strings in A-Z order and if the array contians numbers then it arranges the array in increasing order from the smallest number to the highest number.
        const familyMembers = ["Umer Farooq Abdullah", "Tahira Yasmin Farooq", "M. Hassan Farooq", "Amna Farooq", "Abdul Moeez Farooq", "Abdul Hadi Farooq"];
        familyMembers.sort();
        console.log(`The .sort() method: `);
        console.log(`The members of the family sorted in Alphabetical order is: ${familyMembers}.`);
        console.log();
    
    // 9) .reverse(): The .reverse() method is used to reverse an array in Java Script like it takes the first element to the last and the last element to the first. It does not follow any specific order like the .sort() method. It just reverse the whole array.
        const arrayToBeReversed = [1, 2, 3, 4, 5, 6];
        arrayToBeReversed.reverse();
        console.log(`The .reverse() method: `);
        console.log(`The reversed array is: ${arrayToBeReversed}`);
        console.log();
    
// Multi-Dimensional Arrays: Multidimensional arrays in JavaScript are arrays that contain other arrays as their elements. This is very helpful in creating structures like tables, grids and matrices.
    let someValues1 = [1, 2, 3];
    let someValues2 = [4, 5, 6];
    let someValues3 = [7, 8, 9];
    let multiDimensionalArray = [someValues1, someValues2, someValues3]; // This is called a two dimensional array. 
    // If you want to access elements inside this multiDimensionalArray you need to specify the location twice:
        console.log(`Multi-Dimensional Arrays: `);
        console.log(`Accessing elements in a multi-dimensional array: `);
        console.log(multiDimensionalArray);
        console.log(multiDimensionalArray[0][1]); // This will print 2.
        console.log();
    // Now lets say you wanted to create an array inside an array inside an array. 
        let superMultiDimensionalArray =[multiDimensionalArray, multiDimensionalArray, multiDimensionalArray];
        console.log(`Multi-Dimensional Arrays: `);
        console.log(`Accessing elements in a multi-dimensional array: `);
        console.log(superMultiDimensionalArray);
        console.log(superMultiDimensionalArray[0][0][1]); // This will print 2.
        console.log();