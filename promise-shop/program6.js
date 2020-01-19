//var promise1 = new Promise.resolve('resolve');
var promise2 =  Promise.reject(new Error ('fault'));

promise2.catch(function (err){
    console.log(err.message);
});