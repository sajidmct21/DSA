const arr = [1,2,3,4,5,2,3,4,6]

let duplicate = arr.filter((item, index)=>{
    return arr.indexOf(item)!== index;
});

console.log(duplicate);