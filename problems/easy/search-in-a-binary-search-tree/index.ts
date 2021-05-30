/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function searchBSTTS(root: TreeNode | null, val: number): TreeNode | null {
    let current: TreeNode = root;
    while (current && current.val !== val) {
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  
    return current;
};