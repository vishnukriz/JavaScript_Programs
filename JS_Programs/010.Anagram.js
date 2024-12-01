function charcount(str){
    let arr = str.split("");
    let obj = {};
    
    for(let i=0;i<arr.length;i++){
        let ele = arr[i];
        if(obj[ele]){
            obj[ele] = obj[ele]+1;
        }else{
            obj[ele]=1;
        }
    }
    console.log(obj);
    for(let key in obj){
        //console.log(key, obj[key]);
    }
    return obj;
}

function anagram(){
    let obj1 = charcount("heart");
    let obj2 = charcount("earth");
    
    //console.log(obj1);
    //console.log(obj2);
    
    let objLen1 = Object.keys(obj1).length;
    let objLen2 = Object.keys(obj2).length;
    
    if(objLen1 != objLen2) {
        console.log("not an anagramLen");
        return;
    }
    
    for(let key in obj1){
       console.log(key, obj1[key], obj2[key])
        if(obj1[key] != obj2[key]){
            console.log("not an anagram");
            return;
        }
    }
    console.log("anagram");
    
}
anagram();


/**
{ h: 1, e: 1, a: 1, r: 1, t: 1 }
{ e: 1, a: 1, r: 1, t: 1, h: 1 }
h 1 1
e 1 1
a 1 1
r 1 1
t 1 1
anagram
**/




