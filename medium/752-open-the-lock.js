/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
    if (target === "0000") return 0

    if (deadends.includes("0000")) return -1

    const deadendsSet = new Set([...deadends])

    const seen = new Set()
    seen.add("0000")

    const queue = []
    queue.push(["0000", 0])

    while (queue.length > 0) {
        let [node, level] = queue.shift()

        if (node === target) return level

        if (deadendsSet.has(node)) continue

        let neighbors = getNeighbors(node)

        for (const nei of neighbors) {
            if (!seen.has(nei)) {
                queue.push([nei, level + 1])
                seen.add(nei)
            }
        }
    }

    return -1;
};

function getNeighbors(node) {
    const DELTA = [1, -1]
    let neighbors = []

    for (let i = 0; i < 4; i++) {
        let curr = Number(node.charAt(i))

        for (d of DELTA) {
            curr = curr === 0 && d === -1 ? 10 : curr
            const digit = (curr + d) % 10
            neighbors.push(node.substring(0, i) + digit + node.substring(i + 1))
        }
    }

    return neighbors
}