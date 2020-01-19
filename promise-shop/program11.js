function all(p1,p2){
    var promise =  new Promise(function(resolve,reject){
               
    var counter = 0;
    var arr = [];
    p1.then(function (val){
        arr[0] = val;
        counter++;

        if(counter >=2){
            resolve(arr);
        }
    });
    p2.then(function (val){
        arr[1] = val;
        counter++;

        if(counter>=2){
            resolve(arr);
        }
    }); 
    });
    
    return promise;
}

all(getPromise1(), getPromise2())
  .then(console.log);