let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
 let name= person.firstName;
 console.log(name);

 person.hobbies.push("cooking");
 console.log(person.hobbies);

 person.fulladdress=function(){
    return person.address.street+" "+person.address.city+" "+person.address.state;
 };

 console.log(person.fulladdress());