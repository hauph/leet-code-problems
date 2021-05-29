/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {    
    const mainObj = {};
    let arr = [];
    const inOrder = (node, obj) => {
        if (node !== null) {
            const val = node.val;
            if (obj[val]) {
                obj[val] += 1;
            } else {
                obj[val] = 1;
            }
            inOrder(node.left, obj);
            inOrder(node.right, obj);
        }
    }

    inOrder(root, mainObj)

    let arr2 = Object.values(mainObj);
    let max = Math.max(...arr2);

    for (let item in mainObj) {
       const val = mainObj[item];
       if (val === max) {
           arr.push(item);
       }
    }

    return arr; 
};