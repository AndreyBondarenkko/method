
//Tack 2
/* Она принимает число и возвращает true,
    если число является простым, а в ином случае false. */


const isPrime = number =>{
    for(let k = 2; k < number; k++){
        if(number % k === 0) {
            return true;
        }else{
            return false;
        }
    }
}

console.log(isPrime(5));