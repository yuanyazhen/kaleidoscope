/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 的确达到结果了，但是感觉不太对~尤其中间交换的逻辑
 * Runtime: 76 ms
 * Memory Usage: 33.9 MB
 *  beats 5.95
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // const dummy = new ListNode(0);
  // dummy.next = head;
  let second = head;
  while (second && second.next) {
    const first = second.next;

    const temp = first.val;
    first.val = second.val;
    second.val = temp;

    second = second.next.next;
  }
  return head;
};
