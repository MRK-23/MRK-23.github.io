// Ver. Standard (senza Prototype)

const assert = require("assert");

function converter1(value, unit, targetUnit) {

    if (typeof value != "number"){
        throw new Error("Il convertitore accetta solo numeri");
    }

    let x = 0;

    if (unit === "g" && targetUnit === "Kg"){
        x = value / 1000;
    } else if (unit === "Kg" && targetUnit === "g"){
        x = value * 1000;
    }

    return x;
}

describe("converterTests", function () {
    it("convert 1000g in 1Kg", function () {
        const result= converter1(1000, "g", "Kg");
        assert.equal(result, 1);
    });
    it("convert 100g in 0.1Kg", function () {
        const result= converter1(100, "g", "Kg");
        assert.equal(result, 0.1);
    });
    it("convert 1g in 0.001Kg", function () {
        const result= converter1(1, "g", "Kg");
        assert.equal(result, 0.001);
    });
    it("convert 0g in 0Kg", function () {
        const result= converter1(0, "g", "Kg");
        assert.equal(result, 0);
    });
    it("convert -1000g in 0Kg", function () {
        const result= converter1(-1000, "g", "Kg");
        assert.equal(result, -1);
    });
    it("convert not a number throws", function () {
        assert.throws(() => converter1("not a number", "g", "Kg"), Error, "Il convertitore accetta solo numeri");
    });
    it("convert Kg to g", function () {
        assert.equal(converter1(1, "Kg", "g"), 1000);
    });
    it("convert something to blablabla", function () {
        assert.throws(() => converter1(1, "something", "blabla"), Error, "Il convertitore accetta: g o Kg");
    });
})