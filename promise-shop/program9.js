function parsePromised(json){
    var promise = new Promise(function(resolve,reject){
        try{
            resolve(JSON.parse(json));
        }
        catch(e){
            reject(e);
        }
    });
    return promise;
}
function onReject(e) {
    console.log(e.message);
  }

parsePromised(process.argv[2]).then(null,onReject);