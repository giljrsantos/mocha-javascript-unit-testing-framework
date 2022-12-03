let chai = require("chai");
let expect = chai.expect;

describe("Dummy test suit", () => {
    it("dummy test case", () => {
        expect(true).to.be.true;
    });
});

beforeEach(function(){
    console.log("========== Root level hook");
});   