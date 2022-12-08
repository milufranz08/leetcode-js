/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    let left = 0
    let right = 0

    let res = []

    while (left < words.length) {
        let lineCount = maxWidth
        let letterCount = 0

        while (right < words.length && (lineCount - words[right].length) >= 0) {
            lineCount = lineCount - (words[right].length + 1)
            letterCount += words[right].length
            right++
        }

        let spacesAvailable = maxWidth - letterCount
        let spacesNeeded = right - left - 1
        let line = ""

        if (right >= words.length || spacesNeeded === 0) { 
            line = justifyLeft(words, left, right, spacesAvailable)
        } else {
            line = evenlySpace(words, left, right, spacesAvailable, spacesNeeded)
        }


        res.push(line)
        left = right
    }

    return res
};

function justifyLeft(words, left, right, spacesAvailable) {
    let line = ""

    for (let i = left; i < right; i++) {

        if (i === (right - 1)) {
            let spacesArr = Array(spacesAvailable).fill(" ")
            line += words[i] + spacesArr.join("")
        } else {
            line += (words[i] + " ")
            spacesAvailable -= 1
        }

    }

    return line
}

function evenlySpace(words, left, right, spacesAvailable, spacesNeeded) {
    let line = ""
    for (let i = left; i < right; i++) {

        let spaces = Math.ceil(spacesAvailable/spacesNeeded)
        if (spacesAvailable > 0) {
            let arrLength = (spacesAvailable - spaces >= 0) ? spaces : spacesAvailable
            let spacesArr = Array(arrLength).fill(" ")
            line += words[i] + spacesArr.join("")
            spacesAvailable -= spaces
            spacesNeeded -= 1
        } else {
            line += words[i]
        }
    }

    return line
}