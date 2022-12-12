/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {

    const dfs = (left, right) => {

        // Already reached the middle (like on binary search)
        if (left > right) {
            return null
        }

        // get the mid in the sorted arr
        let mid = Math.floor((left + right) / 2)

        // create the node
        let root = new TreeNode(nums[mid])

        // only pass the left side of the array
        root.left = dfs(left, mid - 1)

        // only pass the right side of the array
        root.right = dfs(mid + 1, right)

        return root
    }
    
    return dfs(0, nums.length - 1)
};
