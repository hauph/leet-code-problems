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

 function deleteDuplicatesTS(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    
    let currentNode: ListNode = head;
    let counter: number = 0;
    while (counter < 300) {
        const val: number = currentNode.val;
        if (currentNode.next && val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } 
        if (!currentNode.next) {
            currentNode = head;
            counter += 1;
        } else {
            currentNode = currentNode.next; 
        }   
    }
    
    return head
};