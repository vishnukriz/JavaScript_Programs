function sorting(){
    let arr = [7,5,4,3];
    console.log("Input Array:", arr );
    for(let i=1;i<arr.length;i++){
        console.log("Round ", i)
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                console.log(arr);
            }
            
        }
    }
    console.log("Output Array:",arr);
    
    
}
sorting();

/**
Input Array: [ 7, 5, 4, 3 ]
Round  1
[ 5, 7, 4, 3 ]
Round  2
[ 4, 7, 5, 3 ]
[ 4, 5, 7, 3 ]
Round  3
[ 3, 5, 7, 4 ]
[ 3, 4, 7, 5 ]
[ 3, 4, 5, 7 ]
Output Array: [ 3, 4, 5, 7 ]
**/
