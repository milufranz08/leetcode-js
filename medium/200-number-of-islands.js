/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const height = grid.length
    const width = grid[0].length

    const ROW = [-1,0,0,1]
    const COL = [0,-1,1,0]

    function bfs(start) {
        const queue = [start];
        grid[start[0]][start[1]] = "0";

        while (queue.length > 0) {
            const [r, c] = queue.shift();

            for (let i = 0; i < ROW.length; i++) {
                const row = r + ROW[i]
                const col = c + COL[i]

                if (isValid(row, col, height, width) && grid[row][col] === "1") {
                    queue.push([row, col])
                    grid[row][col] = 0
                }

            }
        }
    }


    let count = 0;
    // bfs starting from each unvisited land cell
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {

            if (grid[r][c] === "1") {
                bfs([r, c])

                // bfs would find 1 connected island, increment count
                count++
            }
        }
    }
    return count;
};

function isValid(row, col, height, width) {
    return row >= 0 && row < height && col >= 0 && col < width
}