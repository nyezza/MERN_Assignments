//! ---------
console.log('hello')
console.log('')

//? ----------------*****************
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = animals;
console.log(firstAnimal);
console.log(secondAnimal);

//? --------**************
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  const { firstName, lastName, ...attributes } = person;
  const personCopy = { ...person };
  console.log(attributes);
  console.log(personCopy==person);
  console.log(personCopy.addresses == person.addresses);

  //    **********************
  const sayHello = (name) => {
    console.log(`Hello ${name}`);
  };
  
sayHello('nadhir')  

// ***********************
const sayHello1 = name => console.log(`Hello ${name}`);

sayHello1('nedhir')

// **************************
// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
const returnObj = () => ({ firstName: 'John', lastName: 'Wick' })
// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

console.log(returnObj.firstName);
// **************
class Deck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    suits.forEach(suit => {
      faces.forEach(face => {
        deck.push(this.createCard(suit, face));
      });
    });
    this.deck = deck;
  }
  createCard(suit, face) {
    console.log(face + " of " + suit);
  }
}

//?--------------------

document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");
document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value);
document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red");
document.getElementById("hover-this").onmouseout = () => setBackgroundColorById("body", "white");
const getValueFromId=(id) => {
    return document.getElementById(id).value;
}
const setBackgroundColorById=(id, color) => {
  document.getElementById(id).style = "background-color: " + color;
}
const mouseOverFunction=(el) => {
  el.style = "background-color: black";
}