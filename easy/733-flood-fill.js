/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    const height = image.length
    const width = image[0].length
    const ROW = [-1,0,1,0]
    const COL =[0,1,0,-1]

    let visited = Array(height).fill().map(row => Array(width).fill(false))
    let queue = [[sr, sc]]
    let ogColor = image[sr][sc]
    visited[sr][sc] = true

    while (queue.length > 0) {
        const [r, c] = queue.shift()
        image[r][c] = color

        for (let i = 0; i < ROW.length; i++) {
            const row = r + ROW[i]
            const col = c + COL[i]

            if (isValid(row, col, height, width) && image[row][col] === ogColor && !visited[row][col]) {
                queue.push([row, col])
                visited[row][col] = true
            }
        }

    }

    return image
};

function isValid(row, col, height, width) {
    return row >= 0 && row < height && col >= 0 && col < width
}