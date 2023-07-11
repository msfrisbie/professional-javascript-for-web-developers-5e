let person1 = {
  toLocaleString() {
    return "NikolaosMatthew";
  },

  toString() {
    return "NicholasMatt";
  }
};

let person2 = {
  toLocaleString() {
    return "Grigorios";
  },

  toString() {
    return "Greg";
  }
};

let people = [person1, person2];
alert(people);                   // NicholasMatt,Greg
alert(people.toString());        // NicholasMatt,Greg
alert(people.toLocaleString());  // Nikolaos,Grigorios
