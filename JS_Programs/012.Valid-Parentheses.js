//LeetCode : https://leetcode.com/problems/valid-parentheses/

class Stack{
    constructor(){
        this.items = [];
    }
    insert(element){
        this.items.push(element);
    }
    remove(){
        this.items.pop();
    }
    size(){
        return this.items.length;
    }
    peek(){
        return this.items[this.items.length-1];
    }
    clear(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length == 0
    }
}
 
function validParentheses(str){
    
    let stack = new Stack();
    console.log(stack);
    let topElem;
   for(let char of str){
       switch(char){
        case "[":
            stack.insert("[");
            break;
        case "{":
            stack.insert("{");
           break;
        case "(":
            stack.insert("(");
            break;
        case "]":
            topElem = stack.peek();
            if(topElem == "["){
                stack.remove();
            } else {
                console.log("Not Balanced"); 
                return false;
            }
            break;
        case "}":
            topElem = stack.peek();
            if(topElem == "{"){
                stack.remove();
            } else {
                console.log("Not Balanced"); 
                return false;
            }
            break;
        case ")":
            topElem = stack.peek();
            if(topElem == "("){
                stack.remove();
            } else {
                console.log("Not Balanced"); 
                return false;
            }
            break;
        }
   }
    if(stack.isEmpty()){
           console.log("Balanced"); 
        } else {
            console.log("Not Balanced"); 
        }
    
}

validParentheses("{[({()})]}");

//Input : "{[({()})]}"
//Balanced

//Input 2: "{[({([)})]}"
//Not Balanced
