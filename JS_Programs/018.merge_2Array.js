function test(){

   let arr = [1,4,2];
   let arr2 = [5,3,6];

   let MergeArr = arr.concat(arr2);
   console.log(MergeArr);

   MergeArr.sort((arr, arr2) => arr - arr2);
   console.log(MergeArr);

   //we can also use spread operator to merge 2 arrays
   let MergeArr = [...arr,...arr2]
   

}
test();
