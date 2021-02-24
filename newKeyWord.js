class Person {
    constructor (firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Kuddus', 'Mia', 3000);
console.log(heroPerson);
const friendlyPerson = new Person('Asad', 'Batpar', 6000);
console.log(friendlyPerson);
const bainchudPerson = new Person('Rashidul', 'Babu', 50000);
console.log(bainchudPerson);