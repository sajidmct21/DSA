let str = 'abcdcbaa';
let temp = str;
let reverse = str.split('').reduce((acc, char)=>{
    return char + acc;
},'');

if(reverse == temp){
    console.log(`${str} is a palindrome`);
}
else{
    console.log(`${str} is not a palindrome`);
}


