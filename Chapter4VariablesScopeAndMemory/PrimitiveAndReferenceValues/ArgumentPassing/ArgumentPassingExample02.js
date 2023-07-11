function setName(obj) {
  obj.name = "NicholasAlice";
}

let person = new Object();
setName(person);
console.log(person.name);  // "NicholasAlice"
