/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const arr = [];
    if (nums1.length < nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            const foundIdx = nums2.indexOf(nums1[i]);
            if (foundIdx > -1) {
                if (arr.indexOf(nums1[i]) === -1) {
                    arr.push(nums1[i]);
                }
                nums2.splice(foundIdx, 1);
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++) {
            const foundIdx = nums1.indexOf(nums2[i]);
            if (foundIdx > -1) {
                if (arr.indexOf(nums2[i]) === -1) {
                    arr.push(nums2[i]);
                }
                nums1.splice(foundIdx, 1);
            }
        }
    }
    
    return arr;
};