import Prompt from "prompt-sync";
const prompt = Prompt();


let n = prompt('Enter the number: ');
let factorial = 1;

// for(let i = 1; i<=n; i++){
//   factorial = factorial * i;
// }

// while(n>0){
//   factorial = factorial * n;
//   n--;
// }

do{
factorial = factorial * n;
n--;
}while(n>0)


console.log(factorial);