let myClass = require("../src/myClass");
let chai = require("chai");
let expect = chai.expect;

let myObj = new myClass();

describe("Test unit", function(){

    it("Test the add method", function(){
        expect(myObj.add(1, 2)).to.be.equal(4);
    })

});