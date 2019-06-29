// 19. Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * rude solution: first get length 
 * Runtime: 80 ms
 * Memory Usage: 33.9 MB
 *  beats 11.53 %
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = head;
  let len = 0;
  while (pre) {
    len++;
    pre = pre.next;
  }
  // console.log(len)
  pre = head;
  for (let i = 0; i < len; ++i) {
    if (i === 0 && i === len - n) {
      head = pre.next;
      break;
    }
    if (i === len - n - 1) {
      pre.next = pre.next.next;
      break;
    }
    pre = pre.next;
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * rude solution: first get length 
 * Runtime: 56 ms
 * Memory Usage: 34 MB
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_1 = function (head, n) {
  let node = head;
  node.pre = null;
  // 记录前一个元素
  while (node.next) {
    let pre = node;
    node = node.next;
    node.pre = pre;
  }
  // 从尾部开始删除
  for (let i = 0; i < n - 1; ++i) {
    node = node.pre;
  }
  if (!node.pre) {
    head = node.next;
  } else {
    node.pre.next = node.next;
  }

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 最优解：两个指针前后相差 n
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_2 = function (head, n) {
  let p = q = null;
  p.next = q.next = head;

  let i = 0;
  while(p.next) {
    i++;
    p=p.next;
    if(i > n) {
      q = q.next;
    }
  }
  q = q.next.next;

  return head;
};
