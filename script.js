//JS TEST

// 1. Programming Basics
// 'Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon'
// Create an array of the dishes listed above. Loop through the array using aforloop.
// 1.Log out all the dishes.
// 2.Log out a randomly chosen dish (randomly generated  index)

const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon'];

for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
}

const rand = Math.floor(Math.random() * dishes.length);
console.log(`Random: ${dishes[rand]}`);

// 2. DOM manipulation
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked:
// -Insert an h1 tag below the button with the text “Javascripttest”.
// -Change the background color of the document body

const button = document.createElement("button");
button.innerText = "Click!";
document.body.append(button);

button.addEventListener("click", () => {
    const header = document.createElement("h1");
    button.after(header);
    header.innerText = "“Javascripttest”";

    document.body.style.backgroundColor = (document.body.style.backgroundColor == '') ? 'green' : '';
})

// 3. Async API calls
// Make an API call using the Fetch API. Make use of the following API:
// https://reqres.in/api/users
// Display the first_name of the first three users in the DOM, using a loop or.map()

async function getFirstName(url, x) {
    try {
        const response = await fetch(url);
        if (response.status < 200 || response.status > 299) {
            throw new Error("Can't fetch users");
        }
        const users = await response.json();
        console.log(`First name of ${x} users are:`);
        for (let i = 0; i < x; i++) {
            console.log(users.data[i].first_name);
        }
    } catch (error) {
        console.log("Error" + error.message);
    }
}

getFirstName("https://reqres.in/api/users", 3);

// 4. Class (optional)
// Create a class called “Person”. The constructor should have 1 parameter called
// firstname. It should have 1 method calledsayHellothat should log: 'Hello my name is
// <firstname>’

class Person {
    constructor(firstname) {
        this.name = firstname;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const jack = new Person('Jack');
jack.sayHello();