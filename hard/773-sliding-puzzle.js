/**
 * @param {number[][]} board
 * @return {number}
 */
 var slidingPuzzle = function(board) {
    const ROW = [-1,0,0,1]
    const COL = [0,-1,1,0]
    const height = board.length
    const width = board[0].length

    const TARGET = "123450"
    const initialFlatten = flattenBoard(board)

    if (initialFlatten === TARGET) return 0

    // get 0 position
    let initialPos = []
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 0) {
                initialPos = [i,j]
            }
        }
    }

    let queue = [[board, 0, initialPos]]
    let seen = new Set()
    seen.add(initialFlatten)

    while (queue.length > 0) {
        let [curr, count, pos] = queue.shift()
        let [r, c] = pos

        if (flattenBoard(curr) === TARGET) return count

        for (let i = 0; i < ROW.length; i++) {
            const row = r + ROW[i]
            const col = c + COL[i]

            if (isValid(row, col, height, width)) {
                let currCopy = makeCopy(curr)
                currCopy[r][c] = currCopy[row][col]
                currCopy[row][col] = 0

                const flatten = flattenBoard(currCopy)

                if (!seen.has(flatten)) {
                    queue.push([currCopy, count+1, [row,col]])
                    seen.add(flatten)
                }
            }
        }

    }

    return -1
};

function makeCopy(board) {
    let copy = []
    for (const row of board) {
        copy.push([...row])
    }

    return copy
}

function flattenBoard(board) {
    return [...board[0], ...board[1]].join("")
}

function isValid(row, col, height, width) {
    return row >= 0 && row < height && col >= 0 && col < width
}