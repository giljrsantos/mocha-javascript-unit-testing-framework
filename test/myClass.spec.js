let myClass = require("../src/myClass");
let chai = require("chai");
let sinon = require("sinon");
let expect = chai.expect;
const chaiaspromise = require("chai-as-promised");
chai.use(chaiaspromise);
const nock  = require("nock");

//estanciando a classe
let myObj = new myClass();

describe("Test unit", function(){

    after(function(){});
    
    before(function(){});

    afterEach(function(){}); 

    beforeEach(function(){
        sinon.restore();
    });    

    it("Test the add method", function(){
        /*
            o sistema esta esperando que o resultado pela soma
            dos arg1 + arg2 seja igual a 3
        */
        expect(myObj.add(1, 2)).to.be.equal(3);
    });


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

    });

    it("copy spy the add method", function(){
        
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

    });

    it("spy the callback method", function(){
        
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;

    });

    it("mock the sayHello methed", function() {

        let mock = sinon.mock(myObj);
        let expetcation = mock.expects("sayHello");
        expetcation.exactly(1);
        expetcation.withArgs("hello world");
        myObj.callAnotherFn(10,20);
        mock.verify();

    });

});

describe('Test the promise', function(){
    it("Promise test case", function(){
        this.timeout(0);
        // myObj.testPromise().then(function(result){
        //     expect(result).to.be.equal(6);
        //     done();
        // });
        return expect(myObj.testPromise()).to.eventually.equal(6);
    });
});

describe('XHR test suit', function(){
    it("Mock and stub xhr call", function(){
        
        const scope = nock(`https://echo-service-new.herokuapp.com`)
            .post(`/echo`)
            .reply(200, {id: 123});
        myObj.xhrFn().then(function(result){
            expect(result).to.be.equal({id: 123});
            //done();
        })
        
    });
    it("Mock and stub xhr call", function(){
        
        const scope = nock(`https://echo-service-new.herokuapp.com`)
            .post(`/error`)
            .reply(404, {id: 1});
        myObj.xhrFn().then(function(result){
            expect(result).to.be.equal({id: 123});
            //done();
        })
        
    });
});