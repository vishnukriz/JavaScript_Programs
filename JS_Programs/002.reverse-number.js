function num(){

let num = 3456;
let revnum = 0;

    while(num > 0){
        let quo = Math.floor(num/10);
        console.log("Quotient:", quo);
        let rem = num%10;
        console.log("Remaninder:", rem);
        revnum = (revnum*10)+rem;
        console.log("Reverse Number:", revnum);
        num = quo;
        console.log("Updated Number:",num);
        console.log(" ");
    }   
    
    console.log("Final Reversed Number:", revnum);
}
num();

/**
Quotient: 345
Remaninder: 6
Reverse Number: 6
Updated Number: 345
 
Quotient: 34
Remaninder: 5
Reverse Number: 65
Updated Number: 34
Quotient: 3
Remaninder: 4
Reverse Number: 654
Updated Number: 3
 
Quotient: 0
Remaninder: 3
Reverse Number: 6543
Updated Number: 0
Final Reversed Number: 6543

**/
