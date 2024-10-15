/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

const reverseBetween = (head, m, n) => {
  let currentPosition = 1;
  let currentNode = head;

  while (currentPosition < m) {
    currentNode = currentNode.next;
    currentPosition++;
  }

  let prev = null;
  let tailOfReversedList = currentNode;

  while (currentNode.next !== null && currentPosition <= n) {
    let nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
    currentPosition++;
  }

  tailOfReversedList.next = currentNode.next;
  currentNode.next = prev;
  return m > 1 ? head : currentNode;
};
