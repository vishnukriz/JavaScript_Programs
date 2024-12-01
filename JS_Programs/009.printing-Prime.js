function prime(){
    
    for(let i=2;i<10;i++){
        let isPrime = true;
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
            
        }
       if(isPrime) console.log(i);
    }
}
prime();

/**
2
3
5
7
**/

// performance time will be minimum
function isprime(n){ 
    for( let i=2;i<=Math.floor(Math.sqrt(n));i++){
       
        if(n%i==0)return false}
    return true
}
function printPrimt(n){
    for (let i=2;i<=n;i++)
    if(isprime(i))console.log(i)
}
var startTime = performance.now()
printPrimt(10000000)
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
