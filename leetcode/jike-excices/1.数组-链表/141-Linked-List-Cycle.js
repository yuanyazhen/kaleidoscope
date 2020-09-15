// 141-Linked-List-Cycle.js
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
    var fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    
    return false;
};


/**
 * 利用set
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const set = new Set();
    let node = head;
    // return true when node has been visited and saved in the set
    while (node !== null) {
        if (set.has(node)) {
            return true;
        }
        set.add(node);
        node = node.next
    }
    return false;
};

