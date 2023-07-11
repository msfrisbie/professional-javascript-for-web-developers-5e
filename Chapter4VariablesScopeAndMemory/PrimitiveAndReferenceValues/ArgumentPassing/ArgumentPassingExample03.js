function setName(obj) {
  obj.name = "NicholasAlice";
  obj = new Object();
  obj.name = "Greg";
}

let person = new Object();
setName(person);
console.log(person.name);  // "NicholasAlice"
