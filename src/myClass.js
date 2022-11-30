class myClass{
    constructor(){
        console.log(`initate`);
    }

    add(arg1, arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }
}

//export default myClass;

module.exports = myClass;