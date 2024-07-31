let str = 'Welcome to JavaScript series';

// convert string to array and the reverse
// let strArr = str.split('').reverse(); 

// convert reverse array to sting
// let reverseStr = strArr.join('') 

//convert reverse string to array by words and then reverse it
// let reverseStrArrbyWords = reverseStr.split(' ').reverse();

// convert reverse array of words into string
// let reverseStrStrbyWords = reverseStrArrbyWords.join(' ')
// console.log(reverseStrStrbyWords);

// same the above approach but short delimeter means empty string or a space
let reverseWords = (strings, delimeter)=>{
    return strings.split(delimeter).reverse().join(delimeter)
}

let revString = reverseWords(str,'')
let revWords = reverseWords(revString, ' ');
console.log(revString);
console.log(revWords);