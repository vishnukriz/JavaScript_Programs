-----
**PerfectSquare**
-----
function PerfectSquare(num){
     let sqrt = Math.sqrt(num);
     console.log(sqrt);

     return sqrt === Math.floor(sqrt);
}
console.log(PerfectSquare(81));


-----
**PerfectCube**
-----
function PerfectCube(num){
    let cuberoot = Math.cbrt(num);
    console.log(cuberoot);

    return cuberoot === Math.round(cuberoot);
}
console.log(PerfectCube(76));



-----
**Print PerfectSquare upto 20**
-----
function square(){
    
   for(let i=1;i*i<20;i++){
       console.log(i*i);
   }
}
square();




-----
**Print PerfectCube upto 20**
-----
function cube(){

   for(let i;i**3 <20;i++){
       console.log(i**3);
   }
}
cube();

