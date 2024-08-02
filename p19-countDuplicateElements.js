let arr = [1,1,2,3,3,4,4,5,5,6,7,7];
let c = 0;

// Method 1 
// let duplicateArr = arr.filter((ele,index)=>{
//     return arr.indexOf(ele)!=index;
// },0);
// console.log(duplicateArr.length);

// method 2 
// let temArr = arr;
// for(let i = 0; i<arr.length; i++){
//     for(let j=i+1; j<temArr.length; j++){
//         if(temArr[i]==arr[j]){
//             c++;
//             break;
//         }
//     }
// }
// console.log(c);
