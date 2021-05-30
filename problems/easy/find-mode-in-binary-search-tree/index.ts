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

 interface Obj {
    [key: number]: number
}

function findModeTS(root: TreeNode | null): number[] {
    const mainObj: Obj = {};
    let arr: number[] = [];
    const inOrder = (node: TreeNode, obj: Obj): void => {
        if (node !== null) {
            const val: number = node.val;
            if (obj[val]) {
                obj[val] += 1;
            } else {
                obj[val] = 1;
            }
            inOrder(node.left, obj);
            inOrder(node.right, obj);
        }
    }

    inOrder(root, mainObj);

    let arr2: number[] = Object.values(mainObj);
    let max: number = Math.max(...arr2);

    for (let item in mainObj) {
        const val = mainObj[item];
        if (val === max) {
            arr.push(Number(item));
        }
    }

    return arr; 
};