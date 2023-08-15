const chai = require("chai");
const assert = chai.assert;
chai.config.TruncateThreshold=0;

// Calcolare se una data si trova all'interno di un'intervallo

function isInRange(now, minDate, maxDate) {

    if (now instanceof Date && minDate instanceof Date && maxDate instanceof Date){
        if (now > maxDate || now < minDate){
            return false;
        }
        return true;
    }
    throw Error("Dati invalidi");
}

describe("Date in range", function ()  {
    it("Date in range", function () {
        const givenDate = new Date(); //Today
        const minDate = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
        const maxDate = new Date(new Date().setDate(new Date().getDate() + 1)); // Tomorrow
        assert.equal(isInRange(givenDate, minDate, maxDate), true);
    })
    it("Date in range", function () {
        const givenDate = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
        const minDate = new Date(); //Today
        const maxDate = new Date(new Date().setDate(new Date().getDate() + 1)); // Tomorrow
        assert.equal(isInRange(givenDate, minDate, maxDate), false);
    })
    it("Date not valid values", function () {
        assert.throw( ()=> isInRange("",  0, 10), "Dati invalidi");
    });
})