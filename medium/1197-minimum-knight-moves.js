/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var minKnightMoves = function(x, y) {

    const ROW = [-2,-2,-1,-1,1,1,2,2]
    const COL = [-1,1,-2,2,-2,2,-1,1]

    let queue = [[0,0, 0]]
    let visited = new Map()
    visited.set("00", 0)

    while (queue.length > 0) {
        const [r, c] = queue.shift()
        let counter = visited.get(`${r}${c}`)

        if (Math.abs(r) === Math.abs(x) && Math.abs(c) === Math.abs(y)) {
            return counter
        }

        for (let i = 0; i < ROW.length; i++) {
            const row = r + ROW[i]
            const col = c + COL[i]

            if (!visited.has(`${row}${col}`)) {
                queue.push([row, col])
                visited.set(`${row}${col}`, counter + 1)
            }
        }
    }
    
};