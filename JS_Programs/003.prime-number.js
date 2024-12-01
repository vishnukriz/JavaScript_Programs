function prime(){
    let num = 49;
    if(num == 1){
        console.log("not prime nor composite");
    }
    for(let i=2;i<num;i++){
        console.log("num:",num,"\ti:",i, "\trem", num%i);
        if(num%i == 0){
            console.log("not a prime");
            return;
        }
    }
    console.log("prime");
}
prime();

/**
num: 49 	i: 2 	rem 1
num: 49 	i: 3 	rem 1
num: 49 	i: 4 	rem 1
num: 49 	i: 5 	rem 4
num: 49 	i: 6 	rem 1
num: 49 	i: 7 	rem 0
not a prime
**/
