let myClass = require("../src/myClass");
let chai = require("chai");
let sinon = require("sinon");
let expect = chai.expect;

//estanciando a classe
let myObj = new myClass();

describe("Test unit", function(){

    it("Test the add method", function(){
        /*
            o sistema esta esperando que o resultado pela soma
            dos arg1 + arg2 seja igual a 3
        */
        expect(myObj.add(1, 2)).to.be.equal(3);
    })


    it("spy the add method", function(){
        
        let spy = sinon.spy(myObj, "add");
        // atribuindo valores aos argumentos
        let arg1 = 10, arg2 = 20;
        // informando os dois argumentos que a função
        // "callAnotherFn" espera
        myObj.callAnotherFn(arg1, arg2);
        //chamando o "spy" uma vez
        sinon.assert.calledOnce(spy);
        // a chamada do "spy" é verdadeira
        expect(spy.calledOnce).to.be.true;
        // ligando o "spy" com os paramentros informados é verdadeiro
        expect(spy.calledWith(arg1, arg2)).to.be.true;

    })

    it("spy the callback method", function(){
        
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    })

});