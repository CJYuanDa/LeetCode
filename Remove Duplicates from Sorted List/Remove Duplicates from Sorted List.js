/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// solution
function deleteDuplicates(head) {
    if (head == null) return head;
    let list = head;
    let current = head;
    while (current.next !== null) {
        if (current.val !== current.next.val) {
            list.next = current.next;
            list = list.next;
        }
        current = current.next;
    }
    list.next = null;
    return head;
}

// better solution
function deleteDuplicates(head) {
    let current = head;
    while(current){
        if(current.next !== null && current.val === current.next.val){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
}