const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const id = person.id;

const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age,
};

// ASSOCIO ID:ID2 PER MANTENERE IL CODICE SOPRA ED EVITARE DI COMMENTARLO

let { id: id2, ...personInfo2 } = person

console.log("Original :",id, personInfo);
console.log("Destructurning: ",id2, personInfo2);