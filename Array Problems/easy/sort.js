let arr = [10, 20, 30, 20, 50, 40, 50, 10];

// 1-Find Duplicate 
arr = arr.sort((a,b)=> a-b)
let res = []
 arr.filter((e,i)=>{
    if(arr[i]===arr[i-1]){
        res.push(arr[i])
    }
})

console.log(res);