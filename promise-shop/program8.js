function attachTitle (str){
    return 'DR. '+str;
}
var promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);