// function first(){
//     return "hello";
// }
// function second(str){
//     return str+" world";
// }
//var promise = Promise.resolve(first());
//promise.then(second).then(console.log);

first().then(val=>second(val)).then(console.log);
