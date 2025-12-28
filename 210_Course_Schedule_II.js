function findOrder(numCourses, prerequisites) {
    const preMap = new Map();
    const order = []
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    for (let [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }

    const visiting = new Set();
    const add =new Set()
    const dfs = (crs) => {
        if (visiting.has(crs)) {
            return false;
        }
        if (preMap.get(crs).length === 0) {
            if(!add.has(crs))order.push(crs);add.add(crs)
            return true;
        }

        visiting.add(crs);
        for (let pre of preMap.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(crs);
        preMap.set(crs, []);
        if(!add.has(crs))order.push(crs);add.add(crs)
        return true;
    };

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return [];
        }
    }
    return order;

}