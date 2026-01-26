let num = 234
var reverse = function(x) {

    let xCopy = x;
    x = Math.abs(x)
    let rev = 0;

    while(x > 0){
        let rem = x % 10;
        rev = (rev*10) + rem;
        x = Math.floor(x/10)
    }
    let setLimit = Math.pow(2,31);

    if(rev > setLimit || rev < -setLimit){
        return 0;
    }
    return(xCopy < 0)? -rev: rev;
};