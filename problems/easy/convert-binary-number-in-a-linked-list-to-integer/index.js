/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let number = "";
  let currNode = head;
  while (currNode) {
    number += `${currNode.val}`;
    currNode = currNode.next;
  }
  return parseInt(number, 2);
};
