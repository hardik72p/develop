var i = 10;
var promise = new Promise(function(resolve,reject){
    
    resolve('I FIRED');
    reject(new Error ('I DID NOT FIRED'));
});

function onReject(error){
    console.log(error.message);
}

//promise.then(null,onReject).then(console.log,null);
promise.then(console.log,onReject);