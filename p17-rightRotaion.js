let num = [1,2,3,4,5,6];
let result;

function rightArrayRotate(arr){
    let temp = arr[arr.length-1];
    for(let i = arr.length-1; i>0; i--){
        arr[i]=arr[i-1];
    }
    arr[0]=temp;
    return arr;
}

// result = rightArrayRotate(num);
// console.log(result);

// k Rotation 
let k = 3;
for(let j= 1; j<=k; j++){
    result = rightArrayRotate(num);
}
console.log(result);