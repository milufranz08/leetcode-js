/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {

    if (!root) return []

    let queue = [[root, 0]]
    let res = []

    while (queue.length > 0) {
        const [node, level] = queue.shift()

        if (level % 2 === 0) {
            res[level] = res[level] ? [...res[level], node.val] : [node.val]
        } else {
            res[level] = res[level] ? [node.val, ...res[level]] : [node.val]
        }

        if (node.left) queue.push([node.left, level + 1])
        if (node.right) queue.push([node.right, level + 1])
    }

    return res
};