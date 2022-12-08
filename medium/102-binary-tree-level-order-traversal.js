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
 var levelOrder = function(root) {

    if (!root) {
        return []
    }

    let queue = [[root, 0]]
    let res = []

    while (queue.length > 0) {
        const [curr, level] = queue.shift()

        res[level] = !res[level] ? [curr.val] : [...res[level], curr.val]

        if (curr?.left) {
            queue.push([curr.left, level + 1])
        }

        if (curr?.right) {
            queue.push([curr.right, level + 1])
        }

    }

    return res
};