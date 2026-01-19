//find the second largest number in an array

let arr = [12,41,8,64];

function findSecondLargest(arr){
    let firstLargest = -Infinity;
    let SecondLargest = -Infinity;

    for(let i =0; i < arr.length; i ++ ){
        if(arr[i] > firstLargest){
            SecondLargest = firstLargest;
            firstLargest = arr[i];
        }else if (arr[i] > SecondLargest){
            SecondLargest= arr[i]
        }
    }

    return SecondLargest;
}

let result = findSecondLargest(arr);

console.log(result)