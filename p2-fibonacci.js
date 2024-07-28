import Prompt from "prompt-sync";
const prompt = Prompt();

// n number of trems of fibonacci series 
// let n = prompt('Enter the number of terms of fibonacci series: ');
let fn = 0;
let sn = 1;
let nn = 0;

// console.log(fn);
// console.log(sn);

// for(let i = 2; i < n; i++){
//     nn = fn + sn;
//     console.log(nn);
//     fn = sn;
//     sn = nn;
// }

// find nth term of fibonacii series 

// let nthTerm = prompt(`Enter the nth term no of sequence: `)
// for(let i = 2; i< nthTerm; i++){
//     nn = fn + sn;
//     fn = sn;
//     sn = nn;
// }

// console.log(sn);
// console.log(nn);


let n = prompt(`Enter the no up to which sequence is printed: `)
console.log(fn);
console.log(sn);
for(let i= 2; nn<=n; i++){
    console.log(nn);
    nn = fn + sn;
    fn = sn;
    sn = nn;
}