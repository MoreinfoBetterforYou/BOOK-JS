// OOP: OOP stands for Object Oriented Programming. It is a programming paradigm that is based upon objects. An object is a thing that has some properties and that object can perform some actions. OOP helps us to understand and group various objects and things in our day to day life. It helps us to organize code, group similarites and be better able to manage, maintian and reuse code. Key principles of OOP, include encapsulation, inheritance, polymorphism, abstraction. 

// Object: An object is a collection of properties and methods. Here is an example of a simple object: 
    let dog = {
        name: "Bob",
        weight: 100,
        color: 'black',
        breed: 'chihuahua',
        action() {
            console.log(`Bark!, Bark!, Bark!`);
        }
    }

// Class: A class is blueprint for creating objects with specific properties and methods. It defines what properites and methods the object created from it will have. The basic syntax for creating a class is:
    class className {
        constructor(nameofProperty1, nameofProperty2, nameofProperty3){
            this.nameofProperty1 = nameofProperty1;
            this.nameofProperty2 = nameofProperty2;
            this.nameofProperty3 = nameofProperty3;
        }
        action() {
            console.log(`Some action`);
        }
    }
// You can create an object using the class by the following format:
    let objectName = new className('bob', 15, 'male');
    
    console.log(objectName.nameofProperty1);
    console.log();

// Lets look at a real world example:
    console.log(`Class - Example 1`);
    class Car {
        constructor(brand, model, year, price, color, engineSize) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.price = price;
            this.color = color;
            this.engineSize = engineSize;
        }
        action() {
            console.log(`The car is driving.`);
        }
    }
    const myCar = new Car('Tesla', 'Roadster', '2030', 250000, 'white', 1500);
    console.log(`${myCar.model} is a ${myCar.brand}. It was released in ${myCar.year}. It costs $${myCar.price}. Its color is ${myCar.color} and has a ${myCar.engineSize}hp engine.`);
    console.log();

