/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {

    let min = Infinity
    let memo = Array(matrix.length).fill().map(row => Array(matrix[0].length).fill(null))

    // iterate through first row
    for (let i = 0; i < matrix[0].length; i++) {
        min = Math.min(min, dfs([0,i], matrix, memo))
    }

    return min

};

const dfs = (curr, matrix, memo) => {
    const [r, c] = curr

    if (c < 0 || c == matrix.length) {
        return Infinity
    }

    if (r === matrix.length - 1) {
        return matrix[r][c]
    }

    if (memo[r][c] !== null) {
        return memo[r][c]
    }

    let left = dfs([r+1,c-1], matrix, memo)
    let middle = dfs([r+1,c], matrix, memo)
    let right = dfs([r+1,c+1], matrix, memo)

    memo[r][c] = Math.min(left, Math.min(middle, right)) + matrix[r][c]

    return memo[r][c]
}
