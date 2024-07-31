let num = [1,2,3,4,5,6];
let result;
function leftArrayRotate(arr){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]= temp;
    // console.log(arr);
    return arr;
}

// result = leftArrayRotate(num);
// console.log(result);

// k rotation
let k = 3;
for(let j = 1; j<=k; j++){
    result = leftArrayRotate(num);
}
console.log(result);