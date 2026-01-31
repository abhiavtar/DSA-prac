
// first sol for merge sorted array
/* function mergeShort(nums1,m,nums2,n){
let p1=0;
let p2=0;
let nums1Copy = nums1;

for(let i=0; i< m+n; i++){
    if(p2 >=n || (p1<m &&nums1Copy[p1] < num2[p2])){
          nums1[i] = nums1Copy[p1];
          p++
    }
    else{
        nums[i] = nums[p2];
        p2++
    }
}
} */

//0(m+n) solution

var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;
    for(let i = m+n -1; i >=0; i-- ){

        if(p2 < 0) break;

        if(p1 >=0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        }
        else{
            
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};

