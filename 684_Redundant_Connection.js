/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let map = new Map();

    for (let [u, v] of edges) {
        if (!map.has(u)) map.set(u, []);
        if (!map.has(v)) map.set(v, []);
    }

    const dfs = (start, target, visited) => {
        if (start === target) return true;
        visited.add(start);
        for (let neighbor of map.get(start)) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, target, visited)) return true;
            }
        }
        return false;
    };

    for (let [u, v] of edges) {
        const visited = new Set();
        if (map.get(u).length && map.get(v).length && dfs(u, v, visited)) {
            return [u, v]; 
        }
        map.get(u).push(v);
        map.get(v).push(u);
    }

    return [];
};
