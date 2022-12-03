class myClass{
    constructor(){
        console.log(`initate`);
    }

    sayHello(str){
        console.log(str)
    }

    add(arg1, arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }

    callAnotherFn (arg1, arg2){
        this.sayHello("hello world");
        let result = this.add(arg1, arg2);
        return result;
    }

    callTheCallback(callback){
        callback();
    }

    testPromise(){
        return new Promise( function(resolve, reject){
            setTimeout(() => resolve(3), 6000);
            }).then((result) => {
                return result * 2;
            })
        }
    
}

module.exports = myClass;