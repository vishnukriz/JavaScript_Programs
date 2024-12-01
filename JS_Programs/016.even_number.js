-----------
**Given number is even or not
-----------
function even(){
   let num = 789;
   
   if(num%2 == 0){
       console.log("given number is even");
   }else{
       console.log("not a even number");
   }
}
even();




-------
**Given array - find even number and print in new array**
-------
function even(){
   
    let arr = [8,5,34,90,23,56];
    
    let evenNumbers = arr.filter(ele => ele % 2 === 0);
    console.log(evenNumbers);
    
    let oddNumbers = arr.filter(ele => ele % 2 != 0);
    console.log(oddNumbers);
    
} 
even();

