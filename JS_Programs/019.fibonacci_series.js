function fibonanci(){
    let number = 15;
    
    let n1 = 0;
    let n2 = 1;
    let nextNum;
    
    console.log(n1);
    console.log(n2);
    
    nextNum = n1 + n2;
    
    while(nextNum <= number){
        
        console.log(nextNum);
        
        n1 = n2;
        n2 = nextNum;
        nextNum = n1 + n2;
    }
    
}
fibonanci();


//result:
0
1
1
2
3
5
8
13
