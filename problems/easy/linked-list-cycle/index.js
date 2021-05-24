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
        head.pos = 0;
        let currNode = head;
        while (currNode.next !== null) {
          if (currNode.next && !currNode.next.pos) {
              currNode.next.pos = currNode.pos + 1;
          } else if (currNode.next && currNode.next.pos) {
              return true;
          }
          currNode = currNode.next;
        }
        
        return false;
    }
};