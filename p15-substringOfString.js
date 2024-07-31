let str = 'apple';
// All substring
for(let i = 0; i<str.length; i++){
    for(let j=i; j<str.length; j++){
        let result = str.substring(i, j+1);
        console.log(result);
    }
}


// unique Substring
