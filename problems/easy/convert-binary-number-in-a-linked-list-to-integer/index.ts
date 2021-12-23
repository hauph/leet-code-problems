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

function getDecimalValueTS(head: ListNode | null): number {
    let number = "";
    let currNode = head;
    while (currNode) {
        number += `${currNode.val}`;
        currNode = currNode.next;
    }
    return parseInt(number, 2);
};