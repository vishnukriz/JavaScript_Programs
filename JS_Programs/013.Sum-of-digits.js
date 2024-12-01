function SumOfDigits(){
    let num = 467;
    let sum = 0;
    
    while(num>0){
        let quo = Math.floor(num/10);
        let rem = num%10;
        sum = sum + rem;
        num = quo;
    }
    console.log(sum);
    
}
SumOfDigits();

//result:
//17



// sum of all the digits in array
function sum(){
    let arr = [5, 4, 9, 12, 45];
    
    let sumofdigits = arr.reduce(((accu,curVal) => accu + curVal), 0);
    console.log(sumofdigits);
  
}
sum();

//75
