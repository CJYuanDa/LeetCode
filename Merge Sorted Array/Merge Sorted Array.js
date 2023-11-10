// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
// let nums1 = [1], m = 1, nums2 = [], n = 0;
// let nums1 = [0], m = 0, nums2 = [1], n = 1;
// let nums1 = [2, 0], m = 1, nums2 = [1], n = 1;
let nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n =3;
// let nums1 = [-1,-1,0,0,0,0], m = 4, nums2 = [-1,0], n =3;

// My solution (not good)
function merge(nums1, m, nums2, n) {
    if (nums1[m] == 0) nums1.splice(m);
    while (nums2.length != 0) {
        nums1.push(nums2.shift());
    }
    nums1.sort((a, b) => a - b);
    return nums1;
}

// solution
function merge1(nums1, m, nums2, n) {
    let check1 = m - 1, check2 = n - 1;
    let index = m + n - 1;
    while (check1 > -1 && check2 > -1) {
        if (nums2[check2] > nums1[check1]) {
            nums1[index] = nums2[check2];
            check2--;
        } else {
            nums1[index] = nums1[check1];
            check1--;
        }
        index--;
    }
    while (check2 > -1) {
        nums1[index] = nums2[check2];
        check2--;
        index--;
    }
    return nums1;
}

console.log(merge1(nums1, m, nums2, n));