// Objects: Java Script objects are another example of a complex data structure that can hold multiple values. An interesting fact is that you know objects all along because in Java Script an array is a special type of object with indexed properties. 

    let arr = [1, 2, 3];
    console.log(typeof arr); // Output: Object
    // Bet you didn't no that did you.

// Just like real world objects, java script objects have some properties, some actions they can do and some methods that they are able to do. You can create an object like this: 
    let dog = {
        dogName: "Java Script",
        weight: 2.5,
        color: "brown",
        breed: "Tibitan Mashtif",
        age: 4,
        burgularBitter: true
    }

// To access the properties of a java script object you can use the folllowing syntax:
    // 1) dot notation: In dot notation you write the name of the object first and then a dot and then the name of the property or method you want to access.
        console.log(`Accessing properties of Objects in JS: `);
        console.log(dog.dogName); // Output: Java Script
        console.log();
    
    // 2) Bracket notation using the string literal: In the bracket notation you write the name of the object first and then a square bracket and then the name of the property or method you want to access in string literals.
        console.log(dog[`breed`]); // Output: Tibitan Mashtif
        console.log();

    // 3) Bracket notation using the variable: In the bracket notation you write the name of the object first and then a square bracket and then the name of the property or method you want to access in variable.
        let property = "age";
        console.log(dog[property]); // Output: 4
        console.log();
    
// WORKING WITH ARRAYS AND OBJECTS: When using objects we can also have objects inside other objects.
    let company = {
        companyName: "36LPA",
        activity: "Software Development",
        address: {
            streetName: "123 Main St",
            houseNo: "456",
            zipcode: "12345",
            city: "New York",
            state: "NY"
        },
        yearOfEstablishment: 2009
    }
    console.log(`Acessing properties wihin objects in objects: `);
    console.log(company.address.zipcode); // Output: 12345
    console.log();

// Now lets say your company also performs a variety of activites then you can use arrays to write all the activities your company does:
    company = {
        companyName: "36LPA",
        activity: ["Software Development", "Web Developement", "AI and Machine Learning"],
        address: {
            streetName: "123 Main St",
            houseNo: "456",
            zipcode: "12345",
            city: "New York",
            state: "NY"
        },
        yearOfEstablishment: 2009
    }
    console.log(`Accessing elements from an array that is inside an object: `);
    console.log(company.activity[0]); // Output: Software Development
    console.log();

// It is very much possible that your company has more than two adress so can have objects withing arrays:
    company = {
        companyName: "36LPA",
        activity: ["Software Development", "Web Developement", "AI and Machine Learning"],
        address: [{
            streetName: "123 Main St",
            houseNo: "456",
            zipcode: "12345",
            city: "New York",
            state: "NY"
        },
        {
            streetName: "456 Main St",
            houseNo: "789",
            zipcode: "67890",
            city: "Los Angeles",
            state: "CA"
        }],
        yearOfEstablishment: 2009
    }
    console.log(`Accessing properties from an object that is inside an array: `);
    console.log(`The second address street is: ${company.address[1].streetName}`); // Output: 456 Main St
    console.log();
    