import Prompt from "prompt-sync";
const prompt = Prompt();


const n = prompt('Enter the number: ');
let factorial = 1;
for(let i = 1; i<=n; i++){
  factorial = factorial * i;
}
console.log(factorial);