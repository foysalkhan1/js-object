const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Rohingya',
    salary: 40000,
}
const friendlyPerson = {
    firstName: 'Hero 2',
    lastName: 'Rohingya 2',
    salary: 40000,
}

// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonChargeBill(5000)
// console.log(heroPerson.salary)

normalPerson.chargeBill.call(heroPerson, 900);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [5000])
console.log(friendlyPerson.salary);