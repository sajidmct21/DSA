import PromptSync from "prompt-sync";



let prompt = PromptSync();

// check a number is prime or not 
let n = prompt(`Enter the number: `);
if(checkPrime(n)){
    console.log(`${n} is prime`);
}
else{
    console.log(`${n} is not prime`);
}

/*------------ print first 10 prime numbeers ------------ */ 
// let termNo = 1;
// for(let j = 2; termNo<=10; j++ ){
//      if(checkPrime(j)){
//         console.log(j);
//         termNo++;
//     }
// }

/*------------ Print prime number between the given range ------------ */
// let lowerNumber = prompt(`Enter Lower Number: `)
// let upperNumber = prompt(`Enter upper Number: `)

// for(let j= lowerNumber; j<=upperNumber; j++){
//     if(checkPrime(j)){
//         console.log(j);
//     }
// }


/*------------ Prime Function ------------ */
function checkPrime(x){
    
    let isPrime = true;
    if(x==1){
        isPrime=false;
    }
    for(let i = 2; i<=x/2; i++){
        if(x%i==0){
            isPrime = false;
        }
    }
    return isPrime;
}
