let merge = function(s) {
    let numstodelete = 0;
    nums1.push(...nums2)
    nums1 = nums1.sort((a,b) => a - b)
    nums1 = nums1.filter((nums1) => nums1 !== numstodelete);
    return nums1
};
let nums1 =[1,2,3,0,0,0,2,4,8]
let nums2 = [2,5,6,0,4,9]
let a = merge(nums1)
console.log(a)