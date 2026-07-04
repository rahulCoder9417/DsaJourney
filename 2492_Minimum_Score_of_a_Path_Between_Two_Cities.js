/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
    const root = [...Array(n + 1).keys()];
    const find = i => root[i] === i ? i : root[i] = find(root[i]);

    for (let i = 0; i < roads.length; i++)
        root[find(roads[i][0])] = find(roads[i][1]);

    roads = roads.filter(r => find(r[0]) === find(1));

    let min = Infinity;

    for (const [, , d] of roads)
        min = Math.min(min, d);

    return min;
};