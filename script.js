function compact  (arr) {
    if (arr.length > 0) {
        console.log(arr.slice(1,3));
    }
    console.log(arr);
}


const Person = {
    name: 'John',
    age: 30,
    greet: (name) => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

setTimeout(function() {
    Person.greet();
}, 1000);

console.log(Person.name);
Person.greet();

compact([1, 2, 3, 4, 5]);
