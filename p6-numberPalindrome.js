let num = 123215;
let temp = num;
let revNum = 0;

while(temp>0){
    let remainder = temp % 10;
    revNum = (revNum * 10) + remainder;
    temp = Math.floor(temp / 10);
}
if(revNum == num){
    console.log(`${num} is a palindrome`);
}
else{
    console.log(`${num} is not a palindrome`);
}
