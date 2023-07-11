function createPerson(name){
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}

let globalPerson = createPerson("NicholasAlice");

// do something with globalPerson

globalPerson = null;
