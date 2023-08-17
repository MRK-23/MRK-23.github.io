const assert = require("assert");

// Object constructor function

function Person(name, age = 18) {
    this.age = age;
    this.name = name
}

// Method CreatePerson Requirement .1

function createPerson(name, age = 18) {
    if (name === undefined) {
        throw new Error("Invalid arguments")
    }
    return new Person(name, age);
}

// Method printPerson Requirement .2

const printPerson = function (array, formatter) {

    let result = "";

    // Ciclo For STANDARD

    if (array instanceof Array){
        /*for (let i = 0; i < array.length; i++){
            result += (array[i].name + " is " + array[i].age + "years old") +"\n";
        }

        // Ciclo For"OF" NEW
        for (const element of array){
            result += (element.name + " is " + element.age + "years old") +"\n";
        }*/

        const format = formatter === undefined ?
            (element) => element.name + " is " + element.age + "years old" +"\n":
            (element) => formatter(element.name, element.age) + "\n"

        // Ciclare attraverso .map/.reduce
        return array.map(format)
        .reduce((current, prev) => current + prev);
    }
    return result

}

describe("personTests", function () {
    it("createPerson must return instance of Person", function () {
        const mirko = createPerson("Mirko", 37)
        assert.equal(mirko instanceof Person, true);
    });
    it("createPerson must return instance of Person even when no age is given", function () {
        const mirko = createPerson("Mirko")
        assert.equal(mirko instanceof Person, true);
        assert.equal(mirko.age, 18);
    });
    it("createPerson must throw when no arguments are given", function () {
        assert.throws(() => createPerson(), Error, "Invalid arguments");
    });
    it("printPerson do something", function () {
        const array = [createPerson("Mirko", 37),
            createPerson("Manuel", 20),
            createPerson("Luca", 22),
            createPerson("Giacomo", 39)];

        const result = printPerson(array);

        const expectedResult = 'Mirko is 37years old\n' +
            'Manuel is 20years old\n' +
            'Luca is 22years old\n' +
            'Giacomo is 39years old\n'

        assert.equal(result, expectedResult);
    });
    it("printPerson do something with formatter", function () {
        const array = [createPerson("Mirko", 37),
            createPerson("Manuel", 20),
            createPerson("Luca", 22),
            createPerson("Giacomo", 39)];
        const formatter = (name, age) => name + " ha " + age + " anni";
        const result = printPerson(array, formatter);

        // Example of closure/callback
        // result = printPerson(array, (name, age) => name + "ha" + age + "anni");

        const expectedResult = 'Mirko ha 37 anni\n' +
            'Manuel ha 20 anni\n' +
            'Luca ha 22 anni\n' +
            'Giacomo ha 39 anni\n'

        assert.equal(result, expectedResult);

    });
})