const arr = [21,21, 12, 13, 45, 54, 21, 12, 21];
let newarr = arr.filter((e,i)=>{
  return arr.indexOf(e) === i
})
console.log(newarr);
