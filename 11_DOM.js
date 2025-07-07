// BOM: BOM stands for Browser Object Model. BOM provides JS with the ability to interact with the browser. It allows us you to access and manipulate the properties and objects of the borwser. BOM is often called the window browser object. It is the magic that allows js to interact with the browser. It exposes browser specifc objects such as: window, navigator, location,etc. 

// console.dir(): The console.dir() method is used to access a list of all the properties and methods of a specific object.
console.dir(window)

// Window Object: The window object is the top level object in the BOM. It represents the browser window or tab that contains the web page. Almost everything on the client side in JS is a property of the window object. The window object has many objects but we will be discussing only the main ones: 

// window.history Object: The window.history object is a js object that contains all the previous history of the window or tab. This object can be written without the window prefix as it is a global object. The history object has some methods these include:
    
    // history.back(): The history.back() method is used to go back to the previous website you opened before opening the current webiste. It can only go one website at a time. 
    history.back();

    // history.forward(): The history.forward() method is used to go forward to the next website you opened before opening the current webiste. It can only go one website at a time.
    history.forward();

    // history.go(): The history.go() method is used to go forward or backward to a specific website. It takes one argument which is the number of websites you want to go back or forward. For example, history.go(-1) will go back one website and history.go(1) will go forward one website.
    history.go(-1);

// window.navigator object: The window.navigator object is a js object that contains information about the browser we are using, such as what browser are we using, what version it is and what operating system is it running on.
navigator.appCodeName;

// window.location object: The window.location object is a js object that contains the location of the window or tab your have currently opened. It contains the URL which you can alter to go to some other page. Keep in ming the properties and methods of this object differ from browser to browser. 
location.href = 'www.youtube.com';

// DOM: DOM stands for Document Object Model. DOM is a standard model used for consistent interpretation of HTML documents along various browsers and operating systems. The DOM arranges various elements of a webpage as a hierarchial tree structure where each element is a node and each node has a parent node. The DOM is used to manipulate the HTML document and change its appearance and behavior. DOM is the child object of the BOM. 
console.dir(document);

// document.querySelector(): document.querySelector() method is used to select the first element that matches the specified CSS selector (element name, id, class). It returns the first element that matches the selector or null if no element matches the selector. 
document.querySelector('.header');

// document.querySelectorAll(): document.querySelectorAll() method is used to select all elements that match the specified CSS selector (element name, id, class). It returns a NodeList of all elements that match the selector or an empty NodeList if no elements match the selector.
document.querySelectorAll('p');