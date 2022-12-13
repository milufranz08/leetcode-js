/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {

    // store in set, to check if it exists o(1)
    const list = new Set([...wordList])
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let queue = []
    queue.push([beginWord, 1])
    list.delete(beginWord)

    while (queue.length > 0) {
        let [word, count] = queue.shift()

        if (word === endWord) return count

        for (let i = 0; i < word.length; i++) {

            for (letter of alphabet) {
                const option = word.substring(0, i) + letter + word.substring(i + 1)
                
                if (list.has(option)) {
                    queue.push([option, count+1])
                    list.delete(option)
                }
            }

        }

    }

    return 0
};