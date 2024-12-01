function swaping(){
    let x=34, y=76;
    console.log("BeforeSwap: x="+ x  +  ",y = "+ y);
    
    x = x + y;
    y = x - y;
    x = x - y;
    
    console.log("AfterSwap: x = "+ x + ", y = " + y);
}
swaping();

/**
BeforeSwap: x = 34, y = 76
AfterSwap: x = 76, y = 34
**/
