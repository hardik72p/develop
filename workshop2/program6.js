function countWords(inputWords) {
    
    return inputWords.reduce((str,val)=>{
        str[val]= str[val]=== undefined ? 1 : str[val]+=1;
        return str;
    },{});

  }
  
  module.exports = countWords
