function doubleAll(numbers) {
    var newarr = numbers.map(fun)
    function fun(num1) {
        return num1 * 2;    
    }
    return newarr;
}
  
  module.exports = doubleAll
