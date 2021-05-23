/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycleTS(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return false
    } else {
        let currNode = head;
        let duplicate = 0;
        const arr = [];
        while (currNode.next !== null) {
          if (currNode.next && duplicate !== 2) {
              if (arr.indexOf(currNode.next.val) === -1) {
                  arr.push(currNode.next.val);
                  duplicate -= 1;
              } else {
                  duplicate += 1;
              }
          } else if (currNode.next && duplicate === 2) {
              return true;
          }
          currNode = currNode.next;
        }
        
        return false;
    }
};