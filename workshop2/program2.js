function repeat(operation, num) {
    
if(num>0)
{
    repeat(operation,--num);
}
else
    return 0;
}
  
  // Do not remove the line below
  module.exports = repeat