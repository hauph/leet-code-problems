/**
 * NOTE: 
 * 1. This solution is not the fastest
 * 2. This solution can be applied to both JS and TS
 */

/**
    * Definition for singly-linked list.
    * function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
*/

/**
    * @param {ListNode} head
    * @return {boolean}
*/
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    } else {
        try {
            // If there is no cycle, it can be deep cloned without error
            const obj = JSON.parse(JSON.stringify(head));
            return false;
        } catch(err) {
            // It there is cycle, it cannot be deep cloned and thus error will appear
            return true;
        }
    }
};