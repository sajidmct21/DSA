import Prompt from "prompt-sync";
const prompt = Prompt();

// n number of trems of fibonacci series

/**
 * Fibonacci Series Algorithm:
        Start
        Declare variables i, a,b , show
        Initialize the variables, a=0, b=1, and show =0
        Enter the number of terms of Fibonacci series to be printed
        Print First two terms of series
        Use loop for the following steps
        -> show=a+b
        -> a=b
        -> b=show
        -> increase value of i each time by 1
        -> print the value of show
        End
 * **/
// let n = prompt('Enter the number of terms of fibonacci series: ');
// let fn = 0;
// let sn = 1;
// let nn = 0;

// console.log(fn);
// console.log(sn);

// for(let i = 2; i < n; i++){
//     nn = fn + sn;
//     console.log(nn);
//     fn = sn;
//     sn = nn;
// }

// find nth term of fibonacii series

/**
 * Fibonacci Series Algorithm:
        Start
        Declare variables i, a,b , show
        Initialize the variables, a=0, b=1, and show =0
        Enter the term no. of Fibonacci series to be printed
        Use loop for the following steps
            -> show=a+b
            -> a=b
            -> b=show
            -> increase value of i each time by 1 until i = term no.
        -> print the value of show
        End
 * **/

// let nthTerm = prompt(`Enter the nth term no of sequence: `)
// for(let i = 2; i< nthTerm; i++){
//     nn = fn + sn;
//     fn = sn;
//     sn = nn;
// }

// console.log(sn);
// console.log(nn);

let n = prompt(`Enter the no up to which sequence is printed: `);
console.log(fn);
console.log(sn);
for (let i = 2; nn <= n; i++) {
  console.log(nn);
  nn = fn + sn;
  fn = sn;
  sn = nn;
}
