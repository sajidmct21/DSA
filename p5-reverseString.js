let str = 'I Love Pakistan';
let reverseStr;

// 1. Using reduce() and split() Methods
// reverseStr = str.split('').reduce((acc,char)=>{
//     return char+acc;
// },'');

// 2. Using split(), reverse() and join() Methods 
// reverseStr = str.split('').reverse().join('');

//  3. Using Spread Operator reverse() and join()
// reverseStr = [...str].reverse().join('');

// 4. Using Array.form() and reverse() and join() Methods
// reverseStr = Array.from(str).reverse().join('');

// 5. Using Spread Operator and reduce() method
reverseStr = [...str].reduce((acc,char)=>{
    return char + acc;
}, '')


console.log(reverseStr);