// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/



// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4





// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var mergeTwoLists = function(l1, l2) {
    if (l1 && !l2) {            // if l2 is empty, return l1
        return l1
    } else if (l2 && !l1) {     // if l1 is empty, return l2
        return l2
    };
    
    if (l1 && l2) {             // if both l1 and l2 have nodes
        
        let next1 = l1.next;
        let next2 = l2.next;


        
        if (l1.val <= l2.val && (l1.next == null || l2.val <= l1.next.val)) {  // if l2 is between l1 and l1.next, insert l2
            l1.next = l2;
            l2.next = next1;

            if (next2) {                        // if original l2 has more nodes, continue merge (l2 is now a node in l1)
                mergeTwoLists(l2, next2);
            };

        } else if (l1.val > l2.val) {           // if l1 is greater than l2, insert l2 before l1
            l2.next = l1;
            
            if (l2 && !next2) {                     // if at the end of original l2, return current l2 (new l1 head)
                return l2
            } else {
                mergeTwoLists(l2, next2)            // else, continue merging original l2 into current l2 (new l1)
                return l2
            };
            
        } else {                                // skip to next node in l1, and check against l2
            mergeTwoLists(l1.next, l2)
        };
            
    };
    
    return l1
};