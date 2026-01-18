
let arr =[46,56,25,87,45];



function searchelement(arr, x){
  for(let i =0 ; i < arr.length ; i++){
    if(arr[i] ==  x ){
        return i;
        
    } 
        return -1; 
        
    

  }
}

console.log(searchelement(arr,46));



//write a function that returns the number of negative numbers

let mixNum= [-41, 10, 56,-15]

function negNum(mixNum){

    let counter = 0;
     for(let i = 0; i < mixNum.length ; i ++){
        if(mixNum[i] < 0){
            counter++;
            
     }
   
     
}

return counter;

}
console.log(negNum(mixNum));

//write the function that returns the largest number in an array

let FindArr = [1,556,46,78,968,78]

let target = FindArr[0]


function findLargestNum(Arr){
    for(let i = 0; i < FindArr.length; i ++){
        if( Arr[i] > target){
            target = Arr[i] ;
        }
    }

    return target ;
}

console.log(findLargestNum(FindArr));


//write the function that returns the smallest number in an array

// write the function that returns the smallest number in an array

let FindArr1 = [45, 556, 6, 78, 968, 78];

function findSmallestNum(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallestNum(FindArr1)); // 1
