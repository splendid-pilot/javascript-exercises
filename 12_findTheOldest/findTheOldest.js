const findTheOldest = (people) => {
  let oldestPerson = null;
  let oldestAge = 0;
  for (let person of people) {
    if (person.yearOfDeath === undefined) {
      console.log(person);
      let currenDate = new Date();
      person.yearOfDeath = currenDate.getFullYear();
    }
    let age = person.yearOfDeath - person.yearOfBirth;
    console.log(age);
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
