let arr1 = [2, 3, 4, 4, 3, 2, 1, 0];

let duplicate = {};

duplicate = arr1.reduce((acc, curr, i) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(duplicate);

// Most Frequently Element
let arr2 = [1,2,3,4,5,5,4,3,2,5];
let fre ={};
let maxCount = 0;
let mostFrequentElement = 0
arr2.forEach((e,i)=>{
    fre[e] = (fre[e] || 0)+1;
})
for(key in fre){
    if(fre[key]>maxCount){
        maxCount = fre[key]
        mostFrequentElement = key
    }
}
console.log(`${mostFrequentElement} : ${maxCount}`)
