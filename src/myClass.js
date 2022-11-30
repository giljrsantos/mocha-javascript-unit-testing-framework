class myClass{
    constructor(){
        console.log(`initate`);
    }

    add(arg1, arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }

    callAnotherFn (arg1, arg2){
        let result = this.add(arg1, arg2);
        return result;
    }

    callTheCallback(callback){
        callback();
    }
}

module.exports = myClass;