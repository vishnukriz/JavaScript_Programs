function uppercase(){
    let str = "this is a table"; 
    
    let arr = str.split(" ");
   // console.log(arr);
    
    let capsArr = [];
    
    for(let word of arr){
        let splitArr = word.charAt(0).toUpperCase()
                                    + word.slice(1).toLowerCase();
        
        //console.log(splitArr);
        capsArr.push(splitArr);
    }
    console.log(capsArr);
    
    let capStr = capsArr.join(" ");
    console.log(capStr);
    
   
}
uppercase();
