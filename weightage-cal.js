// Try edit message
arr = [{ x: 1, y: 5, w: 5 },
{ x: 2, y: 7, w: 4 },
{ x: 2, y: 6, w: 3 },
{ x: 5, y: 8, w: 5 }];

function cal(x, y) {
  let sum = 0;
  arr.map((obj) => { 
  if (obj.x <= x && obj.y >= y) 
      sum = sum + obj.w;
  })
  console.log(sum);
}
let list = [];
arr.map((obj) => {
  if (!list.includes(obj.x))
    list.push(obj.x);
  if (!list.includes(obj.y))
    list.push(obj.y);
})
list = list.sort();
list.map((i) => {
  let index = list.indexOf(i);
  if (list.length - 1 > index) {
    console.log("(", list[index], ",", list[index + 1], ")");
    cal(list[index], list[index + 1]);
  }
})

//temp =  newArr.filter((item,i) => newArr.indexOf(item) === i)  //TO Remove Duplicated Elements From Array