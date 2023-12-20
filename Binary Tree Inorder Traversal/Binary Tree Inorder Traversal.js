/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node3 = new TreeNode(3, null, null);
let node2 = new TreeNode(2, node3, null);
let node1 = new TreeNode(1, null, node2);

// My solution (recursive)
var inorderTraversal = function(root) {
    res = [];
    function helper(root) {
        if (root) {
            helper(root.left);
            res.push(root.val);
            helper(root.right);
        }
    }
    helper(root);
    return res;
};

// console.log(inorderTraversal(node1));

// Solution (iterately)
var inorderTraversal2 = function(root) {
    res = [];
    stack = [];
    current = root;
    while (current || stack.length != 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        res.push(current.val);
        current = current.right;
    }
    return res;
};

console.log(inorderTraversal2(node1));