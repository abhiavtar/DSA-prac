//write a function which detects the palindrome

let num = 1221
function isPandindrome(x){


    let xCopy = x;
    let reverse=0;
   while(x>0){
    let rem = x % 10;
    reverse = (10*rev) + rem;
    x = Math.floor(x/10);
   }   


    if(revers == xCopy){
        return true;
    }else{
        return false;
    }
}
