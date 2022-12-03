let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
class myClass{
    constructor(){
        console.log(`initate`);
    }

    sayHello(str){
        console.log(str)
    }

    add(arg1, arg2){
        if(1){
            let result;
            result = arg1 + arg2;
            return result;
        }else{
            return 2;
        }
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
            setTimeout(() => resolve(3), 0);
            }).then((result) => {
                return result * 2;
            })
    }

    xhrFn() {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open("post", "https://echo-service-new.herokuapp.com/echo", true);
    
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
              } else {
                reject(xhr.status);
              }
            }
          };
          xhr.send();
        })
          .then(function(result) {
            return result;
          })
          .catch(error => {
            return error;
          });
      }
    
}

module.exports = myClass;