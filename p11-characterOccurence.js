let str = 'Hello and Welcome to Dotnet Tutorials';
let count = 0;

// check a given character 
// let chara = 'o';
// for(let i = 0; i< str.length; i++){
//     if(str[i]== chara){
//         count++;
//     }
// }
// console.log(`${chara}: ${count}`);


// check all characters 
let strArr = str.split('') // convert a string to array
let temstr = strArr.filter((ele, i)=>{
    return strArr.indexOf(ele)== i; // Remove duplicate
});
for(let i = 0; i<temstr.length; i++){
    count = 0;
    for(let j = 0; j<str.length; j++){
        if(temstr[i]==str[j]){ // Check the occurence
            count++;
        }
    }
    console.log(`${temstr[i]}: ${count}`);
}
