import PromptSync from "prompt-sync";

let prompt = PromptSync();

let n = prompt(`Enter the number: `);
let origNum = n;
let reverseNumber = 0;
while(n > 0){
    let remainder = n % 10;
    reverseNumber = (reverseNumber * 10) + remainder;
    n =Math.floor(n / 10);
}

console.log(`Original number ${origNum}`);
console.log(`Reverse number ${reverseNumber}`);