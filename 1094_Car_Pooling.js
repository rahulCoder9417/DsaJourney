/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const diff = new Array(1001).fill(0);

    for (let [passengers, from, to] of trips) {
        diff[from] += passengers;
        diff[to] -= passengers;
    }

    let current = 0;

    for (let i = 0; i < 1001; i++) {
        current += diff[i];
        if (current > capacity) return false;
    }

    return true;
};