/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = new ListNode(0, null);
    let orderedList = head

    lists = lists.filter(item => item);
    while(lists.length > 1) {
        // 每次求最小值
        // 优化：排序，Update后插入排序
        let min = 0;
        for(let i=1;i<lists.length;i++) {
            if(lists[i] && lists[min] && lists[i].val < lists[min].val) {
                min = i;
            }
        }
        orderedList.next = lists[min];
        orderedList = orderedList.next;
        
        lists[min] = lists[min].next;
        // 过滤
        lists = lists.filter(item => item);
    }
    
    if(lists.length === 1) {
        orderedList.next = lists[0]
        orderedList = orderedList.next;
    }
    return head.next;
};

// 解法一：
// 1.收集收据到数组里，排序
// 2.重组数据成链表
var mergeKLists_sort1 = function(lists) {
    if(!lists || !lists.length) return null;
    let arr = [], res = new ListNode(-1);
    
    lists.forEach(list => {
        let cur = list;
        while(cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    });
    
    let cur = res;
    arr.sort((a,b) => a - b)
        .forEach(n => {
        let temp = new ListNode(n);
        cur.next = temp;
        cur = cur.next;
    });
    return res.next;
};

// 解法二：
// 1.不断比较得出最小的值并往后传递
var mergeKLists_compare_one_by_one = function(lists) {
    if(!lists || !lists.length) return null;
    const findMinNode = (lists = lists) => {
        let index = -1, 
            min = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < lists.length; i++) {
            if(!lists[i]) continue;
            if(lists[i].val <= min) {
                min = lists[i].val;
                index = i;
            }
        }
        
        let resNode = null;
        if(index !== -1) {
            resNode = lists[index];
            lists[index] = lists[index].next;
        }
        return resNode;
    };
    
    let res = new ListNode(-1),
        cur = res,
        temp = findMinNode(lists);
    while(temp) {
        cur.next = temp;
        cur = cur.next;
        temp = findMinNode(lists);
    }
    return res.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_priority_queue = function(lists) {
    let queue = new PriorityQueue();
    lists.forEach(list => {
        if(list) queue.enqueue(list, list.val)
    });

    let res = new ListNode(-1);
    let cur = res;
    while(!queue.isEmpty()) {
        cur.next = queue.dequeue();
        cur = cur.next;
        if(cur.next) queue.enqueue(cur.next, cur.next.val);
    }
    return res.next;
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

// use priority queue (min heap)
// 3.优先队列和堆
// 升序优先队 , 降序优先队
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		let node = new Node(val, priority);
		this.values.push(node);
		this.bubbleUp();
	}

	dequeue() {
		let max = this.values[0];
		let end = this.values.pop();
		if(this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max.val;
	}
    
    isEmpty() {
        return !this.values.length;
    }
    
    bubbleUp(index = this.values.length - 1) {
		if(index <= 0) return;
		let parentIndex = Math.floor((index - 1) / 2);
		if(this.values[index].priority <= this.values[parentIndex].priority) {
			[this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
			this.bubbleUp(parentIndex);
		}
	}
	
	bubbleDown(index = 0, swapIndex = null) {
		let leftIndex = index * 2 + 1,
			rightIndex = index * 2 + 2,
			length = this.values.length;

		if(leftIndex < length) {
			if(this.values[leftIndex].priority <= this.values[index].priority) {
				swapIndex = leftIndex;
			}
		}

		if(rightIndex < length) {
			if((swapIndex === null && this.values[rightIndex].priority <= this.values[index].priority) || (swapIndex !== null && this.values[rightIndex].priority <= this.values[leftIndex].priority)) {
				swapIndex = rightIndex;
			}
		}

		if(swapIndex !== null) {
			[this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];
			this.bubbleDown(swapIndex, null);
		}
	}
}