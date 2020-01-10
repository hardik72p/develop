
// // function getShortMessages(messages) {
// //   return messages.filter(function(item) {
// //     return item.message.length < 50
// //   }).map(function(item) {
// //     return item.message
// //   })
// // }


// function getShortMessages(messages) {
//     var result = [];

//     messages.filter(fun(item))

//     function fun(item)
//     {
//         if(item.message.length < 50)
//             result.push(item.message);
//     }
//     return result;
//   }
//   module.exports = getShortMessages


function getShortMessages(messages) {
    var result = [];

    messages.filter((item)=>{
        if(item.message.length<50)
            result.push(item.message);
    });

    return result;

  }
  
  module.exports = getShortMessages
