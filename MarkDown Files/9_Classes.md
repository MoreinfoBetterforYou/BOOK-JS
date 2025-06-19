# 🧠 OOP in JavaScript (With Examples)

---

## 🚀 OOP - Object Oriented Programming
OOP stands for **Object Oriented Programming**, a programming paradigm based on the concept of "objects". These objects can hold data (properties) and perform actions (methods). OOP helps in organizing code logically, grouping related data and functionality, and making code reusable and maintainable.

Key principles: 
- **Encapsulation**: Hiding internal details and showing only what's necessary.
- **Inheritance**: Sharing behavior between classes.
- **Polymorphism**: Writing code that works on objects of different classes.
- **Abstraction**: Focusing on essential features and hiding the complexity.

---

## 🧸 Object
An object is a basic unit of OOP. It holds properties and methods that describe a specific entity.

```js
let dog = {
    name: "Bob",
    weight: 100,
    color: 'black',
    breed: 'chihuahua',
    action() {
        console.log(`Bark!, Bark!, Bark!`);
    }
}
```
Here, `dog` is an object with four properties and one method.

---

## 🏗️ Class
A class is a blueprint for creating multiple objects with the same structure. It defines what properties and methods the objects will have.

```js
class className {
    constructor(prop1, prop2, prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }
    action() {
        console.log(`Some action`);
    }
}

let objectName = new className('bob', 15, 'male');
console.log(objectName.prop1);
```

### ✅ Real World Example:
This example demonstrates how a `Car` class can represent real-world car data:

```js
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
```

---

## 🧰 Constructor
The constructor is a special method in a class that gets called automatically when a new object is created. It is used to initialize properties.

```js
class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person1 = new People('John', 'Doe');
console.log(`First Name: ${person1.firstName}`);
```

### 🔄 Missing Properties:
If a property isn’t provided, it becomes `undefined`:

```js
let person2 = new People('Hassan');
console.log(person2.firstName); // Hassan
console.log(person2.lastName);  // undefined
```

### 🛡️ Default Values:
You can set default values inside the constructor to prevent undefined:

```js
class Person {
    constructor(firstName, lastName = 'Doe') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person3 = new Person('Bob');
console.log(person3.firstName + ' ' + person3.lastName); // Bob Doe
```

---

## 🧠 Methods
Methods are functions defined inside a class. They represent the behavior of objects.

```js
class Dog {
    constructor(name, weight, breed, age) {
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
myDog.compliment('Bob', 'watch');
```

---

## 🔍 "this" Keyword
`this` refers to the current instance of the class. It is used to access properties and methods inside the class.

---

## 📦 Properties
Properties are variables attached to an object. They define the state of the object.

```js
class Animal {
    constructor(name, species, age, gender) {
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
```

---

## 🔐 Private Properties
Private properties begin with `#` and cannot be accessed outside the class. They are used to secure sensitive data.

```js
class Humans {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
}

let anotherHuman = new Humans('John', 'Doe');
console.log(anotherHuman.firstName); // undefined
```

---

## 🔑 Getters and Setters
These are special methods to get and set the values of private properties.

### 💡 Encapsulation
Encapsulation is about protecting internal object state. Getters and setters help control how properties are accessed and modified.

```js
class HomoSapiens {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName() {
        return this.#firstName;
    }
    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }
    set lastName(value) {
        this.#lastName = value;
    }
}

let human = new HomoSapiens('Imran', 'Khan');
console.log(human.firstName); // Imran
```

---

## 🏦 Bank Account Example (Encapsulation + Private Properties)

```js
class BankAccount {
    #bankBalance = 0;

    constructor(balance) {
        if (balance >= 0) {
            this.#bankBalance = balance;
        }
    }

    get balance() {
        return this.#bankBalance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this.#bankBalance = amount;
        } else {
            console.log(`❌ Balance can't be negative.`);
        }
    }

    deposit(amount) {
        if (amount >= 0) {
            this.#bankBalance += amount;
        } else {
            console.log(`❌ Deposit can't be negative.`);
        }
    }

    withDraw(amount) {
        if (amount >= 0 && amount <= this.#bankBalance) {
            this.#bankBalance -= amount;
        } else {
            console.log(`❌ Invalid withdrawal amount.`);
        }
    }
}

let myBank = new BankAccount(1000000);
console.log(myBank.balance); // 1000000
myBank.deposit(500000);
console.log(myBank.balance); // 1500000
myBank.balance = -20; // ❌
myBank.withDraw(100000);
console.log(myBank.balance); // 1400000
```

---

## 🧬 Inheritance

**Inheritance** is a key concept in Object-Oriented Programming (OOP). It is a mechanism that allows one class (called the **child** or **subclass**) to inherit the methods and properties of another class (called the **parent** or **superclass**). This helps improve code reusability and allows us to establish a connection and relationship between classes. 🧱

### 🧪 Example:

```js
console.log(`Inheritance - Example 1`);
class Vehicle {
    #color;
    #brand;
    #engineSize;
    #maxSpeed;

    constructor(color, brand, engineSize, maxSpeed) {
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
        if (amount >= 0) {
            this.#maxSpeed += amount;
        } else {
            console.log(`Acceleration amount can't be negative.`);
        }
    }
}

class MotorCycle extends Vehicle {
    #fuelCapacity;
    #fuelType;

    constructor(color, brand, engineSize, maxSpeed, fuelCapacity, fuelType) {
        super(color, brand, engineSize, maxSpeed);
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
```

---

## 🧩 `super` Keyword

Just like the `this` keyword is used for the **current object** (usually the child), the `super` keyword is used to **refer to the parent class**. 💡

It is most commonly used to:

* Call the constructor of the parent class
* Access methods from the parent class

Example use:

```js
super(color, brand, engineSize, maxSpeed);
```

---

## 🧠 Prototype

A **prototype** in JavaScript is a mechanism that allows objects to **share and inherit properties and methods**. Every class has a `.prototype` property that you can access to add or override behaviors. 🛠️

### 🧪 Example:

```js
console.log(`Prototype - Example 1`);
class Men {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName() {
        return this.#firstName;
    }

    greet() {
        console.log(`Hi there!`);
    }
}

// You can add property or method externally to the class using the prototype property:
Men.prototype.introduce = function () {
    console.log(`Hi there, I am ${this.firstName}`);
};

Men.prototype.favouriteColor = 'black';

const anotherMan = new Men('Imran', 'Khan');
anotherMan.introduce();
console.log(anotherMan.favouriteColor);
console.log();
```

---