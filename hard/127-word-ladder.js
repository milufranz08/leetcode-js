/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {

    // store in set, to check if it exists o(1)
    const list = new Set([...wordList])

    // store all possible letter options under each index
    const letters = new Map()
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const curr = word.charAt(i)
            const strI = i.toString()

            if (letters.has(strI)) {
                letters.set(strI, letters.get(strI).add(curr))
            } else {
                letters.set(strI, new Set([curr]))
            }
        }
    }

    let queue = []
    queue.push([beginWord, 1])
    let seen = new Set([beginWord])

    while (queue.length > 0) {
        let [word, count] = queue.shift()

        if (word === endWord) return count

        for (let i = 0; i < word.length; i++) {

            const lettersByIdx = letters.get(i.toString())

            for (letter of lettersByIdx) {
                const option = word.substring(0, i) + letter + word.substring(i + 1)
                
                if (list.has(option) && !seen.has(option)) {
                    queue.push([option, count+1])
                    seen.add(option)
                }
            }

        }

    }

    return 0
};