// Now you might be wondering that we just quickly went into examples and didn't explain anything. But thats not true. Now we will be talking about the constructor, this keyword and other things:

    // Constructor: The constructor method is a special method that we use to initialize objects with our class blue prints. There can only be one constructor inside a class. The constructor contains properties which can be initialized whenever you create a new object from the class. Think of the constructor like a instruction manual for an oven. The constructor provides you the blueprint, the necessities you need to create anything in it. The constructor tell Java Script what properites should each object have. 

        console.log(`Constructor - Example 1`);
        class People{
            constructor(firstName, lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        let person1 = new People('John', 'Doe');
        console.log(`First Name: ${person1.firstName}`);
        console.log();

    // Ok so that was basic things you understood that but what if you created an object that didn't have all the properties of the constructor then what would happen. Well lets see:

        console.log(`Constructor - Example 2`);
        let person2 = new People('Hassan');
        console.log(`First Name: ${person2.firstName}`); // Output: Hassan
        console.log(`Last Name: ${person2.lastName}`); // Output: undefined
        console.log();
    
    // By this time most languages would have crashed but not java script. It just give the properties that you didn't define the value of undefined. Or you could set a default value to your property to prevent Java Script from logging undefined. 

        console.log(`Constructor - Example 3`);
        class Person{
            constructor(firstName, lastName = 'Doe'){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        const person3 = new Person('Bob');
        // Now if you try to do the same thing it will output Bob Doe.
        let fullName = person3.firstName + person3.lastName;
        console.log(fullName);
        console.log();
    
    // Methods: In a class methods are simply functions that the object can perform. When declaring the methods of an object we don't use the function keyword. Lets see an example:
        console.log(`Methods - Example 1`);
        class Dog{
            constructor(name, weight, breed, age){
                this.name = name;
                this.weight = weight;
                this.breed = breed;
                this.age = age;
            }
            bark() {
                console.log(`${this.name} is barking`);
            }
            compliment(name, object) {
                console.log(`You are looking good today ${name}. Nice ${object}`);
            }
        }
        let myDog = new Dog('Java Script', 2.5, 'Chihuahua', 3);
        myDog.bark();
        console.log();

    // We can also pass arguments to the methods just like functions:
        console.log(`Methods - Example 2`);
        myDog.compliment('Bob', 'watch');
        console.log();    

    // "This" keyword: The "this" keyword is a special keyword in javascript that is used in classes to referes to the object that is currently calling the method. We use the this keyword to access properties and methods of the current object we are talking about. Think of the this keyword like a pronoun for the class. That is not specific not any object but can be used with any object ever created from that class.

// Properties: Properties are also called fields. They are the data or information the class holds. Think of a class like a blue print of a person while the properties are things like the person's name, age, gender, etc. Lets look at an example: 
        console.log(`Properties - Example 1`);
        class Animal{
            constructor(name, species, age, gender){
                this.name = name;
                this.species = species;
                this.age = age;
                this.gender = gender;
            }
            speak() {
                return `The ${this.name} is speaking`;
            }
        }
        let myAnimal = new Animal('Cat', 'Feline', 3, 'Male');
        console.log(myAnimal.speak());
        console.log();
    // From the example we understand that the class animal has four properites: name, species, age and gender.

    // Now we are going to talk about Private Properites. You might be thinking why do we even need private properties well this is exaplained below:

// Private Properties: Sometimes it is not safe or smart to let people change the data in your object. For example, may be you don't want a user to set the age to a negative number or write a silly name like: ' '. So instead of allowing people to access and change the data inside objects you have private properties. 

        // To use private properties all you need to do is just place # before the property name. This makes it private. Making sure that the property can only be accessed from the inside of the class not from the outside. Lets look at an example: 

    console.log(`Properties - Example 1`);
    class Humans{
        #firstName;
        #lastName;
        constructor(firstName, lastName){
            this.#firstName = firstName;
            this.#lastName = lastName;
        }
    }
    let anotherHuman = new Humans(`John`, 'Doe')
    console.log(anotherHuman.firstName); // Output: undefined
    console.log();

// Getters and Setters: Getters and setters are special methods in classes that allow you to access and modify property or methods of an object. Getters are used to get the value of a property and setters are used to set the value of a property. These methods can be accessed using the get and set keywords. Before going into examples it is necessary to understand the concept of encapsulation:

    // Encapsulation: Encapsulation is a core principle in OOP. It restricts direct access to an object's internal state (properties and methods). Instead it uses controlled access through methods like getters (used to read values) and setters (used to modify values). This helps in maintaining the integrity of the object and prevents unauthorized changes. Lets look at our example: 
    
        console.log(`Getters and Setter - Example 1`);
        class HomoSapiens {
            #firstName;
            #lastName;

            constructor(firstName, lastName){
                this.#firstName = firstName;
                this.#lastName = lastName;
            }
            get firstName() {
                return this.#firstName;
            }
            set firstName(firstName) {
                this.#firstName = firstName;
            }
            get lastName() {
                return this.#lastName;
            }
            set lastName(lastName) {
                this.#lastName = lastName;
            }
        }
        let anotherHomoSapien = new HomoSapiens('Imran', 'Khan');
        console.log(anotherHomoSapien.firstName);
        console.log();
        
    // Now lets look at a more complex example:

    console.log(`Getters and Setters - Example 2`);
    class BanckAccount {
        #bankBalance = 0;

        constructor(balance){
            if(balance >= 0){
                this.#bankBalance = balance
            }
        }

        get balance() {
            return this.#bankBalance;
        }

        set balance(amount) {
            if(amount >= 0){
                this.#bankBalance = amount;
            }
            else{
                console.log(`Balance can't be negative.`);
            }
        }

        deposit(depositAmount){
            if (depositAmount >= 0){
                this.#bankBalance += depositAmount;
            }
            else{
                console.log(`Deposit amount can't be negative.`);
            }
        }

        withDraw(withDarwAmount){
            if(withDarwAmount >= 0 && withDarwAmount <= this.#bankBalance){
                this.#bankBalance -= withDarwAmount;
            }
            else{
                console.log(`Withdarw amount can't be negative or greater than the balance.`);
            }
        }
    }

    let myBankAccount = new BanckAccount(1000000);
    console.log(myBankAccount.balance); // Output: 1000000
    myBankAccount.deposit(500000);
    console.log(myBankAccount.balance);
    myBankAccount.balance = -20; // Output: Balance can't be negative and cause we used private properties it would not effect the actual amount.
    myBankAccount.withDraw(100000);
    console.log(myBankAccount.balance);
    console.log();

// Inheritance: Inheritance is key concept in OOP. It is a mechanism that allows one class called child (or sub class) to inherit the methods and properties of another class called the parent class (or super class). This helps in improving code reusibility and allowing us to establish a connection and relationship between classes. Lets look at an example:

    console.log(`Inheritance - Example 1`);
    class Vehicle{
        #color;
        #brand;
        #engineSize;
        #maxSpeed;

        constructor (color, brand, engineSize, maxSpeed){
            this.#color = color;
            this.#brand = brand;
            this.#engineSize = engineSize;
            this.#maxSpeed = maxSpeed;
        }

        get color() {
            return this.#color;
        }
        get brand() {
            return this.#brand;
        }
        get engineSize() {
            return this.#engineSize;
        }
        get maxSpeed() {
            return this.#maxSpeed;
        }

        move() {
            console.log(`Moving at ${this.#maxSpeed}`);
        }
        accelerate(amount) {
            if (amount >= 0){
                this.#maxSpeed += amount;
            }
            else{
                console.log(`Acceleration amount can't be negative.`);
            }
        }
    }
    class MotorCycle extends Vehicle{
        #fuelCapacity;
        #fuelType;

        constructor(color, brand, engineSize, maxSpeed, fuelCapacity, fuelType){
            super(color, brand, engineSize, maxSpeed)
            this.#fuelCapacity = fuelCapacity;
            this.#fuelType = fuelType;
    }
    
    doWheelie() {
        console.log(`The ${this.brand} is doing a wheelie.`);
    }
}
let myMotorCycle = new MotorCycle('black', 'Ducati', 1000, 350, 16, 'High Octance');
console.log(myMotorCycle.brand);
console.log();

// Super keyword: Just like the 'this' keyword is used for objects also called childs. The 'super' keyword is used for the parent objects. The super keyword allows the child object to inherit the properties and methods of the parent object. It is used to call the constructor of the parent class. 

// Prototype: A prototype in javascript is a mechanism that allows objects to share and inherit properties and methods. Every class has a prototype property which you can access using the prototype. 
    console.log(`Prototype - Example 1`);
    class Men{
        #firstName;
        #lastName;
        constructor(firstName, lastName){
            this.#firstName = firstName;
            this.#lastName = lastName;
        }
        get firstName() {
            return this.#firstName;
        }
        get lastName() {
            return this.#lastName;
        }
        greet() {
            console.log(`Hi there!`);
        }
    }
    // You can add property or method externally to the class using the prototype property:
    Men.prototype.introduce = function () {
        console.log(`Hi there, I am ${this.firstName}`);
    }
    Men.prototype.favouriteColor = 'black';
    const anotherMan = new Men('Imran', 'Khan');
    anotherMan.introduce();
    console.log(anotherMan.favouriteColor);
    console.log();