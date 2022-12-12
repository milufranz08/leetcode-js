/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
 var wallsAndGates = function(rooms) {
    const INF = 2147483647
    const ROW = [-1,0,0,1]
    const COL = [0,-1,1,0]
    const height = rooms.length
    const width = rooms[0].length

    const queue = [];

    // Find all portals first
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (rooms[row][col] === 0) {
                queue.push([row, col, 0])
            }
        }
    }

    while (queue.length > 0) {
        let [r, c, level] = queue.shift();

        for (let i = 0; i < ROW.length; i++) {
            const row = r + ROW[i];
            const col = c + COL[i];

            if (isValid(row, col, height, width)) {
                if (rooms[row][col] === INF) {
                    rooms[row][col] = level + 1
                    queue.push([row, col, rooms[row][col]])
                }
            }
        }
    }

};

function isValid(row, col, height, width) {
    return row >=0 && row < height && col >= 0 && col < width
}