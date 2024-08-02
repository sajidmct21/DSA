let arr = [1,1,2,3,3,4,4,5,5,6,7,7];
let tempArr = arr;
let n = arr.length;


// unique Elements 
// for(let i = 0; i < n; i++){
//     let count = 0;
//     for(let j = 0; j<n; j++){
//         if(arr[i]=== tempArr[j]){
//             count++
//         }
//     }
//     if(count === 1){
//         console.log(arr[i]);
//     }
// }

// duplicate Elements
// let uniqueArr = arr.filter((ele, index)=>{
//     return arr.indexOf(ele)!= index;
// })
// for(let i = 0; i < n; i++){
//     let count = 0;
//     for(let j = 0; j < n; j++){
//         if(uniqueArr[i] === tempArr[j]){
//             count++;
//         }
//     }
//     if(count > 1){
//         console.log(`${uniqueArr[i]} is duplicate`);
//     }
// }

// frequency of each element 
// Remove duplicates
let uniqueArr = arr.filter((ele, index)=>{
    return arr.indexOf(ele) == index;
})
// console.log(uniqueArr);
for(let i = 0; i < uniqueArr.length; i++){
    let count = 0;
    for(let j = 0; j < n; j++){
        if(uniqueArr[i] === tempArr[j]){
            count++;
        }
    }
    console.log(`${uniqueArr[i]} is repeat for ${count}`);
}