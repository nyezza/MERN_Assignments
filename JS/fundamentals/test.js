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