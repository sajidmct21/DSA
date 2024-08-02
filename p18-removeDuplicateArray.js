let arr = [1,1,2,2,3,3,4,4,5,5];

let result = arr.filter((ele, index)=>{
    return arr.indexOf(ele) != index;
});

console.log(result);