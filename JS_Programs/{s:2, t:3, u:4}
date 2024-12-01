Declare a string "234stu" with alpha numeric and get result as {s:2, t:3, u:4}

function test(){
    let str = "234tud";
    
    let strArr = [];
    let numArr = [];
    
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        //console.log(char);
        
        if(char.match(/[A-za-z]/i)){
             strArr.push(char);
             
        }else if(char.match(/[0-9]/i)){
             numArr.push(char);
        }
    }
    console.log(strArr);
    console.log(numArr);
    
    let len = strArr.length < numArr.length ? strArr.length : numArr.length


   let obj = {};
   
   for(let i=0;i<len; i++){
       obj[strArr[i]] = numArr[i];
       
   }
    
    console.log(obj);
    
}
test();
