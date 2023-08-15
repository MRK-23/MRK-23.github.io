const chai = require("chai");
const assert = chai.assert;
chai.config.TruncateThreshold=0;

function countLifeTime(yesyerday) {
    if (yesyerday instanceof Date){
        const today = new Date();
        const result = Math.floor(((((today - yesyerday) / 1000) / 60) / 60) / 24);
        return result;
    }
    throw new Error("Invalid date")

}


describe("Tests", function ()  {
    it("Born Yesterday", function () {
        const givenDate = new Date(); //Today
        const date = givenDate.getDate();
        givenDate.setDate(date -1);
        const result = countLifeTime(givenDate);
        assert.equal(result, 1);
    });
    it("Born Yesterday in the morning", function () {
        const givenDate = new Date(); //Today
        const date = givenDate.getDate();
        givenDate.setDate(date -1);
        givenDate.setHours(3);
        const result = countLifeTime(givenDate);
        assert.equal(result, 1);
    });
    it("Born the day before Yesterday", function () {
        const givenDate = new Date(); //Today
        const date = givenDate.getDate();
        givenDate.setDate(date -2);
        givenDate.setHours(3);
        const result = countLifeTime(givenDate);
        assert.equal(result, 2);
    });
        it("Born the day before Yesterday", function () {
            assert.throw(() => countLifeTime("i was born yesterday"), "Invalid date");
        });
    })