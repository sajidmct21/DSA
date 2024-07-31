// let str = 'Hello and Welcome to Pakistan';
let str = 'hello'
let strArr = str.split('');

let uniqueArr = strArr.filter((ele, i)=>{
    return strArr.indexOf(ele)==i;
});
uniqueArr = uniqueArr.join('');

console.log(uniqueArr);