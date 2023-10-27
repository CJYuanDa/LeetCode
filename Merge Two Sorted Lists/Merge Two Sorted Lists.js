/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Solution
function mergeTwoLists(list1, list2) {
    let list = new ListNode();
    let merge = list;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            merge.next = list1;
            list1 = list1.next;
        } else {
            merge.next = list2;
            list2 = list2.next;
        }
        merge = merge.next;
    }
    if (list1) merge.next = list1;
    else if (list2) merge.next = list2;

    return list.next;
}

// Just array
var mergeTwoLists_array = function(list1, list2) {
    let len = list1.length + list2.length;
    let merge = [];
    for (let i=0; i < len; i++) {
        if (list1.length == 0) merge.push(list2.shift());
        else if (list2.length == 0) merge.push(list1.shift());
        else if (list1[0] <= list2[0]) merge.push(list1.shift());
        else merge.push(list2.shift());
    }
    return merge;
};

function mergeTwoLists_array1(list1, list2) {
    if (list1.length == 0 && list2.length != 0) return list2;
    if (list2.length == 0 && list1.length != 0) return list1;
    for (let i=0; i < list1.length; i++) {
        while (list1[i] > list2[0]) {
            list1.splice(i, 0, list2.shift());
        }
    }
    return list1;
}
