/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    
    let currentNode = head;
    let counter = 0;
    while (counter < 300) {
        const val = currentNode.val;
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