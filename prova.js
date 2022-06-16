//QUEST'ESERCIZIO UNISCE ID A PERSON INFO, CREANDO UN UNIO OGGETTO

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

console.log({ ...{ id }, ...personInfo });


