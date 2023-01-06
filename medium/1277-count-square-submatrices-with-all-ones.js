/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
    let counter = 0

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            const curr = matrix[row][col]

            if (curr > 0) {

                // Add square of side 1
                counter += 1

                let side = 1
                while (col + side < matrix[0].length && row + side < matrix.length) {
                    if (checkLastRow([row + side, col], matrix, side) && checkLastCol([row, col + side], matrix, side)) {
                        counter++
                        side++
                    } else {
                        break
                    }

                }

            }

        }

    }

    return counter
};

function checkLastRow([row, col], matrix, side) {
    for (let i = col; i <= col + side; i++) {
        if (matrix[row][i] < 1) {
            return false
        }
    }

    return true
}

function checkLastCol([row, col], matrix, side) {
    for (let i = row; i <= row + side; i++) {
        if (matrix[i][col] < 1) {
            return false
        }
    }

    return true
}