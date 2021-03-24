class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }
    walk() {
        const numberOfLegs = this._name + " is walking on " + this._legs + " legs";
        return numberOfLegs;
    }
}

class Dog extends Pets {
    constructor(name, legs){
        super(name, legs);
        
    }
    bark() {
        const dogSay = this._name + " says WUF-WUF";
        return dogSay;
    }
}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}